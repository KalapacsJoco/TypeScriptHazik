function functions (N: number): (M:number) => number {
    return function (M: number): number {
        return N*M
    }
}

const test = functions(5)

console.log(test(3))
console.log(test(-2))