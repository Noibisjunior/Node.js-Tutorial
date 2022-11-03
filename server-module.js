//creating a server using a http module
const server = require('http')//creating the server
server.createServer((req,res) => {
res.writeHead(200,'ok',{'content-type': 'text/html'})
res.write('Node.js is interesting to learn')
res.end()
}).listen(3000,() =>{
    console.log('server is listening on port 3000');
})