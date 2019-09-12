// var person = require('./person.js')
// // console.log("Welcome to NodeJS" + person.firstname)
// new person("Jessavel", "Toring").greet();

var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080




