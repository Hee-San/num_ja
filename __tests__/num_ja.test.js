const numJa = require("..");

test("number to japanese", () => {
  expect(numJa.num_ja(0)).toBe("〇");
  expect(numJa.num_ja(1)).toBe("一");
  expect(numJa.num_ja(-1)).toBe("マイナス一");
  expect(numJa.num_ja(100001101)).toBe("一億千百一");
  expect(numJa.num_ja(1234567890)).toBe("十二億三千四百五十六万七千八百九十");
});

test("japanese to number", () => {
  expect(numJa.ja_num("〇")).toBe(0);
  expect(numJa.ja_num("一")).toBe(1);
  expect(numJa.ja_num("マイナス一")).toBe(-1);
  expect(numJa.ja_num("一億千百一")).toBe(100001101);
  expect(numJa.ja_num("十二億三千四百五十六万七千八百九十")).toBe(1234567890);
});

test("ja_num other styles", () => {
  expect(numJa.ja_num("零")).toBe(0);
  expect(numJa.ja_num("壱")).toBe(1);
  expect(numJa.ja_num("負の廿")).toBe(-20);
  expect(numJa.ja_num("一萬阡陌拾")).toBe(11110);
  expect(numJa.ja_num("じゅうにおくさんぜんよんひゃくまん")).toBe(1234000000);
  expect(numJa.ja_num("ごじゅうろくまんななせんはっぴゃく")).toBe(567800);
  expect(numJa.ja_num("にせんとんでにじゅう")).toBe(2020);
});
