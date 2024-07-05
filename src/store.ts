import { writable } from 'svelte/store';

export const cornerPoints = writable([{x: 0, y: 0}]);
export const newPoint = writable(false);