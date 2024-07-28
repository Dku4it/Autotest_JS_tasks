// Create an object with the following parameters:
//    country, president, government, ministries, parliament.
//    The elements of object must have a value, some of the elements can be an object too.
// Task:   
// 1 Print to console object in the following format: <element> is <value>
// 2 Print to console only country name
// 3 Set "president" to null in case the country is UK. (do it in function)









const countryInfo = {
    country: 'Ukraine',
    president: 'Zelenskyy',
    government: {
        primeMinister: 'Shmyhal',
        type: 'Parliamentary Republic'
    },
    ministries: ['Ministry of Defense', 'Ministry of Health', 'Ministry of Education'],
    parliament: 'Verkhovna Rada'
}

// Функция для печати всех элементов объекта в формате <element> is <value>
function printObject(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            printObject(obj[key]); // Рекурсивно печатаем вложенные объекты
        } else {
            console.log(`${key} is ${obj[key]}`)
        }
    }
}

// Функция для печати только названия страны
function printCountryName(obj) {
    console.log(`Country name is ${obj.country}`)
}

// Функция для установки президента в null, если страна - UK
function setPresidentToNullIfUK(obj) {
    if (obj.country === 'UK') {
        obj.president = null
    }
}

// Пример использования функций

// Печать всех элементов объекта
printObject(countryInfo)

// Печать только названия страны
printCountryName(countryInfo)

// Установка президента в null, если страна - UK
countryInfo.country = 'UK'
setPresidentToNullIfUK(countryInfo);

// Печать всех элементов объекта после изменения
printObject(countryInfo)
