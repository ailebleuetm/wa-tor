# CLAUDE.md - Wa-Tor Simulator 開発ガイド

## プロジェクト概要

TypeScriptで実装する生態系シミュレーション Wa-Tor。
魚とサメがトーラス状海洋世界で共存するシミュレーター。

## 技術スタック

- TypeScript（tscコンパイル）
- HTML5 Canvas
- Viteなし（初期段階）

## ディレクトリ構成
wa-tor/
├── docs/         # 仕様書・ドキュメント
├── src/          # TypeScriptソース
├── dist/         # コンパイル済みJS（自動生成）
├── index.html    # エントリーポイント
├── package.json
├── tsconfig.json
├── README.md
├── CLAUDE.md     # このファイル
└── .gitignore

## 開発方針

- 小さなステップで実装し、各ステップで動作確認する
- 各Phaseの完了時にGitコミットする
- 型安全を意識したTypeScriptを書く
- `strict: true` を維持する

## コンパイル

```bash
npx tsc
```

## ファイル命名規則

- キャメルケース（例：`fishWorld.ts`）
- クラス名はパスカルケース（例：`FishWorld`）

## コメント

- 日本語で
