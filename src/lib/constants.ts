export const windowWidthOffset = window.innerWidth / 4;
const point1 = { x: 0, y: 0, letter: "A" };
const point2 = { x: 100, y: 0, letter: "B" };
const point3 = { x: 100, y: 100, letter: "C" };
const point4 = { x: 200, y: 100, letter: "D" };
const point5 = { x: 200, y: 200, letter: "E" };
const point6 = { x: 0, y: 200, letter: "F" };

export const sixPointArray = [point1, point2, point3, point4, point5, point6]


const B = { x: 200, y: 0, letter: "B" };

const D = { x: 100, y: 250, letter: "D" };


export const fivePointArray = [point1, B, { x: 200, y: 200, letter: "C" }, D,  { x: 0, y: 200, letter: "E" }]

export const fourPointArray = [point1, B, { x: 200, y: 200, letter: "C" }, { x: 0, y: 200, letter: "D" }]

export const threePointArray = [point1, B, { x: 200, y: 200, letter: "C" }]