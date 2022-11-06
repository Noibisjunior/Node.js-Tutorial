// const nodemailer = require('nodemailer');

// const transport = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'Abdulsalaamnoibi1@gmail.com',
//     pass: 'mxivpkhpjtydavvj', //follow the 2-step-verification process to get the password
//   },
// });

// const mailOptions = {
//   from: 'Abdulsalaamnoibi1@gmail.com',
//   to:'noibisjunior22@gmail.com',
//   subject:'welcome to Noibisdev',
//   text:'we welcome you to our company'
// }

// transport.sendMail(mailOptions,(err,info) => {
//   if(err){
//     console.log(err);
//   }
//   else{
//     console.log('please check,we just sent you an email' + info.response);
//   }
// })
const mysql = require('mysql')

const con = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'your_new_password',
  database:'Student'
})
con.connect((err) =>{
  if(err){
    console.log(err);
  }
  else{
    console.log('connected successfully');
    // con.query('CREATE DATABASE Student', (err) =>{
    //   if(err){
    //     console.log(err);
    //   }
    //   else{
    //     console.log('Database created successfully');
   //    }
    con.query("CREATE TABLE studentFiles(name VARCHAR(255),address VARCHAR(255))", (err) => {
if(err){
  console.log(err);
}
else{
  console.log('Table created successfully');
}
    })  
    }

  }
)
