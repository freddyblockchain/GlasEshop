<script lang="ts">
  import {
    fivePointArray,
    fourPointArray,
    sixPointArray,
    threePointArray,
  } from "$lib/constants";
  import { cornerPoints } from "../../stores/drawingStore";

  // Local variable for selected option
  $: selectedOption =
    $cornerPoints.length > 0 ? $cornerPoints.length.toString() : "4";

  function handlePointsChange(event: Event) {
    const selectedValue = parseInt((event.target as HTMLSelectElement).value);
    let pointArray: CornerPoint[] = [];
    if (selectedValue == 6) {
      pointArray = sixPointArray;
    }
    if (selectedValue == 5) {
      pointArray = fivePointArray;
    }
    if (selectedValue == 4) {
      pointArray = fourPointArray;
    }
    if (selectedValue == 3) {
      pointArray = threePointArray;
    }
    cornerPoints.update(() => pointArray);
  }
</script>

<div
  class="flex flex-col justify-center items-center m-10"
>
  <h4>Antal hjørner:</h4>
  <select
    class="border border-gray-300 rounded p-2"
    value={selectedOption}
    on:change={handlePointsChange}
  >
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
  </select>
</div>
