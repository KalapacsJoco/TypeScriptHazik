
export const isPerfectNumber = (number: number): boolean =>{
    let dividers: number = 0
    for (let i=1; i< number; i++) {
        if ((number % i) ==0 ) {
            dividers += i
        }
       
    }
    return dividers === number
}


// console.log(isPerfectNumber(5))