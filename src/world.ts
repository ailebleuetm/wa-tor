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
}