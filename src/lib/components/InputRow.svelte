<script lang="ts">
  import { cornerPoints, newPoint } from "../../store";
  import { Button } from "./ui/button";

  let x = "";
  let y = "";

  const addPoint = () => {
    const xValue = parseInt(x);
    const yValue = parseInt(y);
    cornerPoints.update((points) => [...points, { x: xValue, y: yValue }]);
    newPoint.set(false);
  };
</script>

<div class="flex flex-row">
  <h4>Hjørnepunkt:</h4>
  <input bind:value={x} placeholder="Tilføj x værdi" />

  <input bind:value={y} placeholder="Tilføj y værdi" />
  <Button on:click={addPoint}>Tilføj Punkt</Button>
</div>
