<script>
  import NavbarButton from "./NavbarButton.svelte";
</script>

<div class="hidden w-full md:block md:w-auto" id="navbar-default">
  <ul
    class="place-content-center font-medium flex flex-col p-4 rounded-lg bg-gray-400 md:flex-row md:space-x-8"
  >
    <NavbarButton text="Badevæg" route="/"></NavbarButton>
    <NavbarButton text="Skabe" route="/Skabe"></NavbarButton>
    <NavbarButton text="Om" route="/Om"></NavbarButton>
    <NavbarButton text="Kontakt" route="/Kontakt"></NavbarButton>
  </ul>
</div>
