function isLower(letter) {
    return letter.match(/([a-z])/)
}

const snakeCase = function (phrase) {
    if (isLower(phrase[0])) {
        phrase = phrase.replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    }
    const re = /([\w]*)/gi
    const match = phrase.match(re)
    return match
        .filter(i => i)
        .map(i => i.toLowerCase())
        .join('_')
}

module.exports = snakeCase
