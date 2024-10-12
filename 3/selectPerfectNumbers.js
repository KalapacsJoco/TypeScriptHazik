"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var perfectNumber_1 = require("../2/perfectNumber");
var numbers = [6, 7, 14, 28, 6, 496, 1];
var selectedNumbers = [];
for (var i = 0; i < numbers.length; i++) {
    if (!(0, perfectNumber_1.isPerfectNumber)(numbers[i])) {
        selectedNumbers.push(numbers[i]);
    }
}
console.log(selectedNumbers);
