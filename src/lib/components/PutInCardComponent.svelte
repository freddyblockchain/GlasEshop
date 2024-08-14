<script lang="ts">
  import { cartItems } from "../../stores/cartStore";
  import Button from "./ui/button/Button.svelte";

  export let cartItem: CartItem;

  function addItem() {
    console.log("cart item belægning " + cartItem.glasInfo.Belægning);
    console.log("cart item tykkelse " + cartItem.glasInfo.Tykkelse);
    cartItems.update((items) => [...items, cartItem]);
  }
</script>

<div>
  <input
    type="number"
    id="nrOfGlas"
    min="1"
    max="100"
    value={1}
    class="w-12 p-1 text-sm border rounded"
  />
  <Button class="mt-6" on:click={addItem}>Tilføj til kurv</Button>
</div>
