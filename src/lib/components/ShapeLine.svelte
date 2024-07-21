<script lang="ts">
  import { Line, Text } from "svelte-konva";
  import { xOffset, yOffset } from "../../store";
  import { onMount } from "svelte";

  export let point1: CornerPoint = { x: 0, y: 0, letter: "" };
  export let point2: CornerPoint = { x: 0, y: 0, letter: "" };

  const middlePoint = {
    x: (point1.x + point2.x) / 2 + xOffset,
    y: (-point1.y - point2.y) / 2 + yOffset,
  };

  let lineNode: any;
  let textNode: any;

  onMount(() => {
    setTimeout(() => {
      if (textNode && lineNode) {
        //textNode.zIndex(1);
        //lineNode.zIndex(2);
      } else {
        console.error("Konva nodes are not initialized.");
      }
    }, 10);
  });

  const calculateDistance = (
    x1: number,
    y1: number,
    x2: number,
    y2: number
  ) => {
    const xDiff = x2 - x1;
    const yDiff = y2 - y1;
    return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
  };

  const distance = calculateDistance(point1.x, point1.y, point2.x, point2.y);
</script>

<Line
  bind:this={lineNode}
  config={{
    x: xOffset,
    y: yOffset,
    points: [point1.x, -point1.y, point2.x, -point2.y],
    tension: 0.5,
    closed: true,
    stroke: "black",
    fillLinearGradientStartPoint: { x: -50, y: -50 },
    fillLinearGradientEndPoint: { x: 50, y: 50 },
    fillLinearGradientColorStops: [0, "red", 1, "yellow"],
  }}
/>
<Text
  bind:this={textNode}
  config={{
    x: middlePoint.x - 8,
    y: middlePoint.y,
    text: distance + " cm",
  }}
/>
