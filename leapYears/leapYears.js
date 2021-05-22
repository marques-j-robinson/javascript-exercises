const checkDivisibleBy = function (year, int) {
    return year % int === 0
}

const leapYears = function (year) {
    if (!checkDivisibleBy(year, 4)) {
        return false
    }
    if (checkDivisibleBy(year, 100) && !checkDivisibleBy(year, 400)) {
        return false
    }
    return true
}

module.exports = leapYears
