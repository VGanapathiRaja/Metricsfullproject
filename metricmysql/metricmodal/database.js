const mysql2 = require("mysql2");

const myshecma = new mysql2.createConnection({
    host:"localhost",
    user: "root",
    password:"Root@123",
    port:3306,
    database:"metrics"
});

myshecma.connect((err)=>{
    if(err){
        console.error(err);
    }
    else{
        console.log("my mysql server connected successfully..!");
    }
});

module.exports = myshecma;