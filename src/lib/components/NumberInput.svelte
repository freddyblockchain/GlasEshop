<script lang="ts">
  import { nrOfPoints } from "../../stores/drawingStore";

  function handlePointsChange(event: Event) {
    const selectedValue = parseInt((event.target as HTMLSelectElement).value);
    nrOfPoints.set(selectedValue);
  }
</script>

<div
  class="flex flex-col justify-center items-center m-10"
  on:change={handlePointsChange}
>
  <h4>Antal hjørner:</h4>
  <select class="border border-gray-300 rounded p-2">
    <option value="3">3</option>
    <option value="4" selected>4</option>
    <option value="5">5</option>
    <option value="6">6</option>
  </select>
</div>
