const isPositive = function (val) {
    return val >= 0
}

const isNumber = function (val) {
    return typeof val === 'number'
}

const sumAll = function (a, b) {
    // Error Handling
    if (!isPositive(a) || !isPositive(b) || !isNumber(a) || !isNumber(b)) {
        return 'ERROR'
    }
    // Prep Nums
    const min = Math.min(a, b)
    const max = Math.max(a, b)
    // Iterate and Add
    let sum = 0
    let i = min
    while (i <= max) {
        sum += i
        i++
    }
    return sum
}

module.exports = sumAll
