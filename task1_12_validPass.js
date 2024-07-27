// Validate a password to make sure it meets the following criteria:
// At least six characters long
// Contains a lowercase letter
// Contains an uppercase letter
// Contains a number
// Valid passwords will only be alphanumeric characters.

let pass = '  d1555A  '
pass = pass.trim()

let sixChar = pass.length > 5
let lowerCase = /[a-z]/.test(pass)
let upperCase = /[A-Z]/.test(pass)
let numbers = /\d/.test(pass)
let alphaNum = /^[a-zA-Z0-9]+$/.test(pass)

function errorus() {
    !sixChar && console.log('Password must be at least 6 characters long')
    !lowerCase && console.log('Password must contain at least one lowercase letter')
    !upperCase && console.log('Password must contain at least one uppercase letter')
    !numbers && console.log('Password must contain at least one digit')
    !alphaNum && console.log('Password can only contain English letters and didgits')
}

sixChar && lowerCase && upperCase && numbers && alphaNum ? console.log('Your Password is secure') : errorus()
