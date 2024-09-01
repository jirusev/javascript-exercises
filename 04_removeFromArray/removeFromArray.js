const removeFromArray = function (input, ...args) {
    for (let i = 0; i < args.length; i++) {
        input = input.filter(x => x !== (args[i]));
    }

    return input;
};


console.log(removeFromArray([1, 2, 3, 4], 2,1));

// Do not edit below this line
module.exports = removeFromArray;
