<script lang="ts">
  import { inCmBounds, inScreenBounds } from "$lib/constants";
  import {
    calculateDistance,
    cornerPoints,
    newPoint,
    getNewPointCoordinates,
    updatePoint,
    calculateAngle,
    rotatePoint,
  } from "../../stores/drawingStore";
  import { Button } from "./ui/button";

  export let x = 0;
  export let y = 0;
  export let letter = "";
  export let index = 0;

  let nextPointIndex = (index + 1) % $cornerPoints.length;
  let prevPointIndex = index - 1 >= 0 ? index - 1 : $cornerPoints.length - 1;

  let distance: number;
  let angle: number;
  let text: string;

  $: {
    nextPointIndex = (index + 1) % $cornerPoints.length;
    prevPointIndex = index - 1 >= 0 ? index - 1 : $cornerPoints.length - 1;
    text =
      $cornerPoints[index].letter + "-" + $cornerPoints[nextPointIndex].letter;
    distance = parseFloat(
      calculateDistance(
        $cornerPoints[index],
        $cornerPoints[nextPointIndex]
      ).toFixed(2)
    );
    angle = parseFloat(
      calculateAngle(
        $cornerPoints[index],
        $cornerPoints[nextPointIndex],
        $cornerPoints[prevPointIndex]
      ).toFixed(1)
    );
  }

  const distanceChanged = (event: Event) => {
    const newDistance: number = Number(
      (event.target as HTMLSelectElement).value
    );
    let indexToUpdate = 0;
    let newCornerPoint: CornerPoint = { letter: "a", x: 0, y: 0 };
    if (index >= $cornerPoints.length / 2) {
      newCornerPoint = getNewPointCoordinates(
        $cornerPoints[index],
        $cornerPoints[nextPointIndex],
        distance,
        newDistance
      );
      indexToUpdate = nextPointIndex;
    } else {
      newCornerPoint = getNewPointCoordinates(
        $cornerPoints[nextPointIndex],
        $cornerPoints[index],
        distance,
        newDistance
      );
      indexToUpdate = index;
    }
    console.log(newCornerPoint);
    if (inCmBounds(newCornerPoint.x, newCornerPoint.y)) {
      updatePoint(newCornerPoint.x, newCornerPoint.y, indexToUpdate);
      distance = newDistance;
    }
  };

  const angleChanged = (event: Event) => {
    const newAngle: number = Number((event.target as HTMLSelectElement).value);
    const angleDifference = angle - newAngle;
    const newB = rotatePoint(
      $cornerPoints[index],
      $cornerPoints[nextPointIndex],
      angleDifference
    );
    if (inCmBounds(newB.x, newB.y)) {
      updatePoint(newB.x, newB.y, nextPointIndex);
      angle = newAngle;
    }
  };
</script>

<div class="flex justify-center items-center m-2">
  <p class="text-xl">{$cornerPoints[index].letter}</p>
</div>
<div class="flex flex-row">
  <div class="flex flex-row items-center">
    <h4 class="text-center mr-2">{text}:</h4>
    <input
      class="w-24 border-2 border-gray-300 focus:border-blue-500 rounded-md p-1"
      type="number"
      value={distance}
      step="0.1"
      on:change={distanceChanged}
    />
  </div>
  <div class="flex flex-row ml-2 items-center">
    <p class="mr-2">Vinkel</p>
    <input
      class="w-20 border-2 border-gray-300 focus:border-blue-500 rounded-md p-1"
      type="number"
      step="0.1"
      value={angle}
      on:change={angleChanged}
      placeholder="Vinkel"
    />
  </div>
</div>
