const reverseString = function (input) {
    if (!(typeof input === 'string' || input instanceof String)) {
            // error
    }

    let result = ''

    for (let i = String(input).length - 1; i >= 0; i--) {
        result += String(input).charAt(i);
    }
    return result;
};

console.log(reverseString('this is a test'));

// Do not edit below this line
module.exports = reverseString;
