/*creating server using nodejs*/
const http = require('http');

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * 
    function listener(req, res){
        console.log(req)
    }
    const server = http.createServer(listener)
    or
    const server = http.createServer(function(req, res){console.log(req)})
    or
    const server = http.createServer((req, res)=>{console.log(req)})
 */

const server = http.createServer((req, res)=>{console.log(req)})

server.listen(3000)

