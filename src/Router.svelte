<script>
  import { Router, Route } from "svelte-routing";
  import DrawPage from "./lib/components/DrawComponent.svelte";
  import Badeglas from "./pages/Badeglas.svelte";
  import Skabe from "./pages/Skabe.svelte";
  import Om from "./pages/Om.svelte";
  import Kontakt from "./pages/Kontakt.svelte";
</script>

<Router>
  <Route path="/" component={Badeglas} />
  <Route path="/Skabe" component={Skabe} />
  <Route path="/Om" component={Om} />
  <Route path="/Kontakt" component={Kontakt} />
</Router>
