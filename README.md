# num_ja
[![Node.js Package](https://github.com/Hee-San/num_ja/workflows/Node.js%20Package/badge.svg)](https://github.com/Hee-San/num_ja/actions)
[![GitHub license](https://img.shields.io/github/license/Hee-San/num_ja)](https://opensource.org/licenses/MIT)

Convert between number and Japanese

## Usage

[Test num_ja in your browser](https://npm.runkit.com/%40hee-san%2Fnum_ja)

```js
var num_ja = require("num_ja")

console.log(num_ja.num_ja(12345))
// => 一万二千三百四十五

console.log(num_ja.ja_num("一万二千三百四十五"))
// => 12345

```

## Install

Install from the command line:

```bash
npm install num_ja
```

Install via package.json:

```json
"@hee-san/num_ja": "2.0.0"
```
