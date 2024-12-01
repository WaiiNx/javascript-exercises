const sumAll = function(number1, number2) {
    if (number1 < 0 || number2 < 0 || Number.isInteger(number1) == false || Number.isInteger(number2) == false) return "ERROR"
    let result = 0
    if (number1<number2) {
    for (let i = number1; i<=number2;i++){
        result = i+result;
    }
} else{
    for (let i = number2; i<=number1;i++){
        result = i+result;
    }
}
    return result
};

// Do not edit below this line
module.exports = sumAll;
