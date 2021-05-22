const caesar = function (input, shiftFactor) {
    return input
        .split("")
        .map(char => shiftChar(char, shiftFactor))
        .join("");
};

const codeSet = code => (code < 97 ? 65 : 97);
const mod = (n, m) => (n % m + m) % m;

const shiftChar = (char, shiftFactor) => {
    const code = char.charCodeAt();

    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
        return String.fromCharCode(
            mod(code + shiftFactor - codeSet(code), 26) + codeSet(code)
        )
    }
    return char;
}

module.exports = caesar
