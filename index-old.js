


const http = require('http');




http.createServer( (req , res)=>{

res.write('hola mundo');
res.end();


}).listen(8018);

console.log('escuchando en el puerto 8018');