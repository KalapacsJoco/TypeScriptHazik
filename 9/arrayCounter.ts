function arrayCounter (arr: number[]): number | null {
    const countMap: {[key: number]: number}  ={}
    let mostFrequent: number | null = null
    let maxCount = 0
    arr.forEach(num => {
        countMap[num] = (countMap[num] || 0) +1
        if (countMap[num] > maxCount) {
            maxCount = countMap[num]
            mostFrequent = num
        }
    })

    return mostFrequent
}

const numbers = [1,2,4,6,4,1,2,3,3,5,66,55,2,3,5,8,9,7,5,3,1]

console.log(arrayCounter(numbers))