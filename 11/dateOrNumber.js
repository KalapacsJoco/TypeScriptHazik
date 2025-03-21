function dateOrNumber(input) {
    if (typeof input === "number") {
        return new Date(input);
    }
    else if (input instanceof Date) {
        return input.getTime();
    }
    else {
        throw new Error("Érvénytelen típus. Csak számot vagy dátumot várunk.");
    }
}
var dateFromNumber = dateOrNumber(1234565432345);
console.log(dateFromNumber);
var msSinceEpoch = dateOrNumber(new Date("2021-01-01T00:00:00.000Z"));
console.log(msSinceEpoch);
