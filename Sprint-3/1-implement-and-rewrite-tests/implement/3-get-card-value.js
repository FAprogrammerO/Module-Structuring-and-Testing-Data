// This problem involves playing cards: https://en.wikipedia.org/wiki/Standard_52-card_deck

// Implement a function getCardValue, when given a string representing a playing card,
// should return the numerical value of the card.

// A valid card string will contain a rank followed by the suit.
// The rank can be one of the following strings:
//   "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"
// The suit can be one of the following emojis:
//   "♠", "♥", "♦", "♣"
// For example: "A♠", "2♥", "10♥", "J♣", "Q♦", "K♦".

// When the card is an ace ("A"), the function should return 11.
// When the card is a face card ("J", "Q", "K"), the function should return 10.
// When the card is a number card ("2" to "10"), the function should return its numeric value.

// When the card string is invalid (not following the above format), the function should
// throw an error.

// Acceptance criteria:
// After you have implemented the function, write tests to cover all the cases, and
// execute the code to ensure all tests pass.

/*function getCardValue(card) {
  // TODO: Implement this function
}*/

// The line below allows us to load the getCardValue function into tests in other files.
// This will be useful in the "rewrite tests with jest" step.
//module.exports = getCardValue;

// Helper functions to make our assertions easier to read.
/*function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}*/

// TODO: Write tests to cover all outcomes, including throwing errors for invalid cards.
// Examples:function getCardValue(card) {
  // Ensure that the last char is a suit, otherwise throw an error
  function getCardValue(card) {
  // Type check
  if (typeof card !== "string") {
    throw new Error("Invalid card");
  }
  
  const suits = ["♠", "♥", "♦", "♣"];
  if (!suits.includes(card.slice(-1))) {
    throw new Error("Invalid card");
  }

  const rank = card.slice(0, -1);
  const validRank = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  if (!validRank.includes(rank)) {
    throw new Error("Invalid card");
  }

  // Clean lookup for values
  const rankValues = {
    "A": 11, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, "10": 10,
    "J": 10, "Q": 10, "K": 10
  };
  
  return rankValues[rank];
}

module.exports = getCardValue;


function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

// Tests
assertEquals(getCardValue("A♠"), 11);
assertEquals(getCardValue("K♥"), 10);
assertEquals(getCardValue("10♦"), 10);
assertEquals(getCardValue("2♣"), 2);

// Invalid card tests
const invalidCards = ["invalid", 7, "", "AA♠", "10♠♦", "10"];
invalidCards.forEach(invalidCard => {
  try {
    getCardValue(invalidCard);
    console.error(`❌ Error not thrown for: ${invalidCard}`);
  } catch (e) {
    // Expected
  }
});

console.log("\n✅ All tests completed!");