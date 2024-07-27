// Have string '1 22 333 4444 22 5555 1'
// Remove all substrings, where count of symbols >3


function rmvLong(inputString) {

    let substrings = inputString.split(' ')
    
    let filteredSubstrings = substrings.filter(substring => substring.length <= 3)
    
    let resultString = filteredSubstrings.join(' ')

    return resultString
}

const inputString = '1 22 333 4444 22 5555 1'
let result = rmvLong(inputString)
console.log(result)
