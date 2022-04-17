class Tetromino {
  constructor(ctx, grid, tetrominoes) {
    this.ctx = ctx;
    this.grid = grid;
    this.tetrominoes = tetrominoes;

    this.currentTetromino = {};
  }

  getNextTetromino() {
    const tetrominoTypeList = Object.keys(this.tetrominoes);
    const randomNum = getRandomNumber(0, tetrominoTypeList.length - 1);

    const { type, color, shape } =
      this.tetrominoes[tetrominoTypeList[randomNum]];
    const col = type === "O" ? 4 : 3;
    const row = -1;

    this.currentTetromino = {
      type,
      color,
      shape,
      row,
      col,
    };
  }

  drawTetromino() {
    const { color, shape, col, row } = this.currentTetromino;
    this.ctx.fillStyle = color;

    shape.forEach((rowItem, y) => {
      rowItem.forEach((val, x) => {
        if (val > 0) {
          this.ctx.fillRect(
            (col + x) * this.grid,
            (row + y) * this.grid,
            this.grid - 1,
            this.grid - 1
          );
        }
      });
    });
  }

  getCurrentProps() {
    return this.currentTetromino;
  }

  checkValidAction(nextCol, nextRow, currentField, newShape) {
    const shape = newShape || this.currentTetromino.shape;

    for (let row = 0; row < shape.length; row++) {
      for (let col = 0; col < shape[row].length; col++) {
        if (
          shape[row][col] &&
          (nextCol + col < 0 ||
            nextCol + col >= currentField[0].length ||
            nextRow + row >= currentField.length ||
            currentField[nextRow + row][nextCol + col])
        ) {
          return false;
        }
      }
    }

    return true;
  }

  rotate(currentField) {
    const { shape, col, row } = this.currentTetromino;
    const newShape = shape.map((row, i) =>
      row.map((val, j) => shape[shape.length - 1 - j][i])
    );

    if (this.checkValidAction(col, row, currentField, newShape)) {
      this.currentTetromino.shape = newShape;
    }
  }

  setAction(action) {
    if (action === "down") {
      ++this.currentTetromino.row;
    }

    if (action === "right") {
      ++this.currentTetromino.col;
    }

    if (action === "left") {
      --this.currentTetromino.col;
    }
  }
}
