const repeatString = function (litheral, numberRepeat) {
    if (numberRepeat < 0) {
        return "ERROR";
    }
    let buff = '';
    for (let i = 0; i < numberRepeat; i++) {
        buff += litheral;
    }

    return buff;
};

console.log(repeatString("test", 2));

// Do not edit below this line
module.exports = repeatString;
