<script>
  import { connectedAddress } from "../store";
  import { peraWallet } from "../algorand/WalletHandler";
  import { onMount } from "svelte";
  import Button from "./Button.svelte";

  /*onMount(() => {
    // Reconnect to the session when the component is mounted
    peraWallet
      .reconnectSession()
      .then((accounts) => {
        // Setup the disconnect event listener
        if (peraWallet.connector) {
          peraWallet.connector.on("disconnect", handleDisconnectWalletClick);
          if (accounts.length) {
            connectedAddress.set(accounts[0]);
          }
        }
      })
      .catch((e) => console.log(e));
  });*/
  export function handleConnectWalletClick() {
    peraWallet
      .connect()
      .then((newAccounts) => {
        // Setup the disconnect event listener
        peraWallet.connector.on("disconnect", handleDisconnectWalletClick);
        connectedAddress.set(newAccounts[0]);
      })
      .catch((error) => {
        if (error.data && error.data.type !== "CONNECT_MODAL_CLOSED") {
          console.log(error);
        }
      });
  }

  export function handleDisconnectWalletClick() {
    peraWallet
      .disconnect()
      .then(() => {
        connectedAddress.set("");
      })
      .catch((error) => {
        console.log(error);
      });
  }
</script>

<div class="border-gray-100 border-4 p-8">
  <h3>Network: <b>Testnet</b></h3>
  Pera Connect
  <Button
    placeholder={$connectedAddress ? "Disconnect" : "Connect"}
    buttonPressedAction={() => {
      $connectedAddress
        ? handleDisconnectWalletClick()
        : handleConnectWalletClick();
    }}
  ></Button>
</div>

<style>
</style>
