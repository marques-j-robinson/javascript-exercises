const round = function (val) {
    return Math.round(val * 10) / 10
}

const ftoc = function (degF) {
    return round((degF - 32) * 5 / 9)
}

const ctof = function (degC) {
    return round(degC * 9 / 5 + 32)
}

module.exports = {
    ftoc,
    ctof
}
