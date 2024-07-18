<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { Stage, Layer, Rect, Line } from "svelte-konva";
  import {
    cornerPoints,
    newPoint,
    nrOfPoints,
    xOffset,
    yOffset,
  } from "../store";
  import InputRow from "$lib/components/InputRow.svelte";
  import ShapeLine from "$lib/components/ShapeLine.svelte";
  import NumberInput from "$lib/components/NumberInput.svelte";
  let points;
  var isDone = false;

  $: {
    cornerPoints.subscribe((state) => {
      points = state;
    });
  }

  $: {
    nrOfPoints.subscribe((number) => {
      const width = window.innerWidth / 4;
      if (!isNaN(number)) {
        if ($nrOfPoints == 6) {
          const point1 = { x: 0 - width, y: 0 };
          const point2 = { x: 100 - width, y: 0 };
          const point3 = { x: 100 - width, y: 100 };
          const point4 = { x: 200 - width, y: 100 };
          const point5 = { x: 200 - width, y: 200 };
          const point6 = { x: 0 - width, y: 200 };
          isDone = true;
          cornerPoints.update(() => [
            point1,
            point2,
            point3,
            point4,
            point5,
            point6,
          ]);
        }
      }
    });
  }

  const setIsDone = () => {
    isDone = true;
  };
</script>

<NumberInput />

<!--
<div class="flex flex-col justify-center items-center m-10">
  <h1 class="text-lg">Special mål!</h1>
</div>
<div class="flex flex-col justify-center items-center m-10">
  <h1 class="text-center">Hjørne Punkter</h1>
  <ul class="list-none w-full flex flex-col items-center">
    {#each $cornerPoints as { x, y }, index}
      <li>Punkt {index + 1}: ({x}, {y})</li>
    {/each}
    <li class="w-full flex justify-center">
      <InputRow />
    </li>
    <li class="w-full flex justify-center">
      <Button class="m-10" on:click={setIsDone}>Færdig</Button>
    </li>
  </ul>
</div> -->
<div class="flex flex-row">
  <div class="flex">
    <Stage
      config={{ width: window.innerWidth / 2, height: window.innerHeight }}
    >
      <Layer>
        {#each $cornerPoints.slice(0, $cornerPoints.length - 1) as { x, y }, index}
          <ShapeLine
            point1={$cornerPoints[index]}
            point2={$cornerPoints[index + 1]}
          />
        {/each}
        {#if isDone}
          <ShapeLine
            point1={$cornerPoints[$cornerPoints.length - 1]}
            point2={$cornerPoints[0]}
          />
        {/if}
      </Layer>
    </Stage>
  </div>
  <div class="flex-col">
    {#each $cornerPoints as { x, y }, index}
    <div>
    <InputRow x={x} y = {y} index={index}/>
    </div>
    {/each}
</div>
</div>
