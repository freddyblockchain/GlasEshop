<script lang="ts">
  import { Circle, Text, type KonvaDragTransformEvent } from "svelte-konva";
  import { cornerPoints, updatePoint } from "../../stores/drawingStore";
  import type { KonvaEventObject } from "konva/lib/Node";
  import {
    maxCmHeight,
    maxScreenPixelsHeight,
    maxScreenPixelsWidth,
    xOffset,
    yOffset,
  } from "$lib/constants";

  const radius = 15;
  export let cornerPoint: CornerPoint = { x: 0, y: 0, letter: "" };
  export let index = 0;

  const onDragEnd = (e: KonvaDragTransformEvent) => {
    const shape = e.detail.target;

    const x = e.detail.target.x();
    const y = e.detail.target.y();

    if (
      x >= 0 &&
      x <= maxScreenPixelsWidth &&
      y >= 0 &&
      y <= maxScreenPixelsHeight
    ) {
      updatePoint(x - xOffset, yOffset - y, index);
    } else {
      if (x < 0) shape.x(0);
      if (x >= maxScreenPixelsWidth) shape.x(maxScreenPixelsWidth);
      if (y < 0) shape.y(0);
      if (y >= maxScreenPixelsHeight) shape.y(maxScreenPixelsHeight);
    }
  };
</script>

<Text
  config={{
    x: xOffset + cornerPoint.x - 8,
    y: yOffset - cornerPoint.y + 12,
    text: cornerPoint.letter,
    fontSize: 20,
  }}
/>

<Circle
  config={{
    x: xOffset + cornerPoint.x,
    y: yOffset - cornerPoint.y,
    radius: 10,
    stroke: "red",
    strokeWidth: 5,
    draggable: true,
  }}
  on:dragmove={onDragEnd}
/>
