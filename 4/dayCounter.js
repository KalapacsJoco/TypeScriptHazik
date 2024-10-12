function daysBetweenDates(startDate, endDate) {
    var timeDiff = endDate.getTime() - startDate.getTime();
    var daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    if (timeDiff === 74 * 60 * 60 * 1000) {
        return daysDiff + 1;
    }
    else if (daysDiff < 0) {
        return Math.abs(daysDiff);
    }
    else {
        return daysDiff;
    }
}
var startDate = new Date(2023, 11, 11);
var endDate = new Date(2023, 11, 24);
var days = daysBetweenDates(endDate, startDate);
console.log(days);
