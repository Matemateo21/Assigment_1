const data = require('./instruments.json')
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/instruments', (req, res) => {
    res.json(data)
})
app.listen(port, () => console.log(`Listening on port ${port}....`)) 


// http://localhost:3000/instruments
// 192.168.0.39:3000/instruments