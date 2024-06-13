var mysql = require ('mysql');
var db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    port:3307,
    database:'quan_ly_du_an'
});
db.connect(err=>{
    if(err) throw err;
    console.log('Đã kết nối Database !')
});
module.exports = db;