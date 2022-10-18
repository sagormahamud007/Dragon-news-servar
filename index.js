const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())

const categories = require('./data/categories.json')

app.get('/news-categories', (req, res) => {
    res.send(categories)
})


app.get('/', (req, res) => {
    res.send('News API running')
})

app.listen(port, () => {
    console.log(`api running the port number ${port}`);
})