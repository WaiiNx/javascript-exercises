const palindromes = function (str) {
    // remove unwated character
    var re = /[\W_]/g;
    // turn string to lowercase
    var lowRegStr = str.toLowerCase().replace(re, '');
    // split the string, reverse it, and join it again
    var reverseStr = lowRegStr.split('').reverse().join('');
    // check if the reversed string is the same as the lowercase string 
    return reverseStr === lowRegStr;
};

// Do not edit below this line
module.exports = palindromes;
