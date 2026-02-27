// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
//const getCardValue = require("../implement/3-get-card-value");

// TODO: Write tests in Jest syntax to cover all possible outcomes.

// Case 1: Ace (A)
//test(`Should return 11 when given an ace card`, () => {
  //expect(getCardValue("A♠")).toEqual(11);});

// Suggestion: Group the remaining test data into these categories:
//   Number Cards (2-10)
//   Face Cards (J, Q, K)
//   Invalid Cards

// To learn how to test whether a function throws an error as expected in Jest,
// please refer to the Jest documentation:
// https://jestjs.io/docs/expect#tothrowerror
const getCardValue = require("../implement/3-get-card-value");
const suits = ["♠", "♥", "♦", "♣"];

// Case 1: Ace (A)
test(`Should return 11 when given an ace card`, () => {
  for (const suit of suits) {
    const ace = `A${suit}`;
    expect(getCardValue(ace)).toEqual(11);
  }
});

// Case 2: Face Cards (J, Q, K)
test(`Should return 10 when given a face card`, () => {
  const faceCards = ["J", "Q", "K"];
  for (const faceCard of faceCards) {
    for (const suit of suits) {
      expect(getCardValue(`${faceCard}${suit}`)).toEqual(10);
    }
  }
});

// Case 3: Number Cards (2-10)
test(`Should return the numerical value of number cards`, () => {
  const cardsNumbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (const rank of cardsNumbers) {
    for (const suit of suits) {
      const cardFace = `${rank}${suit}`;
      expect(getCardValue(cardFace)).toEqual(rank);
    }
  }
});

// Case 4: Invalid Cards
test(`Should throw an error when given an invalid card`, () => {
  const invalidCards = ["invalid", 7, "", "AA♠", "10♠♦"];
  for (const invalidCard of invalidCards) {
    expect(() => {
      getCardValue(invalidCard);
    }).toThrow();
  }
});

