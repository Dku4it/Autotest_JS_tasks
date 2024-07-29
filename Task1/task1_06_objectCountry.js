// Create an object with the following parameters:
//    country, president, government, ministries, parliament.
//    The elements of object must have a value, some of the elements can be an object too.
// Task:   
// 1 Print to console object in the following format: <element> is <value>
// 2 Print to console only country name
// 3 Set "president" to null in case the country is UK. (do it in function)


const countryInfo = {
    country: 'Ukraine',
    president: 'Zelensky',
    government: {
        primeMinister: 'Shmyhal',
        type: 'Parliamentary Republic'
    },
    ministries: ['Ministry of Defense', 'Ministry of Health', 'Ministry of Education']
}

// Print all elements of Object <element> is <value>
function printObject(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            printObject(obj[key]) // Print included Object
        } else {
            console.log(`${key} is ${obj[key]}`)
        }
    }
}

// President is null for UK
function setPresidentToNullIfUK(obj) {
    if (obj.country == 'UK') {
        obj.president = null
        printObject(countryInfo)    // Print all elements of object after changes
    }
}

printObject(countryInfo)    // Print all elements of object
console.log('---------------')

console.log(`Country name is ${countryInfo.country}`)   // Print Country Name only
console.log('---------------')

setPresidentToNullIfUK(countryInfo)     // Is President null
