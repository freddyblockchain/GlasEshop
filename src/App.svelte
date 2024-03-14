<script lang="ts">
  import PeraConnect from "./components/PeraConnectButton.svelte";
  import { peraWallet } from "./algorand/WalletHandler";
  import AanViewComponent from "./components/AanViewComponent.svelte";
  import CreateAanComponent from "./components/CreateAanComponent.svelte";
  import WalletConnectButton from "./components/WalletConnectButton.svelte";
  export const PeraWallet = peraWallet;
</script>

<main>
  <div class="text-center">
    <div>
      <h3 class="text-2xl mt-8">Algorand Alias Service!</h3>
    </div>
    <WalletConnectButton />
    <CreateAanComponent />
    <AanViewComponent />
  </div>
</main>
