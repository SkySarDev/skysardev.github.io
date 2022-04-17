"use strict";

let frame = 0;
let animation = null;

const playField = new PlayField(
  ctx,
  COLS,
  ROWS,
  GRID_SIZE,
  canvas.width,
  canvas.height,
  tetrominoes
);
const tetromino = new Tetromino(ctx, GRID_SIZE, tetrominoes);

const startGame = () => {
  animation = requestAnimationFrame(startGame);

  playField.clearField();
  playField.drawField();
  tetromino.drawTetromino();

  if (++frame > 30) {
    frame = 0;
    const currentField = playField.getCurrentField();
    const currentTetromino = tetromino.getCurrentProps();
    const { col, row } = currentTetromino;

    if (tetromino.checkValidAction(col, row + 1, currentField)) {
      tetromino.setAction("down");
    } else {
      playField.saveField(currentTetromino);

      if (playField.isGameOver()) {
        cancelAnimationFrame(animation);
        animation = null;
        showGameOver(true);
        return;
      }

      tetromino.getNextTetromino();
    }
  }
};

document.addEventListener("keydown", (e) => {
  const { col, row } = tetromino.getCurrentProps();
  const currentField = playField.getCurrentField();

  if (e.key === "ArrowUp") {
    tetromino.rotate(currentField);
  }

  if (
    e.key === "ArrowDown" &&
    tetromino.checkValidAction(col, row + 1, currentField)
  ) {
    tetromino.setAction("down");
  }

  if (
    e.key === "ArrowRight" &&
    tetromino.checkValidAction(col + 1, row, currentField)
  ) {
    tetromino.setAction("right");
  }

  if (
    e.key === "ArrowLeft" &&
    tetromino.checkValidAction(col - 1, row, currentField)
  ) {
    tetromino.setAction("left");
  }
});

playBtn.addEventListener("click", () => {
  if (!animation) {
    showGameOver(false);
    playField.init();
    tetromino.getNextTetromino();
    animation = requestAnimationFrame(startGame);
  }
});
