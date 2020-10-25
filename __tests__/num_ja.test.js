const num_ja = require("..");

test("number to japanese", () => {
  expect(num_ja.num_ja(0)).toBe("〇");
  expect(num_ja.num_ja(1)).toBe("一");
  expect(num_ja.num_ja(-1)).toBe("マイナス一");
  expect(num_ja.num_ja(100001101)).toBe("一億千百一");
  expect(num_ja.num_ja(1234567890)).toBe("十二億三千四百五十六万七千八百九十");
});

test("japanese to number", () => {
  expect(num_ja.ja_num("〇")).toBe(0);
  expect(num_ja.ja_num("一")).toBe(1);
  expect(num_ja.ja_num("マイナス一")).toBe(-1);
  expect(num_ja.ja_num("一億千百一")).toBe(100001101);
  expect(num_ja.ja_num("十二億三千四百五十六万七千八百九十")).toBe(1234567890);
});
