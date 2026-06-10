import { World } from "./world";

const COLS = 50;
const ROWS = 50;
const CELL_SIZE = 12;

const canvas = document.getElementById("world") as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;

canvas.width = COLS * CELL_SIZE;
canvas.height = ROWS * CELL_SIZE;

const world = new World(COLS, ROWS);

function render(): void {
  world.draw(ctx, CELL_SIZE);
}

render();
