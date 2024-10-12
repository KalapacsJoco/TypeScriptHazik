function stringCounter(arr: string[]): number | null {
    const countMap: { [key: number]: number } = {};
    let mostFrequentLength: number | null = null;
    let maxCount = 0;

    arr.forEach(str => {
        const length = str.length; 
        countMap[length] = (countMap[length] || 0) + 1;
        
        if (countMap[length] > maxCount) {
            maxCount = countMap[length];
            mostFrequentLength = length;
        }
    });

    return mostFrequentLength;
}

const strings = ["kacsa", "lo", "eger", "szamar", "teve", "tehen", "farkas", "orangutan"];

console.log(stringCounter(strings));
