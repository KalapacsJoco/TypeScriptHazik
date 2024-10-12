var fullName = "Kalapács József";
var getMonogram = function (fullName) {
    var nameParts = fullName.split(' ');
    var monogram = nameParts.map(function (part) { return part[0].toUpperCase(); }).join(' ');
    return monogram;
};
console.log(getMonogram(fullName));
