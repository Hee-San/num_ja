"use strict";

module.exports = num_ja;

num_ja.DIGIT = ["", "", "二", "三", "四", "五", "六", "七", "八", "九"];
num_ja.UNIT1 = ["", "十", "百", "千"];
num_ja.UNIT2 = [
  "",
  "万",
  "億",
  "兆",
  "京",
  "垓",
  "𥝱",
  "穣",
  "溝",
  "澗",
  "正",
  "載",
  "極",
  "恒河沙",
  "阿僧祇",
  "那由他",
  "不可思議",
  "無量大数",
];

function num_ja(n) {
  if (typeof n !== "number" || isNaN(n)) throw new TypeError();

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
      num_ja.DIGIT[n3] +
      (n3 == 0 ? "" : num_ja.UNIT1[3]) +
      num_ja.DIGIT[n2] +
      (n2 == 0 ? "" : num_ja.UNIT1[2]) +
      num_ja.DIGIT[n1] +
      (n1 == 0 ? "" : num_ja.UNIT1[1]) +
      (n0 == 1 ? "一" : num_ja.DIGIT[n0]) +
      (groupNumber == 0 ? "" : num_ja.UNIT2[groupLevel]) +
      answer;

    groupLevel++;
  }

  return answer;
}
