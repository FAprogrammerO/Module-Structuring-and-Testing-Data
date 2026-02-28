//const repeatStr = require("./repeat-str");

// ───────────────────────────────────────────────────────
// Rule Summary:
// • count > 1 → str repeated count times ("hi", 3 → "hihihi")
// • count = 1 → original string unchanged
// • count = 0 → empty string ""
// • count < 0 → throw error (invalid input)
// ───────────────────────────────────────────────────────
const repeatStr = require("./repeat-str");
// ── Case 1: Multiple repetitions (count > 1) ──
test("repeats string correctly for count > 1", () => {
  expect(repeatStr("hello", 3)).toEqual("hellohellohello");
  expect(repeatStr("a", 5)).toEqual("aaaaa");
  expect(repeatStr("xy", 2)).toEqual("xyxy");
});

// ── Case 2: Single repetition (count = 1) ──
test("returns original string unchanged when count = 1", () => {
  expect(repeatStr("bye", 1)).toEqual("bye");
  expect(repeatStr("x", 1)).toEqual("x");
  expect(repeatStr("test", 1)).toEqual("test");
});

// ── Case 3: Zero repetition (count = 0) ──
test("returns empty string when count = 0", () => {
  expect(repeatStr("no", 0)).toEqual("");
  expect(repeatStr("anything", 0)).toEqual("");
  expect(repeatStr("", 0)).toEqual("");
});

// ── Case 4: Invalid input (negative count) ──
test("throws error for negative count values", () => {
  expect(() => repeatStr("str", -1)).toThrow("negative counts are not valid");
  expect(() => repeatStr("x", -10)).toThrow("negative counts are not valid");
});

