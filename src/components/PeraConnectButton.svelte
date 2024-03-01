<script>
  import { connectedAddress } from "../store";
  import { peraWallet } from "../algorand/peraWallet";
  import { onMount } from "svelte";

  onMount(() => {
    // Reconnect to the session when the component is mounted
    peraWallet
      .reconnectSession()
      .then((accounts) => {
        // Setup the disconnect event listener
        peraWallet.connector.on("disconnect", handleDisconnectWalletClick);
        if (accounts.length) {
          connectedAddress.set(accounts[0]);
        }
      })
      .catch((e) => console.log(e));
  });
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

<div>
  Pera Connect
  <button
    on:click={$connectedAddress
      ? handleDisconnectWalletClick
      : handleConnectWalletClick}
  >
    {$connectedAddress ? "Disconnect" : "Connect to Pera Wallet"}
  </button>
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
</style>
