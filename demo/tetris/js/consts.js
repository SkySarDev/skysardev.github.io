const gameOverTitle = document.getElementById("game-over");
const playBtn = document.getElementById("play-btn");
const canvas = document.getElementById("play-field");
const ctx = canvas.getContext("2d");

const COLS = 10;
const ROWS = 20;
const GRID_SIZE = 32;

const tetrominoes = {
  O: {
    type: "O",
    color: "purple",
    shape: [
      [1, 1],
      [1, 1],
    ],
  },
  I: {
    type: "I",
    color: "green",
    shape: [
      [0, 0, 0, 0],
      [1, 1, 1, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
  },
  T: {
    type: "T",
    color: "cyan",
    shape: [
      [0, 1, 0],
      [1, 1, 1],
      [0, 0, 0],
    ],
  },
  J: {
    type: "J",
    color: "yellow",
    shape: [
      [1, 0, 0],
      [1, 1, 1],
      [0, 0, 0],
    ],
  },
  L: {
    type: "L",
    color: "orange",
    shape: [
      [0, 0, 1],
      [1, 1, 1],
      [0, 0, 0],
    ],
  },
  S: {
    type: "S",
    color: "red",
    shape: [
      [0, 1, 1],
      [1, 1, 0],
      [0, 0, 0],
    ],
  },
  Z: {
    type: "Z",
    color: "blue",
    shape: [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 0],
    ],
  },
};
