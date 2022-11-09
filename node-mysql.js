// const mysql = require('mysql')

// const con = mysql.createConnection({
//   host:'localhost',
//   user:'root',
//   password:'your_new_password',
//   database:'Student'
// })
// con.connect((err) =>{
//   if(err){
//     console.log(err);
//   }
//   else{
//     console.log('connected successfully');
//     // con.query('CREATE DATABASE Student', (err) =>{
//     //   if(err){
//     //     console.log(err);
//     //   }
//     //   else{
//     //     console.log('Database created successfully');
//    //    }
//     con.query("CREATE TABLE studentFiles(name VARCHAR(255),address VARCHAR(255))", (err) => {
// if(err){
//   console.log(err);
// }
// else{
//   console.log('Table created successfully');
// }
//     })
//     }

//   }
// )
//practice
// const database = require('mysql');
// const con = database.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'your_new_password',
//   database: 'Teachers',
// });
// con.connect((err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(' connected succcesssfully');
//      con.query('create database Teachers',(err) => {
//        if(err){
//          console.log(err);
//        }
//       else{
//          console.log('Database has being created successfully');
//        }
//     })
//     con.query(
//       'create table Auth(name varChar(255),email varChar(255))',
//       (err) => {
//         if (err) {
//           console.log(err);
//         } else {
//           console.log('table created successfully');
//         }
//       }
//     );
//     const arr= [
//     ['sarah','sarah123'],
//     ['joy','joy123'],
//     ['bose','bose123']
//     ]
//     const sql =
//       // "INSERT INTO Teachers auth(name,email) VALUES('Abdulsalaamnoibi1' ,'Abdulsalaamnoibi1@gmail.com')";
// "INSERT INTO auth(username,email) VALUES ?"
//     con.query(sql,[arr], () => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log('data inserted successsfully');
//       }
//     });
//   }
// });

//use  this code to avoid sql injections  
// const user = 'john'
// const sql = 'SELECT * FROM auth WHERE username = ' + mysql.escape(user)
// confirm.query(sql,(err,result)=>{
//   if(err){
//     console.log(err);
//   }
//   else{
//     console.log(result);
//   }
// })


const mysql = require('mysql')
const con = mysql.createConnection(
  'mysql://umax3ibphvy05mzt:PC3eqk9AxEXMYhfx9rGo@bwkb5xxkyycw4qko8yzz-mysql.services.clever-cloud.com:3306/bwkb5xxkyycw4qko8yzz'
);
// const con = mysql.createConnection({
//   host:'localhost',
//   user:'root',
//   password:'your_new_password',
//   database: 'store'
// })

con.connect((err) =>{
  if(err){
    console.log(err);
  }
  else{
    console.log('connected successfully');
//   creating a table
      // const sql = 'CREATE TABLE USERS(userName varchar(255), password varchar(255))';
      // con.query(sql, (err) => {
      //   if (err) {
      //     console.log(err);
      //   } else {
      //     console.log('table created');
      //   }
      // });

    //inserting the data
    //   const sql = "INSERT INTO USERS(userName,password) VALUES ('NOIBI','NOIBI123')"
    // con.query(sql,(err,result) => {
    //   if(err)throw err
    //   console.log(result);
    // })

    //inserting multiple data
    // const arr =[
    //   ['abdulSalaam','abdul123'],
    //   ['kolas','kolas123'],
    //   ['Adefajo','Ade123'],
    //   ['Adetunji','tunji123'],
    //   ['korede','korede123']
    // ]
    // const sql = "INSERT INTO USERS(userName,password) VALUES ?"
    // con.query(sql,[arr],(err,result) => {
    //   if(err) throw err
    //   console.log(result);
    // })

    //Adding the columns in the table
    // const sql = "ALTER TABLE USERS ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY"
    // con.query(sql,(err,result) =>{
    //   if(err)throw err
    //   console.log(result);
    // })

    //selecting  all item from the table
    // const sql = 'SELECT * FROM USERS'
    // con.query(sql,(err,result) => {
    //   if(err)throw err
    //   console.log(result);
    // })

    //selecting a particular item in a table
    // const sql = 'SELECT userName FROM USERS'
    // con.query(sql,(err,result) => {
    //   if(err)throw err
    //   console.log(result);
    // })

    //selecitng using where
    // const sql = "SELECT * FROM users WHERE userName LIKE 'ko%'"
    // con.query(sql,(err,result) => {
    //   if(err)throw err
    //   console.log(result);
    // })

    // use  this code to avoid sql injections
    // const user = 'john'
    // const sql = 'SELECT * FROM auth WHERE username = ' + mysql.escape(user)
    // confirm.query(sql,(err,result)=>{
    //   if(err){
    //     console.log(err);
    //   }
    //   else{
    //     console.log(result);
    //   }
    // })

    //OR
    //

    //sorting the items by id in the table
    // const sql = 'SELECT * FROM USERS ORDER BY id';
    // con.query(sql,(err,result) =>{
    //   if(err)throw err
    //   console.log(result);
    // })

    //or sort by userNames
    // const sql = 'SELECT * FROM USERS ORDER BY userName';
    // con.query(sql, (err, result) => {
    //   if (err) throw err;
    //   console.log(result);
    // });

    //Deleting a table
    // var sql = "DELETE FROM USERS WHERE userName = 'Abdulsalaam'";
    // con.query(sql,  (err, result)  => {
    //   if (err) throw err;
    //   console.log('Number of records deleted: ' + result.affectedRows);
    //   console.log(result);
    // });

    //updating  the  single columns in a table
    // const sql = "UPDATE USERS SET userName = 'Fawwaz' WHERE userName = 'Adefajo'"
    // con.query(sql,(err,result) => {
    //   if(err) throw err
    //   console.log(result);
    // })
    // UPDATE newpurchase
    // SET receive_qty=20,pub_lang='Hindi',receive_dt='2008-07-10'
    // WHERE purch_price>50;
    //updating multiple columns
    // const sql =
    //   "UPDATE USERS SET userName = 'Lawal',userName = 'Lawal' WHERE userName = 'Adetunji'";
    // con.query(sql, (err, result) => {
    //   if (err) throw err;
    //   console.log(result);
    // });

    //Adding the rows in the table
    
  }
})