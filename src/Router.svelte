<script>
  import { Router, Route } from "svelte-routing";
  import Badeglas from "./pages/Badeglas.svelte";
  import Skabe from "./pages/Skabe.svelte";
  import Kontakt from "./pages/Kontakt.svelte";
  import Faq from "./pages/FAQ.svelte";
  import Kurv from "./pages/Kurv.svelte";
</script>

<Router>
  <Route path="/" component={Badeglas} />
  <Route path="/Skabe" component={Skabe} />
  <Route path="/Faq" component={Faq} />
  <Route path="/Kontakt" component={Kontakt} />
  <Route path="/Kurv" component={Kurv} />
</Router>
