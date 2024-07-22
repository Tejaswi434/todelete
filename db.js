const mysql=require('mysql2/promise')

const mysqlConnection=mysql.createPool({
    host:"127.0.0.1",
    port:"3306",
    user:"root",
    password:"M1racle@123",
    database:"itgdb"
})

module.exports=mysqlConnection 