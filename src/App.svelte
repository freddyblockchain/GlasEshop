<script lang="ts">
  import Footer from "$lib/components/Footer/Footer.svelte";
  import Navbar from "$lib/components/Navbar/Navbar.svelte";
  import Router from "./Router.svelte";
</script>

<main>
  <div class="flex flex-col justify-center items-center">
    <Navbar />
    <Router />
    <Footer />
  </div>
</main>
