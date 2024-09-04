const palindromes = function (input) {
    input = input.toLowerCase();
    input = removePunctuation(input);
    input = input.replace(/\s+/g, '');
    let start = 0;
    let end = input.length - 1;


    while (start !== end && start < end) {
        if (input[start++] !== input[end--]) {
            return false;
        }
    }

    return true;
};

function removePunctuation(str) {
    return str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  }


// Do not edit below this line
module.exports = palindromes;
