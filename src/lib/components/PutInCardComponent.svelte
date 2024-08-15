<script lang="ts">
  import { cartItems } from "../../stores/cartStore";
  import Button from "./ui/button/Button.svelte";

  export let cartItem: CartItem;

  let nrOfItem = 1;

  function onNumberChange(event: Event) {
    const input = event.target as HTMLInputElement;
    nrOfItem = Number(input.value);
  }

  function addItem() {
    console.log("cart item belægning " + cartItem.glasInfo.Belægning);
    console.log("cart item tykkelse " + cartItem.glasInfo.Tykkelse);
    cartItem.nrOfItems = nrOfItem;
    cartItems.update((items) => [...items, cartItem]);
  }
</script>

<div class="mb-5">
  <input
    type="number"
    id="nrOfGlas"
    min="1"
    max="100"
    value={nrOfItem}
    class="w-12 p-1 text-sm border rounded"
    on:change={onNumberChange}
  />
  <Button class="mt-6" on:click={addItem}>Tilføj til kurv</Button>
</div>
