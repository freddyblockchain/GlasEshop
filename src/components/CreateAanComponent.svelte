<script lang="ts">
  import { connectedAddress } from "../store";
  import { peraWallet } from "../algorand/WalletHandler";
  import Button from "./Button.svelte";
  import TextInput from "./TextInput.svelte";
  import {
    SignerTransaction,
    createAanTransaction,
  } from "@freddyblockchain/aans-utils";
  import { algodClient } from "../algorand/algoClient";
  import { Buffer } from "buffer";
  import algosdk, { assignGroupID } from "algosdk";

  const textPlaceholder = "Enter name to create"; // default placeholder text
  const buttonPlaceholder = "Create Name"; // default placeholder text
  let value = "";

  const handleCreateAan = async () => {
    if (peraWallet.isConnected) {
      alert("value is : " + value);
      let transactions = await createAanTransaction(value, $connectedAddress);

      transactions.forEach((signerTransaction: SignerTransaction) => {
        const group = signerTransaction.txn.group;
        if (group) {
          // Convert the Uint8Array to a base64 string for readability
          const groupBase64 = Buffer.from(group).toString("base64");
          console.log(groupBase64);
        } else {
          console.log("This transaction does not have a group set.");
        }
      });
      const signedTransactionGroup = await peraWallet.signTransaction([
        transactions,
      ]);

      const { txId } = await algodClient
        .sendRawTransaction(signedTransactionGroup)
        .do();

      console.log(`txns signed successfully! - txID: ${txId}`);
    } else {
      alert("Please connect wallet");
    }
  };
</script>

<div class="border-gray-100 border-4 p-8">
  <TextInput placeholder={textPlaceholder} bind:value></TextInput>
  <Button placeholder={buttonPlaceholder} buttonPressedAction={handleCreateAan}
  ></Button>
</div>
