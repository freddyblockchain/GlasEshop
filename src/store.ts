import { writable } from 'svelte/store';

export const cornerPoints = writable([{x: 0, y: 0}]);
export const nrOfPoints = writable(0);
export const newPoint = writable(false);

export const initialValue = 75;
export const xOffset = window.innerWidth / 2 - initialValue;
export const yOffset = 300;