# num_ja

[![Node.js Package](https://github.com/Hee-San/num_ja/workflows/Node.js%20Package/badge.svg)](https://github.com/Hee-San/num_ja/actions)
[![GitHub license](https://img.shields.io/github/license/Hee-San/num_ja)](https://opensource.org/licenses/MIT)

アラビア数字と漢数字を相互に変換します。

[npmjs.comで見る](https://www.npmjs.com/package/@hee-san/num_ja)

*[English documentation here](README.md)*

## 使い方

[ブラウザでnum_jaをテスト](https://npm.runkit.com/%40hee-san%2Fnum_ja)

```js
var numJa = require("num_ja");

console.log(numJa.num_ja(0));
// => 〇
console.log(numJa.num_ja(1));
// => 一
console.log(numJa.num_ja(-1));
// => マイナス一
console.log(numJa.num_ja(100001101));
// => 一億千百一
console.log(numJa.num_ja(1234567890));
// => 十二億三千四百五十六万七千八百九十

console.log(numJa.ja_num("〇"));
// => 0
console.log(numJa.ja_num("一"));
// => 1
console.log(numJa.ja_num("マイナス一"));
// => -1
console.log(numJa.ja_num("一億千百一"));
// => 100001101
console.log(numJa.ja_num("十二億三千四百五十六万七千八百九十"));
// => 1234567890
```

## 対応範囲

このライブラリは以下の範囲の数値を扱うことができます：

- 数値: JavaScriptの`Number.MAX_SAFE_INTEGER`（9,007,199,254,740,991）まで
- 単位: 一、十、百、千、万、億、兆、京まで対応

**非対応**:

- 「京」より上の単位（垓、𥝱、穣、溝、澗、正、載、極など）には対応していません
- 「分」「厘」「毛」など小数点以下の単位には対応していません（整数のみサポート）

無効な入力（数値範囲外、NaN、不正な漢数字文字列など）に対しては、例外がスローされます。

## その他のスタイル

`ja_num`は[大字](https://ja.wikipedia.org/wiki/%E5%A4%A7%E5%AD%97_(%E6%95%B0%E5%AD%97))やひらがなによる表記も変換できます。

```js
var numJa = require("num_ja");

console.log(numJa.ja_num("零"));
// => 0
console.log(numJa.ja_num("壱"));
// => 1
console.log(numJa.ja_num("負の廿壹"));
// => -21
console.log(numJa.ja_num("一萬阡陌拾"));
// => 11110
console.log(numJa.ja_num("せんにひゃくさんじゅうよん"));
// => 1234
console.log(numJa.ja_num("にせんとんでにじゅう"));
// => 2020
```

## 対応する表記スタイル

以下の表記スタイルに対応しています：

| 標準 | その他の対応表記 | 数値 |
|------|-----------------|-------------|
| 〇 | 零, ぜろ, れい | 0 |
| 一 | 壱, 壹, 弌, いち, いっ | 1 |
| 二 | 弐, 貳, 貮, 贰, に | 2 |
| 三 | 参, 參, 弎, 叁, さん | 3 |
| 四 | 肆, 䦉, し, よん | 4 |
| 五 | 伍, ご | 5 |
| 六 | 陸, 陆, ろく, ろっ | 6 |
| 七 | 漆, 質, 柒, なな, しち | 7 |
| 八 | 捌, はち, はっ | 8 |
| 九 | 玖, きゅう | 9 |
| 十 | 拾, 什, じゅう, じっ, じゅっ | 10 |
| 二十 | 廿, 〹, 念 | 20 |
| 三十 | 丗, 卅 | 30 |
| 四十 | 卌 | 40 |
| 百 | 佰, 陌, ひゃく, びゃく, ぴゃく | 100 |
| 千 | 仟, 阡, せん, ぜん | 1,000 |
| 万 | 萬, まん | 10,000 |
| 億 | おく | 100,000,000 |
| 兆 | ちょう | 1,000,000,000,000 |
| 京 | けい | 10,000,000,000,000,000 |
| マイナス | -, 負の, 負, まいなす | - (符号) |
| (空) | とんで | 省略を表す |

## インストール

コマンドラインからインストール:

```sh
npm install @hee-san/num_ja
```

package.jsonを使用したインストール:

```json
"@hee-san/num_ja": "latest"
```
