//creating a file using the file system module
const file = require('fs') 
file.writeFile('new.html','Javascript is dynamic',(err) =>{
    if(err){
        console.log(err);
    }
    else{
        console.log('file has being created successfully');
    }
})

//reading a file
file.readFile('new.html','utf-8',(err,data) => {
    console.log(data);
})

//appending/updating the file 
file.appendFile('new.html','and interesting to learn',(err) => {
if(err){
    console.log(err);
}
else{
    console.log('file updated successfully');
}
})

//deleting the file
// fs.unlink('index.text', (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     ('this file has being deleted');
//   }
// })

//renaming a file
//fs.rename('summer.js','node.js',(err) => {
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('successfully renamed a file');
//     }
//  })

//reading a file on a server
//fs.readFile('react.html', 'utf-8', (err, data) => {
//   console.log(data);
//   server
//     .createServer((req, res) => {
//       res.write(data);
//       res.end();
//     })
//     .listen(7000, () => {
//       console.log('server is listening on port 7000');
//     });
// });

//Today's class
// const http = require('http')
// const url = require('url')
// const fs = require('fs')

// http.createServer((req,res) => {
//   if(req.url !== ''){
// const path = url.parse(req,true)
// console.log(path);
// const filename = '.' + path.path

// fs.readFile (filename,(err,data) => {
//   if(err){
//     console.log('page not found');
//     res.write('page not found')
//     res.end()
//   }
//   else{
//     res.write(data)
//     res.end()
//   }
// }).listen(3000,() => {
//   console.log('listening on port 3000');
// })


// const http = require ('http')
// const fs = require('fs')
// const formidable = require('formidable')

// http.createServer((req,res) => {
// if(req.url === "/fileUpload"){
//   const form = new formidable.IncomingForm()
//   form.parse(req,(err,fields,files) => {
// //  console.log(files);
// const oldPath = files.User.filepath
// const newPath = 'C:/Users/NOIBISJUNIOR/Desktop' + 'file from frontend'
// fs.rename(oldPath,newPath,(err) => {
//   if(err){
//     console.log(err);
//   }
//   else{
//     console.log('successsfully submitted');
// res.write('successfully received your cv')
// res.end()
//   }
// })   
//   })
// }
// else{
//   res.writeHead(200,'ok',{'content-Type' : 'text/html'})
//   res.write('<form action= "/fileUpload"  method="post" enctype="multipart/form-data">')
//   res.write('<input type="file" name="User"> <br/> <br/>')
//   res.write('<input type="submit">')
//   res.end()
// }
// }).listen(4000,() => {
//   console.log('server is listening on port 4000');
// })