const mongoose = require("mongoose");

const myDbschema = new mongoose.Schema({
    semail:{
        type:String,
        required:true
    },
    spass:{
        type:String,
        required:true
    }
},{
    collation:"signin"
});
module.exports = mongoose.model("signin",myDbschema,"signin");
// module.exports = mongoose.model("signin",myDbschema);