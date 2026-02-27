function getOrdinalNumber(num) {
  let numberToString = String(num);
  let numberLastDigit = numberToString.slice(-1);
  let numberLast2Digits = numberToString.slice(-2);

  if (numberLastDigit === "1" && numberLast2Digits !== "11")
    return numberToString + "st";
  if (numberLastDigit === "2" && numberLast2Digits !== "12")
    return numberToString + "nd";
  if (numberLastDigit === "3" && numberLast2Digits !== "13")
    return numberToString + "rd";
  return numberToString + "th";
}


module.exports = getOrdinalNumber;