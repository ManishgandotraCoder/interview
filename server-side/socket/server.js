const express = require('express')
const app = express();

app.get('/', (req, res) => res.send('Socket started!'))

app.listen(4002, function () {
    console.log('Server started at port 4002')
})