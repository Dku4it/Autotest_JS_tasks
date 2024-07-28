

// Error parsing JSON data


const fs = require('fs');
const path = require('path');

function readFileAndProcess(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return console.error('Error reading file:', err);
        }

        try {
            const jsonData = JSON.parse(data); // Преобразуем содержимое файла в объект
            console.log('File content as object:', jsonData);

            // Проверяем, есть ли массив городов в объекте
            if (Array.isArray(jsonData.cities)) {
                const longNamedCities = jsonData.cities.filter(city => city.length >= 6);
                console.log('Cities with names length >= 6:', longNamedCities);
            } else {
                console.error('No "cities" array found in file content.');
            }
        } catch (parseError) {
            console.error('Error parsing JSON data:', parseError);
        }
    });
}

// Пример использования функции
const filePath = path.join(__dirname, 'Files', 'file_12'); // Замените на путь к вашему файлу 'file_12'
readFileAndProcess(filePath);