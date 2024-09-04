const fibonacci = function (index) {
    if (!isNaN(index) && Number.isInteger(Number(index))) {
        index = parseInt(index);
    } else {
        index = -1;
    }
    
    if (index < 0) return "OOPS";
    if (index === 0) return 0;
    if (index === 1 || index === 2) return 1;

    let prev = 1;
    let fib = 1;
    let count = 2;


    while (count != index) {
        let buff = fib;
        fib += prev
        prev = buff;
        count++;
    }

    return fib;
};

fibonacci("0");

// Do not edit below this line
module.exports = fibonacci;
