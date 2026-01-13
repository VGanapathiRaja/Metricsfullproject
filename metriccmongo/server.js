const express = require("express");
const cors = require("cors");
const {default:mongoose} = require("mongoose");
const PORT = 4001;
const Db =require("./modal/db");
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// mongoose.connect("mongodb://localhost:27017/Metrics",{useNewUrlParser:true,useUnifiedTopology:true})
// mongoose.connect("mongodb://localhost:27017/Metrics")
// mongoose.connect(process.env.Mongodb_Local_URL)
// mongoose.connect("mongodb+srv://vgrsoftlogic:vgr1234567@cluster0.ezxwamt.mongodb.net/Metrics?appName=Cluster0")
mongoose.connect(process.env.Mongodb_cluster_URL)
.then(()=>{console.log("Mongod db connected")})
.catch((err)=>{console.error("mongodb not connected",err)})

app.get("/",(req,res)=>{
    res.send("hello world,backend is ready to recive the front end datas");
    res.end();
});

app.post("/sign",async(req,res)=>{
    try{
        const {semail,spass} =req.body;
        const fd={semail,spass};
        console.log(fd);
        if(!semail || !spass){
            console.log("data not coming from front end,please fill the data");
            return res.status(400).json({Error:"client errro 404"});
        }
        else{
            const dataStoredb = new Db({semail,spass});
            await dataStoredb.save();
            return res.status(200).json({Messages:"Data stored in db 200"});
        }
    }
    catch(err){
        if(err){
            console.log("backend error",err);
            return res.status(500).json({Error:"server Erro 500"});
        }
    }
});

// app.listen(PORT,(err)=>{
//     if(err){
//         console.error("backend errro",err);
//     }
//     else{
//         console.log(`server running on port ${PORT}`);
//     }
// })

module.exports =app;