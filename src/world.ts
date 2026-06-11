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

  // 魚を1ステップ移動・繁殖する
  stepFishes(breedInterval: number): void {
    const newFishes: Fish[] = [];

    // 移動後の占有位置を管理するSetを作成
    const occupiedAfterMove = new Set<string>();

    for (const fish of this.fishes) {
      // 移動前の位置を記録
      const prevCol = fish.col;
      const prevRow = fish.row;

      // 隣接する空きマスを探す（移動後の占有も考慮）
      const neighbors = this.getNeighbors(fish.col, fish.row);
      const emptyNeighbors = neighbors.filter(n => {
        const key = `${n.col},${n.row}`;
        return !this.getFishAt(n.col, n.row) && !occupiedAfterMove.has(key);
      });

      // 空きマスがあればランダムに移動
      if (emptyNeighbors.length > 0) {
        const next = emptyNeighbors[Math.floor(Math.random() * emptyNeighbors.length)];
        fish.col = next.col;
        fish.row = next.row;
      }

      // 移動後の位置を占有済みとして記録
      occupiedAfterMove.add(`${fish.col},${fish.row}`);

      fish.age++;
      fish.breedCount++;

      // 繁殖周期に達したら繁殖
      if (fish.breedCount >= breedInterval) {
        fish.breedCount = 0;

        const prevKey = `${prevCol},${prevRow}`;
        // 移動前の位置が空いていれば子を生成
        if (!this.getFishAt(prevCol, prevRow) && !occupiedAfterMove.has(prevKey)) {
          newFishes.push(new Fish(prevCol, prevRow));
          occupiedAfterMove.add(prevKey);
        }
      }
    }

    // 新しい魚を追加
    this.fishes.push(...newFishes);
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