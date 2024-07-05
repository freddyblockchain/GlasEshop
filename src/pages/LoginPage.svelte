<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { navigate } from "svelte-routing";
  import { Stage, Layer, Rect, Line } from "svelte-konva";
  import { cornerPoints, newPoint } from "../store";
  import InputRow from "$lib/components/InputRow.svelte";
  let points;
  var isDone = false;

  $: {
    cornerPoints.subscribe((state) => {
      points = state;
    });
  }

  const setIsDone = () => {
    isDone = true;
  };
</script>

<div class="flex flex-col justify-center m-10">
  <h1>Corner Points</h1>
  <ul>
    {#each $cornerPoints as { x, y }, index}
      <li>Point {index + 1}: ({x}, {y})</li>
    {/each}
    <InputRow />
    <Button on:click={setIsDone}>Færdig</Button>
  </ul>
</div>
<div class="flex justify-center items-center h-screen">
  <Stage config={{ width: window.innerWidth, height: window.innerHeight }}>
    <Layer>
      {#each $cornerPoints.slice(0, $cornerPoints.length - 1) as { x, y }, index}
        <Line
          config={{
            x: 20,
            y: 200,
            points: [
              $cornerPoints[index].x,
              -$cornerPoints[index].y,
              $cornerPoints[index + 1].x,
              -$cornerPoints[index + 1].y,
            ],
            tension: 0.5,
            closed: true,
            stroke: "black",
            fillLinearGradientStartPoint: { x: -50, y: -50 },
            fillLinearGradientEndPoint: { x: 50, y: 50 },
            fillLinearGradientColorStops: [0, "red", 1, "yellow"],
          }}
        />
      {/each}
      {#if isDone}
        <Line
          config={{
            x: 20,
            y: 200,
            points: [
              $cornerPoints[$cornerPoints.length - 1].x,
              -$cornerPoints[$cornerPoints.length - 1].y,
              $cornerPoints[0].x,
              -$cornerPoints[0].y,
            ],
            tension: 0.5,
            closed: true,
            stroke: "black",
            fillLinearGradientStartPoint: { x: -50, y: -50 },
            fillLinearGradientEndPoint: { x: 50, y: 50 },
            fillLinearGradientColorStops: [0, "red", 1, "yellow"],
          }}
        />
      {/if}
    </Layer>
  </Stage>
</div>
