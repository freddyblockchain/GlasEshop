<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { Stage, Layer, Rect, Line } from "svelte-konva";
  import {
    cornerPoints,
    newPoint,
    xOffset,
    yOffset,
  } from "../../stores/drawingStore";
  import InputRow from "$lib/components/InputRow.svelte";
  import ShapeLine from "$lib/components/ShapeLine.svelte";
  import NumberInput from "$lib/components/NumberInput.svelte";
  import NodeCircle from "$lib/components/NodeCircle.svelte";
  import {
    fivePointArray,
    fourPointArray,
    sixPointArray,
    threePointArray,
    windowWidthOffset,
  } from "$lib/constants";
  import { onMount } from "svelte";
  let points;
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
  <div class="flex border-4 border-black m-4">
    <Stage
      config={{ width: window.innerWidth / 2, height: window.innerHeight / 2 }}
    >
      <Layer>
        {#each $cornerPoints as { x, y }, index}
          <ShapeLine
            point1={$cornerPoints[index]}
            point2={$cornerPoints[(index + 1) % $cornerPoints.length]}
          />
          <NodeCircle cornerPoint={$cornerPoints[index]} {index}></NodeCircle>
        {/each}
      </Layer>
    </Stage>
  </div>
  <div class="flex-col">
    {#each $cornerPoints as { x, y }, index}
      <div>
        <InputRow {x} {y} {index} />
      </div>
    {/each}
  </div>
</div>
