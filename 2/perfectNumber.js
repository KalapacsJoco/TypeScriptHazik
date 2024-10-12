"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPerfectNumber = void 0;
var isPerfectNumber = function (number) {
    var dividers = 0;
    for (var i = 1; i < number; i++) {
        if ((number % i) == 0) {
            dividers += i;
        }
    }
    return dividers === number;
};
exports.isPerfectNumber = isPerfectNumber;
// console.log(isPerfectNumber(5))
