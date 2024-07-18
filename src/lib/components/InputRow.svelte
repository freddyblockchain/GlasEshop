<script lang="ts">
  import { cornerPoints, newPoint } from "../../store";
  import { Button } from "./ui/button";

  export let x = 0;
  export let y = 0;
  export let index = 0;

  const changePoints = (x: number, y: number) => {
    cornerPoints.update((points) => {
      const updatedPoints = [...points];
      updatedPoints[index] = { x: x, y: y };
      console.log("x is : " + x + "y is " + y)
      return updatedPoints;
    });
    
  };
  $: changePoints(x, y); 
</script>

<div class="flex flex-row">
  <h4>Hjørnepunkt:</h4>
  <input bind:value={x} placeholder="Tilføj x værdi" />

  <input bind:value={y} placeholder="Tilføj y værdi" />
</div>
