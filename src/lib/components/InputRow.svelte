<script lang="ts">
  import { cornerPoints, newPoint, updatePoint } from "../../store";
  import { Button } from "./ui/button";

  export let x = 0;
  export let y = 0;
  export let letter = "";
  export let index = 0;

  const nextPointIndex = (index + 1) % $cornerPoints.length;

  const text =
    $cornerPoints[index].letter + "-" + $cornerPoints[nextPointIndex].letter;

  const changePoints = (x: number, y: number) => {
    updatePoint(x, y, index);
  };
  $: changePoints(x, y);
</script>

<div class="flex flex-row">
  <h4>{text}:</h4>
  <input bind:value={x} placeholder="Tilføj x værdi" />

  <input bind:value={y} placeholder="Tilføj y værdi" />
</div>
