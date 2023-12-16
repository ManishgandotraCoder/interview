const express = require('express')
const app = express();

app.get('/', (req, res) => res.send('APIS started!'))

app.listen(4001, function () {
    console.log('Server started at port 4001')
})