// Have some number, e.g. 12345.
// Print to console sum of digits of this number (like 1+2+3+4+5)


function digSumm(number) {
    let sum = 0
    let digits = number.toString().split('')

    for (let digit of digits) {
        sum = sum + parseInt(digit)
    }

    return sum
}

let number = 12345
let result = digSumm(number)
console.log(`The sum of digits ${number} equals ${result}`)