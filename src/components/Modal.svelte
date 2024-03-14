<!-- Modal.svelte -->
<script lang="ts">
  import { WALLET_CONNECTION } from "../algorand/WalletHandler";

  export let showModal = false;
  export let onSelectOption = (option: WALLET_CONNECTION) => {}; // Placeholder function for handling option selection
</script>

{#if showModal}
  <div
    class="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center"
  >
    <div
      class="bg-white rounded-lg shadow-lg overflow-hidden flex w-1/4 h-1/4 text-xl"
    >
      <div
        class="w-1/2 p-4 cursor-pointer hover:bg-gray-100 flex justify-center items-center text-center"
        on:click={() => onSelectOption(WALLET_CONNECTION.PERA)}
      >
        Pera Wallet
      </div>
      <div class="border-r border-gray-300"></div>
      <div
        class="w-1/2 p-4 cursor-pointer hover:bg-gray-100 flex justify-center items-center text-center"
        on:click={() => onSelectOption(WALLET_CONNECTION.DEFLY)}
      >
        Defly
      </div>
    </div>
  </div>
{/if}
