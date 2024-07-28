



// Разобраться






// Функция A для возвращения суммы всех элементов массива
function sumOfArray(arr) {
    return arr.reduce((acc, val) => acc + val, 0);
}

// Функция B для возвращения суммы четных элементов массива с использованием callback
function sumOfEvenElements(arr, callback) {
    const evenElements = arr.filter(num => num % 2 === 0);
    return callback(evenElements);
}

// Первый вариант callback-функции для получения суммы
function sumCallback(arr) {
    return arr.reduce((acc, val) => acc + val, 0);
}

// Второй вариант callback-функции для получения суммы с дополнительной логикой (например, умножение на 2)
function sumWithMultiplierCallback(arr) {
    return arr.reduce((acc, val) => acc + (val * 2), 0);
}

// Пример использования функций
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Используем функцию A для получения суммы всех элементов массива
let totalSum = sumOfArray(array);
console.log('Сумма всех элементов массива: ' + totalSum);

// Используем функцию B с первым вариантом callback для получения суммы четных элементов массива
let evenSum = sumOfEvenElements(array, sumCallback);
console.log('Сумма четных элементов массива: ' + evenSum);

// Используем функцию B со вторым вариантом callback для получения суммы четных элементов массива с умножением на 2
let evenSumWithMultiplier = sumOfEvenElements(array, sumWithMultiplierCallback);
console.log('Сумма четных элементов массива (умноженных на 2): ' + evenSumWithMultiplier);
