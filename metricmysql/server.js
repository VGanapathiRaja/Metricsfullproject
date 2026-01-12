const express = require("express");
const cors = require("cors");
const Dbschema = require('./metricmodal/database');
const PORT = 4001;

//front end set 
const app = express();
app.use(cors());
app.use(express.json());
//backend set 

app.get('/',(req,res)=>{
    res.send("hello world backend ready to to reacive the data from Frond end");
    res.end();
})

app.post("/Subscribes",async(req,res)=>{
    const {semail} = req.body;
    const fData = {semail};
    console.log(fData);
    try{
        if(!semail){
            alert("Please fill the data in front end");
            return res.status(404).json({Error: "Cleint Error 404"});
        }
        else{
            const sqlquery = `insert into Subscribe(sgmail) values(?)`;
            Dbschema.query(sqlquery,[semail],(err,d)=>{
                if(err){
                    console.error(err);
                }
                else{
                    console.log(d);
                    return res.status(200).json({Message:"Data stored done 200"});
                }
            })
        }
    }
    catch(err){
        if(err){
            console.error(err);
            return res.status(500).json({Error: "Server error 505"});
        }
    }
})

//deployemnet set
app.listen(PORT,(err)=>{
    if(err){
        console.error(err);
    }
    else{
        console.log(`Server Running on POrt ${PORT}`);
    }
});