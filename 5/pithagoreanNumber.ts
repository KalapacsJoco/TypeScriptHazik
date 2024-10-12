function pithagoreanNumber(number1: number, number2: number): boolean {
    let number3 = Math.pow(number1, 2) + Math.pow(number2, 2);
    return Number.isInteger(Math.sqrt(number3)); 
}


console.log(pithagoreanNumber(4, 5) ? "Pitagoraszi számhármas" : "Nem Pitagoraszi számhármas");