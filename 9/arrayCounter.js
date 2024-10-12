function arrayCounter(arr) {
    var countMap = {};
    var mostFrequent = null;
    var maxCount = 0;
    arr.forEach(function (num) {
        countMap[num] = (countMap[num] || 0) + 1;
        if (countMap[num] > maxCount) {
            maxCount = countMap[num];
            mostFrequent = num;
        }
    });
    return mostFrequent;
}
var numbers = [1, 2, 4, 6, 4, 1, 2, 3, 3, 5, 66, 55, 2, 3, 5, 8, 9, 7, 5, 3, 1];
console.log(arrayCounter(numbers));
