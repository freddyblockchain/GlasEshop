<script lang="ts">
  import TailwindCss from "./TailwindCSS.svelte";
  import CreateAunComponent from "./components/CreateAunComponent.svelte";
  import PeraConnect from "./components/PeraConnectButton.svelte";
  import { peraWallet } from "./algorand/peraWallet";
  import AunViewComponent from "./components/AunViewComponent.svelte";

  export const PeraWallet = peraWallet;
</script>

<main>
  <div>
    <h3 class="text-center text-2xl mt-8">Algorand Username Service!</h3>
  </div>
  <PeraConnect />
  <CreateAunComponent />
  <AunViewComponent />
</main>

<TailwindCss />
