<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { navigate } from "svelte-routing";

  const login = () => {
    navigate("/projects", { replace: true });
  };
</script>

<div class="flex justify-center items-center h-screen">
  <div>
    <Button on:click={login}>Login</Button>
  </div>
</div>
