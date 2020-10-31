module.exports = ja_num;

DIGIT = ["〇", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
UNIT1 = ["", "十", "百", "千"];
UNIT2 = ["", "万", "億", "兆", "京"];
// "垓", "𥝱", "穣", "溝", "澗", "正", "載", "極", "恒河沙", "阿僧祇", "那由他", "不可思議", "無量大数",

OTHER_STYLES = {
  〇: ["零"],
  一: ["壱", "壹", "弌"],
  二: ["弐", "貳", "貮", "贰"],
  三: ["参", "參", "弎", "叁"],
  四: ["肆", "䦉"],
  五: ["伍"],
  六: ["陸", "陆"],
  七: ["漆", "質", "柒"],
  八: ["捌"],
  九: ["玖"],
  十: ["拾", "什"],
  二十: ["廿", "〹", "念"],
  三十: ["丗", "卅"],
  四十: ["卌"],
  百: ["佰", "陌"],
  千: ["仟", "阡"],
  万: ["萬"],
  マイナス: ["-", "負の", "負"],
};

function ja_num(str) {
  if (typeof str !== "string") throw new TypeError();

  for (var to in OTHER_STYLES) {
    for (var from of OTHER_STYLES[to]) {
      str = str.replace(from, to);
    }
  }

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
