# num_ja
[![Node.js Package](https://github.com/Hee-San/num_ja/workflows/Node.js%20Package/badge.svg)](https://github.com/Hee-San/num_ja/actions)
[![GitHub license](https://img.shields.io/github/license/Hee-San/num_ja)](https://opensource.org/licenses/MIT)

Convert between number and Japanese  
アラビア数字と漢数字を相互に変換します。

## Usage

[Test num_ja in your browser](https://npm.runkit.com/%40hee-san%2Fnum_ja)

```js
var num_ja = require("num_ja")

console.log(num_ja.num_ja(0)
// => 〇
console.log(num_ja.num_ja(1)
// => 一
console.log(num_ja.num_ja(-1)
// => マイナス一
console.log(num_ja.num_ja(100001101)
// => 一億千百一
console.log(num_ja.num_ja(1234567890)
// => 十二億三千四百五十六万七千八百九十

console.log(num_ja.ja_num("〇"))
// => 0
console.log(num_ja.ja_num("一"))
// => 1
console.log(num_ja.ja_num("マイナス一"))
// => -1
console.log(num_ja.ja_num("一億千百一"))
// => 100001101
console.log(num_ja.ja_num("十二億三千四百五十六万七千八百九十"))
// => 1234567890
});
```

## Install

Install from the command line:

```sh
npm install @hee-san/num_ja@2.0.8
```

Install via package.json:

```json
"@hee-san/num_ja": "2.0.8"
```
