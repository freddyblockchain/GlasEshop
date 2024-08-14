<script>
  import CartImage from "../../../assets/CartImage.svelte";
  import { cartItems } from "../../../stores/cartStore";
  import NavbarButton from "./NavbarButton.svelte";
</script>

<div
  class="flex items-center w-full justify-center bg-gray-400"
  id="navbar-default"
>
  <ul class="font-medium flex flex-col p-4 rounded-lg md:flex-row md:space-x-8">
    <NavbarButton text="Badevæg" route="/"></NavbarButton>
    <NavbarButton text="Skabe" route="/Skabe"></NavbarButton>
    <NavbarButton text="FAQ" route="/Faq"></NavbarButton>
    <NavbarButton text="Kontakt" route="/Kontakt"></NavbarButton>
  </ul>
  <div>
    <a href={"/Kurv"}>
      <div class="flex flex-row items-center">
        <CartImage />
        <p>{$cartItems.length}</p>
      </div>
    </a>
  </div>
</div>
