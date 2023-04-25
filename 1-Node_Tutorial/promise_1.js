
const { readFile,writeFile } = require('fs')
const util =requir('util');
const readFilePromise = util.Promisify(readFile);
const writeFilePromise = util.Promisify(writeFile);
const start = async () => {
    try {
        const first = await gettext('./content/first.txt');
        const second = await gettext('./content/second.txt');
        console.log(first, second)
    }
    catch (error) {
        console.log(error);
    }

}

start()

// gettext = (path) => {
//     //     return new Promise((resolve, reject) => {
//     //         readFile(path, 'utf8', (error, data) => {
//     //             if (error) {
//     //                 reject(error)
//     //             }
//     //             resolve(data)
//     //         })
//     //     })
//     // }
    