const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const sum = function (arr) {
    return arr.reduce((acc, i) => acc + i, 0)
};

const multiply = function (arr) {
    return arr.reduce((acc, i) => acc * i, 1)
};

const power = function (a, b) {
    let total = 1
    while (b > 0) {
        total *= a
        b--
    }
    return total
};

const factorial = function (num) {
    if (num < 0) {
        return -1
    } else if (num === 0) {
        return 1
    } else {
        return (num * factorial(num - 1))
    }
};

module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial
};
