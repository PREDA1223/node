// const http = require("http")


// const server = http.createServer((req, res) => {
// res.writeHead(404, {'Content-Type' : 'type/plain'});
// res.end('Hello world')
// })

// server.listen(3000, () => {
//     console.log('Server running at http://localhost:3000/');
// })

const fs = require("fs");

fs.readFile('index.txt', function (err, data) {
//this is the callBack function
   if (err) return console.error(err);
   console.log(data.toString());
});

console.log("program Ended");
