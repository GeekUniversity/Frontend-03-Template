const http = require('http')

http.createServer((request,response) => {
    let body =[]
    request.on('error',(err)=>{
        console.error(err);
    }).on('data',(chunk)=>{
        body.push(chunk.toString())
    }).on('end',()=>{
        body.Buffer.contact(body).toString()
        console.log('body',body);
        response.writeHead(200,{'content-type':'text/html'})
        response.end('hello server \n')
    })
}).listen(8089)
console.log('serve started');
