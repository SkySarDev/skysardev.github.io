class PlayField {
  constructor(ctx, cols, rows, grid, width, height, tetrominoes) {
    this.ctx = ctx;
    this.cols = cols;
    this.rows = rows;
    this.grid = grid;
    this.width = width;
    this.height = height;
    this.tetrominoes = tetrominoes;

    this.currentField = [];
    this.gameOver = false;
  }

  init() {
    this.gameOver = false;
    this.clearField();
    this.drawEmptyField();
  }

  clearField() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }

  drawEmptyField() {
    for (let row = -1; row < this.rows; row++) {
      this.currentField[row] = [];

      for (let col = 0; col < this.cols; col++) {
        this.currentField[row][col] = 0;
      }
    }
  }

  drawField() {
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        if (this.currentField[row][col]) {
          const type = this.currentField[row][col];

          ctx.fillStyle = this.tetrominoes[type].color;
          ctx.fillRect(
            col * this.grid,
            row * this.grid,
            this.grid - 1,
            this.grid - 1
          );
        }
      }
    }
  }

  clearLines(cellRow) {
    for (let row = cellRow; row >= 0; row--) {
      for (let col = 0; col < this.currentField[cellRow].length; col++) {
        this.currentField[row][col] = this.currentField[row - 1][col];
      }
    }
  }

  saveField(currentTetromino) {
    const { shape, row, col, type } = currentTetromino;

    for (let cellRow = 0; cellRow < shape.length; cellRow++) {
      for (let cellCol = 0; cellCol < shape[cellRow].length; cellCol++) {
        if (shape[cellRow][cellCol]) {
          if (row + cellRow < 1) {
            this.gameOver = true;
            return;
          }

          this.currentField[row + cellRow][col + cellCol] = type;
        }
      }
    }

    for (let row = this.currentField.length - 1; row >= 0; ) {
      if (this.currentField[row].every((cell) => !!cell)) {
        this.clearLines(row);
      } else {
        row--;
      }
    }
  }

  getCurrentField() {
    return this.currentField;
  }

  isGameOver() {
    return this.gameOver;
  }
}
