import { writable, type Writable } from 'svelte/store';

export const cornerPoints: Writable<CornerPoint[]> = writable([]);
export const nrOfPoints = writable(0);
export const newPoint = writable(false);

export const initialValue = 75;
export const xOffset = window.innerWidth / 2 - initialValue;
export const yOffset = 300;

export const updatePoint = (x: number, y: number, index: number) => {
    cornerPoints.update((points) => {
        const updatedPoints = [...points];
        updatedPoints[index] = {
          x: Number(x),
          y: Number(y),
          letter: updatedPoints[index].letter,
        };
        return updatedPoints;
      });
}