<script lang="ts">
  import {
    calculateDistance,
    cornerPoints,
    newPoint,
    getNewPointCoordinates,
    updatePoint,
    calculateAngle,
    rotatePoint,
  } from "../../store";
  import { Button } from "./ui/button";

  export let x = 0;
  export let y = 0;
  export let letter = "";
  export let index = 0;

  let nextPointIndex = (index + 1) % $cornerPoints.length;
  let prevPointIndex = (index - 1) >= 0 ? index - 1 : $cornerPoints.length - 1

  let distance: number
  let angle: number

  $: {
    nextPointIndex = (index + 1) % $cornerPoints.length;
    prevPointIndex = (index - 1) >= 0 ? index - 1 : $cornerPoints.length - 1
    distance = parseFloat(calculateDistance($cornerPoints[index], $cornerPoints[nextPointIndex]).toFixed(2));
    angle = parseFloat(calculateAngle($cornerPoints[index], $cornerPoints[nextPointIndex], $cornerPoints[prevPointIndex]).toFixed(1))
  }


  const text =
    $cornerPoints[index].letter + "-" + $cornerPoints[nextPointIndex].letter;

  const distanceChanged = (event: Event) => {
    const newDistance: number = Number((event.target as HTMLSelectElement).value);
    const newPointBasedOnDistance = getNewPointCoordinates(
      $cornerPoints[index],
      $cornerPoints[nextPointIndex],
      distance,
      newDistance
    );
    updatePoint(
      newPointBasedOnDistance.x,
      newPointBasedOnDistance.y,
      nextPointIndex
    );
    distance = newDistance;
  };

  const angleChanged = (event: Event) => {
    const newAngle: number = Number((event.target as HTMLSelectElement).value);
    const angleDifference = angle - newAngle
    const newB = rotatePoint($cornerPoints[index],$cornerPoints[nextPointIndex], angleDifference);
    updatePoint(
      newB.x,
      newB.y,
      nextPointIndex
    );
    angle = newAngle
  }
</script>

<div class="flex justify-center items-center m-2">
  {$cornerPoints[index].letter}
</div>
<div class="flex flex-row">
  <p>Vinkel</p>
  <input
    class="w-36 border-2 border-gray-300 focus:border-blue-500 rounded-md p-1"
    type="number"
    step="0.1"
    value={angle}
    on:change={angleChanged}
    placeholder="Vinkel"
  />

  <div class="flex flexrow">
    <h4>{text}:</h4>
    <input
      class="w-36 border-2 border-gray-300 focus:border-blue-500 rounded-md p-1"
      type="number"
      value={distance}
      step="0.1"
      on:change={distanceChanged}
    />
  </div>
</div>
