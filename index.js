"use strict";
module.exports = {
  num_ja: num_ja,
  ja_num: ja_num,
};

num_ja.DIGIT = ["〇", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
num_ja.UNIT1 = ["", "十", "百", "千"];
num_ja.UNIT2 = ["", "万", "億", "兆", "京"];
// "垓", "𥝱", "穣", "溝", "澗", "正", "載", "極", "恒河沙", "阿僧祇", "那由他", "不可思議", "無量大数",

function num_ja(n) {
  if (
    typeof n !== "number" ||
    isNaN(n) ||
    -n < -Number.MAX_SAFE_INTEGER ||
    Number.MAX_SAFE_INTEGER < n
  )
    throw new TypeError();

  if (n == 0) return "〇";
  if (n < 0) return "マイナス" + num_ja(-n);

  let groupLevel = 0;
  let answer = "";
  while (n > 0) {
    let groupNumber = n % 10000;
    n = Math.floor(n / 10000);
    let n0 = groupNumber % 10;
    let n1 = Math.floor(((groupNumber % 100) - (groupNumber % 10)) / 10);
    let n2 = Math.floor(((groupNumber % 1000) - (groupNumber % 100)) / 100);
    let n3 = Math.floor((groupNumber - (groupNumber % 1000)) / 1000);

    answer =
      (n3 <= 1 ? "" : num_ja.DIGIT[n3]) +
      (n3 == 0 ? "" : num_ja.UNIT1[3]) +
      (n2 <= 1 ? "" : num_ja.DIGIT[n2]) +
      (n2 == 0 ? "" : num_ja.UNIT1[2]) +
      (n1 <= 1 ? "" : num_ja.DIGIT[n1]) +
      (n1 == 0 ? "" : num_ja.UNIT1[1]) +
      (n0 == 0 ? "" : num_ja.DIGIT[n0]) +
      (groupNumber == 0 ? "" : num_ja.UNIT2[groupLevel]) +
      answer;

    groupLevel++;
  }

  return answer;
}

function ja_num(str) {
  if (typeof str !== "string") throw new TypeError();

  if (str == "〇") return 0;
  if (str.startsWith("マイナス")) return -ja_num(str.slice(4));

  let groupLevel = num_ja.UNIT2.length - 1;
  let groupBase = 1e16;
  let answer = 0;
  while (str.length > 0) {
    if (groupLevel < 0) throw new Error();
    if (str.includes(num_ja.UNIT2[groupLevel])) {
      let index = str.indexOf(num_ja.UNIT2[groupLevel]);
      let groupStr = groupLevel == 0 ? str : str.substring(0, index);
      str = groupLevel == 0 ? "" : str.slice(index + 1);

      let chars = ["〇", "〇", "〇", "〇"];
      for (let i = 0; i < 3; i++) {
        if (!groupStr.includes(num_ja.UNIT1[3 - i])) continue;
        let splitted = groupStr.split(num_ja.UNIT1[3 - i], 2);
        if (splitted[0].length > 1) throw new Error();
        chars[i] = splitted[0] == "" ? "一" : splitted[0];
        groupStr = splitted[1];
      }
      if (groupStr.length > 1) throw new Error();
      chars[3] = groupStr == "" ? "〇" : groupStr;

      chars.forEach((c) => {
        if (!num_ja.DIGIT.includes(c)) throw new Error();
      });

      answer +=
        (num_ja.DIGIT.indexOf(chars[0]) * 1000 +
          num_ja.DIGIT.indexOf(chars[1]) * 100 +
          num_ja.DIGIT.indexOf(chars[2]) * 10 +
          num_ja.DIGIT.indexOf(chars[3])) *
        groupBase;
    }
    groupLevel--;
    groupBase /= 10000;
  }

  return answer;
}
