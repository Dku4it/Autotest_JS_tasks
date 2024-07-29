// create a function, that takes a directory name as argument and return file names in callback
















const fs = require('fs')
const path = require('path')

function getFiles(directory, callback) {
    fs.readdir(directory, (err, files) => {
        if (err) {
            return callback(err, null) // Возвращаем ошибку в callback
        }
        callback(null, files) // Возвращаем массив файлов в callback
    })
}

// Пример использования функции
const directoryPath = path.join(__dirname, 'Files') // Замените на путь к вашей директории

getFiles(directoryPath, (err, files) => {
    if (err) {
        return console.error('Error reading directory:', err)
    }
    console.log('Files:', files)
})
