const repeatString = function (input, loopMax) {
    if (loopMax < 0) {
        return 'ERROR'
    }
    let res = ''
    let count = 0
    while (count < loopMax) {
        res = res + input
        ++count
    }
    return res
};

module.exports = repeatString;
