const fibonacci = function(number1) {
    let referenceNumber = parseInt(number1);
    if (referenceNumber < 0) return "OOPS";
    if (referenceNumber === 1) return 1;
    let firstNumber = 0, secondNumber = 1; result = 0;
    for (let i = 1; i < referenceNumber; i++){
        result = firstNumber + secondNumber;
        firstNumber = secondNumber;
        secondNumber = result;
    }
    return result;
};

// Do not edit below this line
module.exports = fibonacci;
