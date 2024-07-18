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
      if (!isNaN(number)) {
        if ($nrOfPoints == 6) {
          const point1 = {x: 0, y: 0}
          const point2 = {x: 100, y: 0}
          const point3 = {x: 100, y: 100}
          const point4 = {x: 200, y: 100}
          const point5 = {x: 200, y: 200}
          const point6 = {x: 0, y: 200}
          isDone = true
          cornerPoints.update(() => [point1, point2, point3, point4, point5, point6]);
        }
      }
    });
  }

  const setIsDone = () => {
    isDone = true;
  };
</script>

<NumberInput />

<div class="flex flex-col justify-center items-center m-10">
  <h1 class="text-lg">Special mål!</h1>
</div>
<div class="flex flex-col justify-center items-center m-10">
  <h1 class="text-center">Hjørne Punkter</h1>
  <!-- Center header text -->
  <ul class="list-none w-full flex flex-col items-center">
    <!-- Flex column for the list -->
    {#each $cornerPoints as { x, y }, index}
      <li>Punkt {index + 1}: ({x}, {y})</li>
      <!-- Items are automatically centered because of parent ul -->
    {/each}
    <li class="w-full flex justify-center">
      <!-- Wrapper for centering complex components -->
      <InputRow />
    </li>
    <li class="w-full flex justify-center">
      <!-- Wrapper for centering complex components -->
      <Button class="m-10" on:click={setIsDone}>Færdig</Button>
    </li>
  </ul>
</div>
<div class="flex justify-center items-center h-screen">
  <Stage config={{ width: window.innerWidth, height: window.innerHeight }}>
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
