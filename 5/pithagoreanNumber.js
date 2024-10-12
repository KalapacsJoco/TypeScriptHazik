function pithagoreanNumber(number1, number2) {
    var number3 = Math.pow(number1, 2) + Math.pow(number2, 2);
    return Number.isInteger(Math.sqrt(number3));
}
console.log(pithagoreanNumber(4, 5) ? "Pitagoraszi számhármas" : "Nem Pitagoraszi számhármas");
