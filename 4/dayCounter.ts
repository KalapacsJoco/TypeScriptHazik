function daysBetweenDates(startDate: Date, endDate: Date): number {
    const timeDiff = endDate.getTime() - startDate.getTime();
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    if (timeDiff === 74 * 60 * 60 * 1000) {
        return daysDiff + 1;
    } else if(daysDiff < 0) {
        return Math.abs(daysDiff)

    } else {
        return daysDiff;
    }
}

const startDate = new Date(2023, 11, 11); 
const endDate = new Date(2023, 11, 24); 

const days = daysBetweenDates(endDate, startDate);
console.log(days);