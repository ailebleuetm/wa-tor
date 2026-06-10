// 魚
export class Fish {
  col: number;
  row: number;
  age: number;
  breedCount: number;

  constructor(col: number, row: number) {
    this.col = col;
    this.row = row;
    this.age = 0;
    this.breedCount = 0;
  }
}