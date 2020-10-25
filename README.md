# num_ja
[![Node.js Package](https://github.com/Hee-San/num_ja/workflows/Node.js%20Package/badge.svg)](https://github.com/Hee-San/num_ja/actions)

Convert between number and Japanese

## Usage

```js
var numJa = require("num_ja")

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
