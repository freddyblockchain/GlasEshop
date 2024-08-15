<script lang="ts">
  import Button from "$lib/components/ui/button/Button.svelte";
  import { cartItems } from "../stores/cartStore";
</script>

<div class="flex flex-row justify-center items-center">
  <div class="flex items-center flex-col">
    {#each $cartItems as item}
      <div class="flex flex-row items-center m-5">
        <div class="flex flex-col">
          <p class="text-md font-bold">Product: {item.productName}</p>
          <p class="text-sm">Tykkelse: {item.glasInfo.Tykkelse}</p>
          <p class="text-sm">Profilramme: {item.glasInfo.ProfilRamme}</p>
          <p class="text-sm">Belægning: {item.glasInfo.Belægning}</p>
          <p class="text-sm">EndeKappe: {item.glasInfo.EndeKappe}</p>
        </div>
        <div class="flex">
          <input
            type="number"
            id="nrOfItem"
            min="1"
            max="100"
            value={item.nrOfItems}
            class="w-12 p-1 text-sm border rounded max-h-10"
          />
        </div>
      </div>
    {/each}
  </div>
  <Button class="m-10">Gå til Betaling</Button>
</div>
