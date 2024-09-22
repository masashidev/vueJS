class Grid {
  constructor(rows = 10, columns = 10) {
    this.rows = rows;
    this.columns = columns;
    this.data = [];
    this.initialize();
  }

  initialize() {
    for (let i = 0; i < this.rows; i++) {
      this.data[i] = [];
      for (let j = 0; j < this.columns; j++) {
        this.data[i][j] = null;
      }
    }
  }

  setCell(row, column, value) {
    if (row >= 0 && row < this.rows && column >= 0 && column < this.columns) {
      this.data[row][column] = value;
    } else {
      console.error('Invalid cell position');
    }
  }

  getCell(row, column) {
    if (row >= 0 && row < this.rows && column >= 0 && column < this.columns) {
      return this.data[row][column];
    } else {
      console.error('Invalid cell position');
      return null;
    }
  }
}

export default Grid;
