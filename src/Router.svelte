<script>
  import { Router, Route} from "svelte-routing";
    import DrawPage from "./pages/DrawPage.svelte";
</script>

<Router>
  <Route path="/" component={DrawPage} />
</Router>
