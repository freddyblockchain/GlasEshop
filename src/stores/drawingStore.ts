import { fourPointArray } from '$lib/constants';
import { writable, type Writable, get } from 'svelte/store';

const storedPoints = sessionStorage.getItem("currentPoints");
export const cornerPoints: Writable<CornerPoint[]> = writable(storedPoints ? JSON.parse(storedPoints): fourPointArray);

cornerPoints.subscribe(newPoints => {
  sessionStorage.setItem("currentPoints", JSON.stringify(newPoints));
  console.log("setting new points! " + JSON.stringify(newPoints))
});

export const newPoint = writable(false);

export const initialValue = 75;
//export const xOffset = window.innerWidth / 2 - initialValue;
//export const yOffset = 300;

export const xOffset = 300
export const yOffset = 300

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

export const calculateDistance = (
  first: CornerPoint,
  second: CornerPoint,
) => {

  const x1 = first.x
  const y1 = first.y
  const x2 = second.x
  const y2 = second.y

  const xDiff = x2 - x1;
  const yDiff = y2 - y1;
  return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
};

export const getNewPointCoordinates = (A: CornerPoint, B: CornerPoint, originalDistance: number, newDistance: number): CornerPoint => {
  const directionX = B.x - A.x;
  const directionY = B.y - A.y;

  // Calculate the magnitude of the original vector (distance from A to B, assumed to be 100)

  // Calculate the unit vector components
  const unitX = directionX / originalDistance;
  const unitY = directionY / originalDistance;

  // Calculate the new position of B based on the new distance
  return {
    x: A.x + unitX * newDistance,
    y: A.y + unitY * newDistance,
    letter: ''
  };
}


export function calculateAngle(A: CornerPoint, B: CornerPoint, C: CornerPoint): number {
  // Vector AB
  const AB = { x: B.x - A.x, y: B.y - A.y };
  // Vector AC
  const AC = { x: C.x - A.x, y: C.y - A.y };

  // Dot product of AB and AC
  const dotProduct = AB.x * AC.x + AB.y * AC.y;

  // Magnitude of AB
  const magnitudeAB = Math.sqrt(AB.x * AB.x + AB.y * AB.y);

  // Magnitude of AC
  const magnitudeAC = Math.sqrt(AC.x * AC.x + AC.y * AC.y);

  // Cosine of the angle between AB and AC
  const cosineTheta = dotProduct / (magnitudeAB * magnitudeAC);

  // Ensure the value is within the valid range for acos
  const clampedCosineTheta = Math.max(-1, Math.min(1, cosineTheta));

  // Angle in radians
  const thetaRadians = Math.acos(clampedCosineTheta);

  // Convert radians to degrees
  const thetaDegrees = thetaRadians * (180 / Math.PI);

  return thetaDegrees;
}

export function rotatePoint(A: CornerPoint, B: CornerPoint, angleDegrees: number): CornerPoint {
  const angleRadians = angleDegrees * (Math.PI / 180);

  // Translate point B to the origin
  const translatedX = B.x - A.x;
  const translatedY = B.y - A.y;

  // Apply rotation
  const rotatedX = translatedX * Math.cos(angleRadians) - translatedY * Math.sin(angleRadians);
  const rotatedY = translatedX * Math.sin(angleRadians) + translatedY * Math.cos(angleRadians);

  // Translate back to the original position
  const newX = rotatedX + A.x;
  const newY = rotatedY + A.y;

  return { x: newX, y: newY, letter:""};
}