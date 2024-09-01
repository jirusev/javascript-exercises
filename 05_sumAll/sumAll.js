const sumAll = function (lower, uppper) {
    if (!Number.isInteger(lower)
        || !Number.isInteger(uppper)
        || lower < 0
        || uppper < 0) {
        return 'ERROR';
    }

    if (lower > uppper) {
        lower += uppper;
        uppper = lower - uppper;
        lower -= uppper;
    }

    let sum = 0;


    for (; lower <= uppper; lower++) {
        sum += lower;
    }

    return sum;
};

console.log(sumAll(12, 10));

// Do not edit below this line
module.exports = sumAll;
