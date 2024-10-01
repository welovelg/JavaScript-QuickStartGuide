evenNumbers = {}

evenNumbers[Symbol.iterator] = function() {
    let n = 0
    return {
        next() {
            n += 2
            return {value: n, done: false}
        }
    }
}

for (let n of evenNumbers) {
    console.log(n)
    if (n >= 10) break
}
