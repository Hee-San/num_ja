# num_ja
[![Node.js Package](https://github.com/Hee-San/num_ja/workflows/Node.js%20Package/badge.svg)](https://github.com/Hee-San/num_ja/actions)
[![GitHub license](https://img.shields.io/github/license/Hee-San/num_ja)](https://opensource.org/licenses/MIT)

Convert between number and Japanese
アラビア数字と漢数字を相互に変換します。

[See in npmjs.com](https://www.npmjs.com/package/@hee-san/num_ja)

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

### OTHER STYLES
`ja_num` supports [Daiji](https://ja.wikipedia.org/wiki/%E5%A4%A7%E5%AD%97_(%E6%95%B0%E5%AD%97)) and Hiragana.
`ja_num`は大字やひらがなによる表記も変換できます。

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

## Install

Install from the command line:

```sh
npm install @hee-san/num_ja@3.1.1
```

Install via package.json:

```json
"@hee-san/num_ja": "3.1.1"
```
