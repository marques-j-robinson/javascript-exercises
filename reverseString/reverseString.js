const reverseString = function (input) {
    res = ''
    for (let i = input.length - 1; i >= 0; i--) {
        res = res + input[i]
    }
    return res
};

module.exports = reverseString;
