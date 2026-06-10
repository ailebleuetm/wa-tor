import { Fish } from "./fish.js";

// 盤面の管理
export class World {
  readonly cols: number;
  readonly rows: number;
  fishes: Fish[];

  constructor(cols: number, rows: number) {
    this.cols = cols;
    this.rows = rows;
    this.fishes = [];
  }

  // 魚をランダムに配置する
  placeFishes(count: number): void {
    while (this.fishes.length < count) {
      const col = Math.floor(Math.random() * this.cols);
      const row = Math.floor(Math.random() * this.rows);

      // 同じ位置に魚がいなければ配置
      if (!this.getFishAt(col, row)) {
        this.fishes.push(new Fish(col, row));
      }
    }
  }

  // 指定位置の魚を返す（いなければnull）
  getFishAt(col: number, row: number): Fish | null {
    return this.fishes.find(f => f.col === col && f.row === row) ?? null;
  }

  // トーラス座標変換：端を超えたら反対側へ折り返す
  wrap(col: number, row: number): { col: number; row: number } {
    return {
      col: ((col % this.cols) + this.cols) % this.cols,
      row: ((row % this.rows) + this.rows) % this.rows,
    };
  }

  // 隣接する上下左右の座標を返す
  getNeighbors(col: number, row: number): { col: number; row: number }[] {
    return [
      this.wrap(col, row - 1), // 上
      this.wrap(col, row + 1), // 下
      this.wrap(col - 1, row), // 左
      this.wrap(col + 1, row), // 右
    ];
  }

  // 魚を1ステップ移動する
  stepFishes(): void {
    for (const fish of this.fishes) {
      // 隣接する空きマスを探す
      const neighbors = this.getNeighbors(fish.col, fish.row);
      const emptyNeighbors = neighbors.filter(
        n => !this.getFishAt(n.col, n.row)
      );

      // 空きマスがあればランダムに移動
      if (emptyNeighbors.length > 0) {
        const next = emptyNeighbors[Math.floor(Math.random() * emptyNeighbors.length)];
        fish.col = next.col;
        fish.row = next.row;
      }

      fish.age++;
    }
  }  

  // キャンバスに盤面を描画する
  draw(ctx: CanvasRenderingContext2D, cellSize: number): void {
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        const fish = this.getFishAt(col, row);

        if (fish) {
          // 魚：緑
          ctx.fillStyle = "#00ff00";
        } else {
          // 海：黒
          ctx.fillStyle = "#000000";
        }

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