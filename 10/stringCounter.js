function stringCounter(arr) {
    var countMap = {};
    var mostFrequentLength = null;
    var maxCount = 0;
    arr.forEach(function (str) {
        var length = str.length;
        countMap[length] = (countMap[length] || 0) + 1;
        if (countMap[length] > maxCount) {
            maxCount = countMap[length];
            mostFrequentLength = length;
        }
    });
    return mostFrequentLength;
}
var strings = ["kacsa", "lo", "eger", "szamar", "teve", "tehen", "farkas", "orangutan"];
console.log(stringCounter(strings));
