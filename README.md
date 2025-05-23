# num_ja

[![Node.js Package](https://github.com/Hee-San/num_ja/workflows/Node.js%20Package/badge.svg)](https://github.com/Hee-San/num_ja/actions)
[![GitHub license](https://img.shields.io/github/license/Hee-San/num_ja)](https://opensource.org/licenses/MIT)

Convert between number and Japanese.

[See in npmjs.com](https://www.npmjs.com/package/@hee-san/num_ja)

*[日本語のドキュメントはこちら (Japanese documentation)](README.ja.md)*

## Usage

[Test num_ja in your browser](https://npm.runkit.com/%40hee-san%2Fnum_ja)

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

## Supported Range

This library can handle numbers within the following range:

- Numbers: Up to JavaScript's `Number.MAX_SAFE_INTEGER` (9,007,199,254,740,991)
- Units: Supports units up to "kei" (京, 10^16)

**Not supported**:

- Units larger than "kei" (such as 垓, 𥝱, 穣, 溝, 澗, 正, 載, 極, etc.)
- Fractional units like "bu" (分), "rin" (厘), "mou" (毛), etc. (integers only)

Exceptions will be thrown for invalid inputs (numbers out of range, NaN, invalid kanji number strings, etc.).

## Other Styles

`ja_num` supports [Daiji](https://ja.wikipedia.org/wiki/%E5%A4%A7%E5%AD%97_(%E6%95%B0%E5%AD%97)) and Hiragana.

**What is Daiji?**: Daiji (大字) refers to the formal/old numerical kanji characters used in Japan for financial and legal documents to prevent forgery. These characters are more complex than standard numerals, making them harder to alter. Examples include 壱 (1), 弐 (2), 参 (3), etc.

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

## Supported Notation Styles

The following notation styles are supported:

| Standard | Other Supported Notations | Numeric Value |
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
| マイナス | -, 負の, 負, まいなす | - (negative) |
| (empty) | とんで | Indicates omission when reciting numbers (used when a digit place has zero value) |

## Install

Install from the command line:

```sh
npm install @hee-san/num_ja
```

Install via package.json:

```json
"@hee-san/num_ja": "latest"
```
