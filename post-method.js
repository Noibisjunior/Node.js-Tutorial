//uploading a file using the post method


// const http = require ('http')
// const fs = require('fs')
// const formidable = require('formidable')

// http.createServer((req,res) => {
// if(req.emit === "/fileUpload"){
//   const form = new formidable.IncomingForm()
//   form.parse(req,(err,fields,files) => {
//  console.log(fields);
// const oldPath = files.login.filepath
// const newPath = 'C:\Users\NOIBISJUNIOR\Desktop';
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
//   // res.writeHead(200,'ok',{'content-Type' : 'text/html'})
//   // res.write('<form action= "/fileUpload"  method="post" enctype="multipart/form-data">')
//   // res.write('<input type="file" name="User"> <br/> <br/>')
//   });
   
// }
// }).listen(4000,() => {
//   console.log('server is listening on port 4000');
// })
//practice cont'd
const http = require('http')
const fs = require('fs')
const formidable = require('formidable')

http.createServer((req,res) => {
if(req.url === '/Submit'){
  const form = new formidable.IncomingForm()
  form.parse(req,(err,fields,files) => {
    console.log(files);
    const oldPath = 'files.user.filepath'
    const newPath = 'C:\Users\NOIBISJUNIOR\Desktop';  //files.user.originalFilename;

    fs.rename(oldPath,newPath,() => {
      if(err){
        console.log(err);
      }
      else{
        console.log('succcessfully submitted the file');
        res.write('your file has being submitted successfully')
        res.end()
      }
    })
  })
}
else{
  res.writeHead(200,'ok',{'content-type' : 'text/html'})
  res.write("<form action = '/Submit' method='post' enctype = 'multipart/form-data'>")
  res.write("<input type='file' name='user'> <br/> <br/>")
  res.write("<button type='Submit'> Submit </button>")
  res.end()
}
}).listen(7000,() => {
  console.log('Server is listening on port 7000');
})












