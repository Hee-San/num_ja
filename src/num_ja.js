module.exports = num_ja;

DIGIT = ["〇", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
UNIT1 = ["", "十", "百", "千"];
UNIT2 = ["", "万", "億", "兆", "京"];
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
      (n3 <= 1 ? "" : DIGIT[n3]) +
      (n3 == 0 ? "" : UNIT1[3]) +
      (n2 <= 1 ? "" : DIGIT[n2]) +
      (n2 == 0 ? "" : UNIT1[2]) +
      (n1 <= 1 ? "" : DIGIT[n1]) +
      (n1 == 0 ? "" : UNIT1[1]) +
      (n0 == 0 ? "" : DIGIT[n0]) +
      (groupNumber == 0 ? "" : UNIT2[groupLevel]) +
      answer;

    groupLevel++;
  }

  return answer;
}
