<script lang="ts">
  import {
    calculateDistance,
    cornerPoints,
    newPoint,
    updatePoint,
  } from "../../store";
  import { Button } from "./ui/button";

  export let x = 0;
  export let y = 0;
  export let letter = "";
  export let index = 0;

  const nextPointIndex = (index + 1) % $cornerPoints.length;

  let currentPoint = $cornerPoints[index];
  let nextPoint = $cornerPoints[nextPointIndex];

  let distance = calculateDistance(
    currentPoint.x,
    currentPoint.y,
    nextPoint.x,
    nextPoint.y
  );

  const text =
    $cornerPoints[index].letter + "-" + $cornerPoints[nextPointIndex].letter;

  const changePoints = (x: number, y: number) => {
    updatePoint(x, y, index);
  };
  $: changePoints(x, y);
</script>

<div class="flex justify-center items-center m-2">
  {currentPoint.letter}
</div>
<div class="flex flex-row">
  <p>x</p>
  <input
    class="w-36 border-2 border-gray-300 focus:border-blue-500 rounded-md p-1"
    bind:value={x}
    placeholder="Tilføj x værdi"
  />
  <p>y</p>
  <input
    class="w-36 border-2 border-gray-300 focus:border-blue-500 rounded-md p-1"
    bind:value={y}
    placeholder="Tilføj y værdi"
  />

  <div class="flex flexrow">
    <h4>{text}:</h4>
    <input
      class="w-36 border-2 border-gray-300 focus:border-blue-500 rounded-md p-1"
      value={distance}
    />
  </div>
</div>
