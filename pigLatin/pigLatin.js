const vowels = 'aeiou'

function isVowel(letter) {
    return vowels.includes(letter)
}

function specialCase(word) {
    return word[0] !== 'u' && word[word.length - 1] !== 'q'
}

function pigLatin(phrase) {
    const words = phrase.split(' ')
    return words.map(w => {
        let word = w
        if (!isVowel(word[0])) {
            let exit = false
            while (!exit) {
                const letters = word.split('')
                letters.push(letters.shift())
                word = letters.join('')
                if (isVowel(word[0]) && specialCase(word)) {
                    exit = true
                }
            }
        }
        return word + 'ay'
    }).join(' ')
}


module.exports = pigLatin
