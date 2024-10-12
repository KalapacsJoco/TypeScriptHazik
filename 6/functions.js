function functions(N) {
    return function (M) {
        return N * M;
    };
}
var test = functions(5);
console.log(test(3));
console.log(test(3));
console.log(test(-2));
