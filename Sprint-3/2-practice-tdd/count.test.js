// ═══════════════════════════════════════════════════════
// 🎯 Personal Implementation: countChar Function Tests

// Purpose: Test-first practice for counting character occurrences
// Style: Gherkin-style BDD comments + Jest assertions
// ═══════════════════════════════════════════════════════

// implement a function countChar that counts the number of times a character occurs in a string
const countChar = require("./count");

// ───────────────────────────────────────────────────────
// 📋 Specification:
// Given a string `str` and a single character `char` to search for,
// When the countChar function is called with these inputs,
// Then it should return the number of times `char` appears in `str`.
// ───────────────────────────────────────────────────────

// ═══════════════════════════════════════════════════════
// 🧪 Test Scenarios
// ═══════════════════════════════════════════════════════

// Scenario: Multiple Occurrences
// ──────────────────────────────
// Given the input string `str`,
// And a character `char` that occurs one or more times in `str` (e.g., 'a' in 'aaaaa'),
// When the function is called with these inputs,
// Then it should correctly count occurrences of `char`.
test("should count multiple occurrences of a character", () => {
  const str = "aaaaa";      // 🎯 Input: repeated character
  const char = "a";         // 🔍 Search for: 'a'
  const count = countChar(str, char);
  expect(count).toEqual(5); // ✅ Expect: 5 occurrences
});

// Scenario: No Occurrences
// ─────────────────────────
// Given the input string `str`,
// And a character `char` that does not exist within `str`.
// When the function is called with these inputs,
// Then it should return 0, indicating that no occurrences of `char` were found.
test("should return 0 for no occurence", () => {
  const str = "asdf";       // 🎯 Input: no 'l' present
  const char = "l";         // 🔍 Search for: 'l' (not in string)
  const count = countChar(str, char);
  expect(count).toEqual(0); // ✅ Expect: 0 occurrences
});


