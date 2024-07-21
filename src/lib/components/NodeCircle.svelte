<script lang="ts">
  import { Circle, Text, type KonvaDragTransformEvent } from "svelte-konva";
  import { cornerPoints, updatePoint, xOffset, yOffset } from "../../store";
  import type { KonvaEventObject } from "konva/lib/Node";

  const radius = 15;
  export let cornerPoint: CornerPoint = { x: 0, y: 0, letter: "" };
  export let index = 0;

  const onDragEnd = (e: KonvaDragTransformEvent) => {
    const x = e.detail.target.x();
    const y = e.detail.target.y();

    console.log("x us : " + x, "y is :" + y);

    updatePoint(x - xOffset, y, index);

    console.log("you even here?");

    // Additional logic using x and y
  };
  // Reactive declaration
  $: circleConfig = {
    x: xOffset + cornerPoint.x,
    y: yOffset - cornerPoint.y,
    radius: 10,
    stroke: "red",
    strokeWidth: 5,
    draggable: true,
  };
</script>

<Text
  config={{
    x: xOffset + cornerPoint.x - 4,
    y: yOffset - cornerPoint.y + 12,
    text: cornerPoint.letter,
  }}
/>

<Circle bind:config={circleConfig} on:dragend={onDragEnd} />
