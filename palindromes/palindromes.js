const punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'

function serialize(word) {
    return word
        .toLowerCase()
        .replace(/\s/g, '')
        .split('')
        .filter(letter => {
            return punctuation.indexOf(letter) === -1
        })
        .join('')
}

function flip(word) {
    const split = word.split('')
    const revArr = split.reverse()
    const join = revArr.join('')
    return join
}

const palindromes = function (word) {
    const serializeWord = serialize(word)
    return serializeWord === flip(serializeWord)
}

module.exports = palindromes
