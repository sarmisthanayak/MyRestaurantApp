const mongoose=require('mongoose');

const restaurantSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    imageURL:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },


});

module.exports=mongoose.model("restuarant",restaurantSchema);