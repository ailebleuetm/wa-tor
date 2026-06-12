import { World } from "./world.js";

const COLS = 50;
const ROWS = 50;
const CELL_SIZE = 12;
const FISH_COUNT = 100;
const SHARK_COUNT = 20;
const SHARK_STARVATION_LIMIT = 5;
const SHARK_BREED_INTERVAL = 10;
const FPS = 10;
const FISH_BREED_INTERVAL = 5;

const canvas = document.getElementById("world") as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;

canvas.width = COLS * CELL_SIZE;
canvas.height = ROWS * CELL_SIZE;

const statStep = document.getElementById("stat-step")!;
const statFish = document.getElementById("stat-fish")!;
const statShark = document.getElementById("stat-shark")!;

let stepCount = 0;

const world = new World(COLS, ROWS);
world.placeFishes(FISH_COUNT);
world.placeSharks(SHARK_COUNT);

function step(): void {
  world.stepFishes(FISH_BREED_INTERVAL);
  world.stepSharks(SHARK_STARVATION_LIMIT, SHARK_BREED_INTERVAL);
  world.draw(ctx, CELL_SIZE);

  stepCount++;
  statStep.textContent = String(stepCount);
  statFish.textContent = String(world.fishes.length);
  statShark.textContent = String(world.sharks.length);
}

setInterval(step, 1000 / FPS);