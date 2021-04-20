const http = require('http');

http.createServer((req,res)=>{
    res.write("server sarted at 9000");
    res.end
}).listen(9001);