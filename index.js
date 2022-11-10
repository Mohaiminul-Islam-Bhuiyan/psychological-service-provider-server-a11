const express = require('express')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 5000;

// middlewire
app.use(cors())

app.get('/', (req, res) => {
    res.send('shuvro server is running')
})

app.listen(port, () => {
    console.log('Shuvro server is running on : ', port);
})