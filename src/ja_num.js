module.exports = ja_num;

DIGIT = ["〇", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
UNIT1 = ["", "十", "百", "千"];
UNIT2 = ["", "万", "億", "兆", "京"];
// "垓", "𥝱", "穣", "溝", "澗", "正", "載", "極", "恒河沙", "阿僧祇", "那由他", "不可思議", "無量大数",

function ja_num(str) {
  if (typeof str !== "string") throw new TypeError();

  if (str == "〇") return 0;
  if (str.startsWith("マイナス")) return -ja_num(str.slice(4));

  let groupLevel = UNIT2.length - 1;
  let groupBase = 1e16;
  let answer = 0;
  while (str.length > 0) {
    if (groupLevel < 0) throw new Error();
    if (str.includes(UNIT2[groupLevel])) {
      let index = str.indexOf(UNIT2[groupLevel]);
      let groupStr = groupLevel == 0 ? str : str.substring(0, index);
      str = groupLevel == 0 ? "" : str.slice(index + 1);

      let chars = ["〇", "〇", "〇", "〇"];
      for (let i = 0; i < 3; i++) {
        if (!groupStr.includes(UNIT1[3 - i])) continue;
        let splitted = groupStr.split(UNIT1[3 - i], 2);
        if (splitted[0].length > 1) throw new Error();
        chars[i] = splitted[0] == "" ? "一" : splitted[0];
        groupStr = splitted[1];
      }
      if (groupStr.length > 1) throw new Error();
      chars[3] = groupStr == "" ? "〇" : groupStr;

      chars.forEach((c) => {
        if (!DIGIT.includes(c)) throw new Error();
      });

      answer +=
        (DIGIT.indexOf(chars[0]) * 1000 +
          DIGIT.indexOf(chars[1]) * 100 +
          DIGIT.indexOf(chars[2]) * 10 +
          DIGIT.indexOf(chars[3])) *
        groupBase;
    }
    groupLevel--;
    groupBase /= 10000;
  }

  return answer;
}
