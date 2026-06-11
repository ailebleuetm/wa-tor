// サメ
export class Shark {
  col: number;
  row: number;
  age: number;
  breedCount: number;
  hungerCount: number;

  constructor(col: number, row: number) {
    this.col = col;
    this.row = row;
    this.age = 0;
    this.breedCount = 0;
    this.hungerCount = 0;
  }
}
