<script lang="ts">
    import { nrOfPoints } from "../../store";

  
</script>
  
  <div class="flex flex-col justify-center items-center m-10">
    <h4>Antal hjørner:</h4>
    <input bind:value={$nrOfPoints} placeholder="antal hjørner" />
  </div>
  