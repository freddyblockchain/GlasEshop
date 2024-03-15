<script lang="ts">
  import { connectedAddress } from "../store";
  import Button from "./Button.svelte";
  import TextInput from "./TextInput.svelte";
  import { createAanTransaction } from "@freddyblockchain/aans-utils";
  import { algodClient } from "../algorand/algoClient";
  import { connectedWallet } from "../store";
  import { getWalletConnection } from "../algorand/WalletHandler";

  const textPlaceholder = "Enter name to create"; // default placeholder text
  const buttonPlaceholder = "Create Name"; // default placeholder text
  let value = "";

  const handleCreateAan = async () => {
    if (getWalletConnection($connectedWallet).isConnected) {
      let transactions = await createAanTransaction(value, $connectedAddress);
      const wallet = getWalletConnection($connectedWallet);
      const signedTransactionGroup = await wallet.signTransaction([
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
