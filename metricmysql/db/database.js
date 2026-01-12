const mysql2 = require("mysql2");

const myDB = new mysql2.createConnection({
    host:"localhost",
    user:"root",
    port:3306,
    password:"Root@123",
    database:"metric"
});

myDB.connect((err)=>{
    if(err){
        console.error("Mysql not run",err);
    }
    else{
        console.log("Mysql database connected succefully..!");
    }
});

module.exports = myDB;