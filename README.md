# Wa-Tor Simulator

生態系シミュレーション Wa-Tor の TypeScript 実装。

## Wa-Torとは

Wa-Tor は、1984年に A.K.Dewdney が Scientific American 誌の「Computer Recreations」で紹介した生態系シミュレーションである。

世界はトーラス（ドーナツ面）状の海洋として表現され、その中で魚とサメが生存・繁殖・捕食を繰り返す。

個々の生物は非常に単純なルールに従って行動するだけであるにもかかわらず、

-  魚の爆発的増加
-  サメによる捕食圧の上昇
-  魚の減少
-  サメの飢餓による減少
-  生態系の回復

といった複雑な個体数変動が自然に発生する。

Wa-Tor の魅力は、単純なルールから予想外に豊かな振る舞いが生まれる「創発（Emergence）」を観察できる点にある。

本プロジェクトでは、この古典的なシミュレーションを TypeScript と HTML5 Canvas を用いて実装しながら、AI駆動開発、シミュレーションプログラミング、および TypeScript の学習を行う。

## 実行方法

```bash
npx tsc
```

ブラウザで `index.html` を開く。

## 技術スタック

- TypeScript
- HTML5 Canvas

## 参考

- A.K.Dewdney, "Computer Recreations", Scientific American, 1984