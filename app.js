const http = require('http');

const serevr = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Wlecome to Our Home page')
    }
    if (req.url === '/about') {
        //BLOCKING CODE 
        for (let i = 0; i < 1000; i++) {
            for (let j = 0; j < 1000; j++) {
                console.log(`${i} ${j}`)
            }
        }
        res.end('Here is about page');
    }
    res.end('Error page')
})

serevr.listen((5000), () => {
    console.log(`Server was listening in the port 5000`)
})