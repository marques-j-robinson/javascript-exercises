const removeFromArray = function () {
    const list = arguments[0]
    const res = list.filter(i => {
        let shouldAdd = true
        for (let j = 1; j <= arguments.length; j++) {
            if (i === arguments[j]) {
                shouldAdd = false
            }
        }
        return shouldAdd
    })
    return res
}

module.exports = removeFromArray
