const express = require("express");
const cors = require("cors");
// const mysql2 = require("mysql2");
const PORT = 4000;
const mySchema = require("./db/database");

const server = express();
server.use(cors());
server.use(express.json());

server.get("/",(req,res)=>{
    res.send("hello world backend is running ready to recive the data from front ent..!");
    res.end();
})

server.post("/teamform",async(req,res)=>{
    try{
        const {cName,cEmail,cMobile,cComments} = req.body;
        const fData = {cName,cEmail,cMobile,cComments};
        console.log(fData);
        if(!cName || !cEmail || !cMobile || !cComments){
            console.log("please fill the data in front end,data not coming from front end");
            return res.status(400).json({Error:"client Error 404"});
        }
        else{
            const mysqlquery = `insert into metricclinet(cName,cEmail,cMobile,cComments) values(?,?,?,?)`;
            mySchema.query(mysqlquery,[cName,cEmail,cMobile,cComments],(e,s)=>{
                if(e){
                    // if(e)throw e;
                    console.error("db connection error",e);
                }
                else{
                    console.log("data saved in db",s);
                    return res.status(200).json({Messages:"data saved in Db"});
                }
            })

        }
    }
    catch(err){
        if(err){
            console.log("server error backend not run",err);
            return res.status(500).json({Error:"server erro 505"});
        }
    }
});

server.listen(PORT,(err)=>{
    if(err){
        console.error("server not connect",err);
    }
    else{
        console.log(`server is running in the port ${PORT}`);
    }
});