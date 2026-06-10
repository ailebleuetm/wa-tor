// 盤面の管理
export class World {
  readonly cols: number;
  readonly rows: number;

  constructor(cols: number, rows: number) {
    this.cols = cols;
    this.rows = rows;
  }

  // キャンバスに盤面を描画する
  draw(ctx: CanvasRenderingContext2D, cellSize: number): void {
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        // 海（黒）で塗りつぶす
        ctx.fillStyle = "#000000";
        ctx.fillRect(
          col * cellSize,
          row * cellSize,
          cellSize - 1,
          cellSize - 1
        );
      }
    }
  }

  // トーラス座標変換：端を超えたら反対側へ折り返す
  wrap(col: number, row: number): { col: number; row: number } {
    return {
      col: ((col % this.cols) + this.cols) % this.cols,
      row: ((row % this.rows) + this.rows) % this.rows,
    };
  }
}