const mongoose = require('mongoose');

const mongodbfiledetails=new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
    ,
    phone:{
        type:String,
        required:true
    },
    position:{
        type:String,
        required:true
    }
    ,
    radioyes:{
        type:String,
        required:true
    },
    experience:{
        type:String,
        required:true
    }
    // resume:{
    //     type:File,
    //     required:true
    // }
})
const mongodbdetailsexport=mongoose.model("Customerdetails",mongodbfiledetails);
module.exports=mongodbdetailsexport;