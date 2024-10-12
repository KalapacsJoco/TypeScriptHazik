import { isPerfectNumber } from '../2/perfectNumber';

let numbers = [6, 7, 14, 28, 6, 496, 1]
let selectedNumbers = []

for (let i=0; i< numbers.length; i++) {
    if (!isPerfectNumber(numbers[i])) {
        selectedNumbers.push(numbers[i])

    }
}
console.log(selectedNumbers)