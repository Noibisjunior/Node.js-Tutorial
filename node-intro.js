// Here is how Node.js handles a file request:
// node is a runtime environment where js is used on the backend
//creating a server
// Sends the task to the computer's file system.
// Ready to handle the next request.
// When the file system has opened and read the file, the server returns the content to the client.
// Node.js eliminates the waiting, and simply continues with the next request.

// Node.js runs single-threaded, non-blocking, asynchronous programming, which is very memory efficient.


// What Can Node.js Do?

// Node.js can generate dynamic page content
// Node.js can create, open, read, write, delete, and close files on the server
// Node.js can collect form data
// Node.js can add, delete, modify data in your database

// What is a Node.js File?

// Node.js files contain tasks that will be executed on certain events
// A typical event is someone trying to access a port on the server
// Node.js files must be initiated on the server before having any effect
// Node.js files have extension ".js"

// What is a Module in Node.js?
// Consider modules to be the same as JavaScript libraries.

// A set of functions you want to include in your application.
//using the customized modules

var http = require('http');
var dt = require('./module'); //using the created module

http
  .createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('The date and time are currently: ' + dt.myDateTime());
    res.end();
  })
  .listen(8080);
