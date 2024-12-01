const leapYears = function(year) {
    let divideBy4 = year%4===0
    let divideBy100 = year%100===0
    let divideBy400 = year%400===0
    if (divideBy4 && (!divideBy100||divideBy400)){ 
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
