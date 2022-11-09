{/* <button onclick="myFunction()">Click me</button>; */}
// Every action on a computer is an event. Like when a connection is made or a file is opened.

// Objects in Node.js can fire events, like the readStream object fires events when opening and closing a file:

// Example
// var fs = require('fs');
// var rs = fs.createReadStream('./demofile.txt');
// rs.on('open', function () {
//   console.log('The file is open');
// });

// var events = require('events');
// var eventEmitter = new events.EventEmitter();
// The EventEmitter Object
// You can assign event handlers to your own events with the EventEmitter object.

// In the example below we have created a function that will be executed when a "scream" event is fired.

// // To fire an event, use the emit() method.

// Example
// var events = require('events');
// var eventEmitter = new events.EventEmitter();

// //Create an event handler:
// var myEventHandler = function () {
//   console.log('I hear a scream!');
// }

// //Assign the event handler to an event:
// eventEmitter.on('scream', myEventHandler);

// //Fire the 'scream' event:
// eventEmitter.emit('scream');
// const http = require('http');
// const fs = require('fs');
// const formidable = require('formidable');
// const event = require('events');
// const eventEmitter = new event.EventEmitter()

//creating an eventHandler
// function eventHandler (){
//   http.createServer((req, res) => {
//     if (req.emit === '/fileUpload') {
//       const form = new formidable.IncomingForm();
//       form.parse(req, (err, fields, files) => {
//         console.log(fields);
//         const oldPath = files.login.filepath;
//         const newPath = 'C:UsersNOIBISJUNIORDesktop';
//         fs.rename(oldPath, newPath, (err) => {
//           if (err) {
//             console.log(err);
//           } else {
//             console.log('successsfully submitted');
//             res.write('successfully received your cv');
//             res.end();
//           }
//         });
//       });
//     } else {
//       // res.writeHead(200,'ok',{'content-Type' : 'text/html'})
//       // res.write('<form action= "/fileUpload"  method="post" enctype="multipart/form-data">')
//       // res.write('<input type="file" name="User"> <br/> <br/>')
//       fs.readFile('login.html', 'utf-8', (err, data) => {
//         if (err) {
//           console.log(err);
//         } else {
//           console.log('data');
//           res.write(data);
//           res.end();
//         }
//       });
//     }
//   })
//   .listen(4000, () => {
//     console.log('server is listening on port 4000');
//   });}
// eventEmitter.on('click',eventHandler)
// eventEmitter.emit('click')



