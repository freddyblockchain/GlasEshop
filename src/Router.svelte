<script>
  import { Router, Route, Link } from "svelte-routing";
  import LoginPage from "./pages/LoginPage.svelte";
  import ProjectPage from "./pages/ProjectPage.svelte";
  import ContractorPage from "./pages/ContractorPage.svelte";
</script>

<Router>
  <Route path="/" component={LoginPage} />
  <Route path="/projects" component={ProjectPage} />
  <Route path="/projects/contractors" component={ContractorPage} />
</Router>
