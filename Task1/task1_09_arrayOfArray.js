// Create a function, which will take an array of array of numbers, 
// and return an array of max digits from each sub-array.


function maxDigitsFromSubArrays(arr) {
    // Применяем map для создания нового массива, содержащего максимальные значения из каждого подмассива
    return arr.map(subArray => {        
        return Math.max(...subArray)    // max from subarray
    })
}

const input = [
    [1, 2, 3],
    [10, 20, 30],
    [5, 15, 25],
    [7, 21, 14]
]

const result = maxDigitsFromSubArrays(input)
console.log(result) // Expected result: [3, 30, 25, 21]
