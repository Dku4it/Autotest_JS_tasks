// using node 'fs' module, read directory in async function and:
//          print to console array of files;
//          print file names with empty content;
















const fs = require('fs').promises
const path = require('path')

async function processDirectory(directory) {
    try {
        // 1. read directory
        const files = await fs.readdir(directory)
        
        // 2. print array of files
        console.log('Array of files:', files)
        
        // 3. Print filenames of empty files
        for (const file of files) {
            const filePath = path.join(directory, file)
            const content = await fs.readFile(filePath, 'utf8')
            if (content == '') {
                console.log('Empty file:', file)
            }
        }
    } catch (error) {
        console.error('Error reading directory:', error)
    }
}



const directoryPath = './Task3/Files'
processDirectory(directoryPath)
