//uploading a file using the post method


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
//practice cont
const http = require('http')
const fs = require('fs')
const formidable = require('formidable')

http.createServer((req,res) => {
if(req.url === '/resultUpload'){
  const form = new formidable.IncomingForm()
  form.parse()

}
else{
  res.writeHead(201,'getting files',{'content-head' : 'text/html'})
  res.write('<form action="/resultUpload" method = "post"  enctype = "multipart/text">')
  res.write('<input type="file" name="result"> <br/> <br/>')
  res.write('<input type="submit">')
  res.end()
}
}).listen(5000,()=>{
  console.log('server is listening on port 5000');
})


































