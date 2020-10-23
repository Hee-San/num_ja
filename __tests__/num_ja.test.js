const num_ja = require("../num_ja");

test("number to japanese", () => {
  expect(num_ja(0)).toBe("〇");
  expect(num_ja(1)).toBe("一");
  expect(num_ja(-1)).toBe("マイナス一");
  expect(num_ja(100001101)).toBe("一億千百一");
  expect(num_ja(1234567890)).toBe("十二億三千四百五十六万七千八百九十");
});
