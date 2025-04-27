const mongoose = require("mongoose");

const incidentSchema = mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User",
    },
    title: {
        type:String,
        required: [true,"Please add the title"],
    },
    description:{
        type:String,
        required: [true,"PLease add the description"],
    },
    severity:{
        type:String,
        required: [true,"Please add the severity"],
    },
},{
    timestamps:true,
    }
);

module.exports = mongoose.model("Incidents",incidentSchema);