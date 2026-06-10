import { World } from "./world.js";

const COLS = 50;
const ROWS = 50;
const CELL_SIZE = 12;
const FISH_COUNT = 100;

const canvas = document.getElementById("world") as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;

canvas.width = COLS * CELL_SIZE;
canvas.height = ROWS * CELL_SIZE;

const world = new World(COLS, ROWS);
world.placeFishes(FISH_COUNT);

function render(): void {
  world.draw(ctx, CELL_SIZE);
}

render();