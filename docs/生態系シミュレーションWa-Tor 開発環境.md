---
project: Wa-Tor
tags:
  - ai/programming
  - simulator
  - computer/recreations
  - Wa-Tor/DevelopmentEnvironment
---

# 生態系シミュレーションWa-Tor 開発環境

## 目的

Wa-Tor Simulator の開発を開始できる環境を構築する。

本プロジェクトでは、TypeScriptによる開発を行う。

開発初期段階では Vite は導入しない。

まずは TypeScript コンパイラ（tsc）のみで開発を進め、必要性を感じた時点で Vite の導入を検討する。

---

## 技術スタック

### 開発言語

- TypeScript
    

### 開発ツール

- VSCode
    
- GitHub Repository
    
- Claude Code
    

### 描画技術

- HTML5 Canvas
    

### バージョン管理

- Git
    
- GitHub
    

### 開発方針

[[生態系シミュレーションWa−Tor開発計画#基本方針]] 参照

---

## Step 0-1 Anthropicアカウント取得

### 目的

Claude Codeを利用できる状態にする。

### 完了条件

- Anthropicアカウント作成済み
    
- Claudeへログイン可能
    

---

## Step 0-2 Claude Code利用開始

### 目的

Claude Codeを利用できる状態にする。

### 完了条件

- Claude Codeインストール済み
    
- Claude Codeから認証済み
    

---

## Step 0-3 VSCode導入

### 目的

開発環境を準備する。

### 完了条件

- VSCode起動可能
    

---

## Step 0-4 Node.js導入

### 目的

TypeScriptおよびClaude Code実行環境を準備する。

### 完了条件

- nodeコマンド利用可能
    
- npmコマンド利用可能
    

---

## Step 0-5 Git確認

### 目的

バージョン管理環境を準備する。

### 完了条件

- gitコマンド利用可能
    

---

## Step 0-6 GitHub Repository作成

### 目的

プロジェクト管理基盤を準備する。

### 完了条件

- GitHub上にリポジトリ作成済み
    

---

## Step 0-7 リポジトリのクローン

### 目的

ローカル作業環境を準備する。

### 完了条件

- ローカル環境へクローン済み
    

---

## Step 0-8 TypeScript環境構築

### 目的

TypeScript開発環境を構築する。

### 作業内容

- package.json作成
    
- TypeScript導入
    
- tsconfig.json作成
    

### 完了条件

- TypeScriptコンパイル成功
    

---

## Step 0-9 プロジェクト雛形作成

### ディレクトリ構成

wa-tor/  
├── docs/  
├── src/  
├── dist/  
├── index.html  
├── package.json  
├── tsconfig.json  
├── README.md  
├── CLAUDE.md  
└── .gitignore

### 完了条件

- ディレクトリ構成作成済み
    

---

## Step 0-10 README作成

### 目的

プロジェクト概要を記録する。

### 完了条件

- README.md作成済み
    

---

## Step 0-11 仕様書作成

### 目的

開発対象の仕様を明文化する。

### 完了条件

- docs/specification.md作成済み
    

---

## Step 0-12 Claude Code運用ルール作成

### 目的

AIとの共同開発方針を定義する。

### 完了条件

- CLAUDE.md作成済み
    

---

## Step 0-13 初回コミット

### 目的

開発開始時点の状態を保存する。

### 完了条件

- GitHubへ初回Push完了
    

---

## Phase 0 完了条件

以下をすべて満たすこと。

- TypeScript利用可能
    
- VSCode利用可能
    
- Git利用可能
    
- GitHub利用可能
    
- Claude Code利用可能
    
- リポジトリ作成済み
    
- プロジェクト雛形作成済み
    
- README作成済み
    
- 仕様書作成済み
    
- CLAUDE.md作成済み
    
- 初回コミット完了
---
# 関連ノート
[[生態系シミュレーションWa-Tor]]
[[生態系シミュレーションWa−Tor開発計画]]