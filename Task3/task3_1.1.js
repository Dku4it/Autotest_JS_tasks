const fs = require('fs').promises
const path = require('path')

async function processDirectory(directory) {
    try {
        // 1. Прочитать содержимое директории
        const files = await fs.readdir(directory)
        
        // 2. Напечатать массив файлов
        console.log('Array of files:', files)
        
        // 3. Напечатать имена файлов с пустым содержимым
        for (const file of files) {
            const filePath = path.join(directory, file)
            const content = await fs.readFile(filePath, 'utf8')
            if (content === '') {
                console.log('Empty file:', file)
            }
        }
    } catch (error) {
        console.error('Error reading directory:', error)
    }
}



const directoryPath = './Task3'
processDirectory(directoryPath)
