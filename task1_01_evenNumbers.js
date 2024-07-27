// Have an array 1..10.
// Print to console even numbers (use different ways);



// First way - result as String

function getEven(arr) {
    let str = ''
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] % 2) === 0) {
            str = str + ' ' + arr[i]
        }
    }
    return str
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log('Have an array: ' + arr)

const str = getEven(arr)
console.log('Even numbers: ' + str)



// // Second way - result as Array

// function createArray() {
//     let arr = []
//     for (let i = 0; i < 10; i++) {
//         arr[i] = Math.round(Math.random() * 99)
//     }
//     return arr
// }

// function getEven(arr) {
//     let str = []
//     for (let i = 0; i < arr.length; i++) {
//         if ((arr[i] % 2) === 0) {
//             str.push(arr[i])
//         }
//     }
//     return str
// }

// const arr = createArray()

// console.log('Have an array: ' + arr)
// console.log('Even numbers: ' + getEven(arr))
