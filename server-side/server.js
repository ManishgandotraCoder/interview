const gateway = require('fast-gateway')
const server = gateway({
    routes: [{
        prefix: '/socket/',
        target: 'http://localhost:4001'
    },
    {
        prefix: '/api/v1/',
        target: 'http://localhost:4002'
    }]
})

server.get('/', (req, res) => res.send('Main!'))

server.start(4000 , function () {
    console.log("server started at port 4000")    
})