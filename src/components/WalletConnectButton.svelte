<script lang="ts">
  import { writable } from "svelte/store";
  import { connectedAddress, connectedWallet } from "../store";
  import Button from "./Button.svelte";
  import Modal from "./Modal.svelte";
  import {
    WALLET_CONNECTION,
    handleConnectWalletClick,
    handleDisconnectWalletClick,
  } from "../algorand/WalletHandler";

  const showModal = writable(false);

  function onSelectOption(option: WALLET_CONNECTION) {
    showModal.set(false); // Hide the modal after an option is selected
    // Additional logic based on the selected option
    handleConnectWalletClick(option);
  }

  function onClose() {
    showModal.set(false);
  }
</script>

<div>
  <Button
    placeholder={$connectedWallet !== WALLET_CONNECTION.NONE
      ? "Disconnect"
      : "Connect Wallet"}
    buttonPressedAction={() => {
      if ($connectedWallet !== WALLET_CONNECTION.NONE) {
        handleDisconnectWalletClick($connectedWallet);
      } else {
        showModal.set(true);
      }
    }}
  ></Button>
  {#if $showModal}
    <!-- Use the Svelte store's value to conditionally render the modal -->
    <Modal showModal={true} {onSelectOption} {onClose} />
  {/if}
</div>
