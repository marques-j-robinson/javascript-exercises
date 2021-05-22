const now = new Date()
const curyear = now.getFullYear()
function getAge({yearOfBirth, yearOfDeath = curyear}) {
    return yearOfDeath - yearOfBirth
}

let findTheOldest = function (people) {
    const res = people.map(p => {
        p.age = getAge(p)
        return p
    })
    res.sort((a, b) => b.age - a.age)
    return res[0]
}

module.exports = findTheOldest
