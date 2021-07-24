const express = require('express')
const path = require('path')
const app = express()
const port = 3000

// write own middleware
// const zaryabMiddleware = (req, res, next) => {
//     console.log(req)
// }

// middle ware
app.use(express.static(path.join(__dirname, "public")))
// app.use(zaryabMiddleware)

app.get('/hello', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    // res.sendFile(path.join(__dirname, 'index.html'))
    res.json({"zaryab": 23})
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
