
/*
> Leap years are years divisible by four (like 1984 and 2004). 
However, years divisible by 100 are not leap years 
(such as 1800 and 1900) unless they are divisible by 400 
(like 1600 and 2000, which were in fact leap years). 
(Yes, it's all pretty confusing)

*/
const leapYears = function (year) {
    if (!Number.isInteger(year)) {
        return "ERROR";
    }

    let a = year % 4 === 0;
    let b = (year % 100 === 0 && year % 400 === 0);

    if (b) {
        return a;
    }
    return false;
    //return year % 4 === 0 || (year % 100 === 0 && year % 400 === 0);
};

console.log(leapYears(34992));

// Do not edit below this line
module.exports = leapYears;
