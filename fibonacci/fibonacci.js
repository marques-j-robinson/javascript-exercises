function fib(num) {
    if (num <= 1) return 1
    return fib(num - 1) + fib(num - 2)
}

const fibonacci = function (num) {
    if (num < 0) {
        return 'OOPS'
    }
    return fib(num - 1) // subtract 1 due to finding the sequence and that being 0 based
}

module.exports = fibonacci;
