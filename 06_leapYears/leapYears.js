const leapYears = function(year) {
    if (year % 4 === 0 && //every 4 years condition
        year % 100 != 0 || //divisible by 100 are not leap years condition
        year % 400 === 0) {//unless they are divisible by 400 condition
            return true}
    else {return false}
};

// Do not edit below this line
module.exports = leapYears;
