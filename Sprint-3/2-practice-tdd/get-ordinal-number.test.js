
//const getOrdinalNumber = require("./get-ordinal-number");

// ───────────────────────────────────────────────────────
// 📋 Rule Summary:
// • 1 → "1st", 2 → "2nd", 3 → "3rd" (unless teen)
// • 11, 12, 13 → always "th" (teen exception)
// • All others → last digit determines suffix
// ───────────────────────────────────────────────────────
const getOrdinalNumber = require("./get-ordinal-number");
// ── Case 1: Numbers ending in 1 (excluding teens) → "st" ──
test("appends 'st' to numbers ending in 1, except 11", () => {
  expect(getOrdinalNumber(1)).toEqual("1st");    // single digit
  expect(getOrdinalNumber(21)).toEqual("21st");  // double digit
  expect(getOrdinalNumber(131)).toEqual("131st");// triple digit
});

// ── Case 2: Numbers ending in 2 (excluding teens) → "nd" ──
test("appends 'nd' to numbers ending in 2, except 12", () => {
  expect(getOrdinalNumber(2)).toEqual("2nd");
  expect(getOrdinalNumber(22)).toEqual("22nd");
  expect(getOrdinalNumber(122)).toEqual("122nd");
});

// ── Case 3: Numbers ending in 3 (excluding teens) → "rd" ──
test("appends 'rd' to numbers ending in 3, except 13", () => {
  expect(getOrdinalNumber(3)).toEqual("3rd");
  expect(getOrdinalNumber(23)).toEqual("23rd");
  expect(getOrdinalNumber(123)).toEqual("123rd");
});

// ── Case 4: Default "th" suffix (teens + digits 0,4-9) ──
test("appends 'th' for teens (11-13) and digits 0,4-9", () => {
  // Teen exceptions (critical edge case)
  expect(getOrdinalNumber(11)).toEqual("11th");
  expect(getOrdinalNumber(12)).toEqual("12th");
  expect(getOrdinalNumber(13)).toEqual("13th");
  expect(getOrdinalNumber(111)).toEqual("111th"); // larger teen
  
  // Default suffix digits
  expect(getOrdinalNumber(4)).toEqual("4th");
  expect(getOrdinalNumber(10)).toEqual("10th");
  expect(getOrdinalNumber(25)).toEqual("25th");
});



