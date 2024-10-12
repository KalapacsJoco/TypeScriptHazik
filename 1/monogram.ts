let fullName: string = "Kalapács József"

const getMonogram = (fullName: string): string => {
    const nameParts = fullName.split(' ');
    const monogram = nameParts.map(part => part[0].toUpperCase()).join(' ');
    return monogram;
};

console.log(getMonogram(fullName));  
