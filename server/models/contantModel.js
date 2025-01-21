const mongoose = require("mongoose");

//get access to Schema constructor
const Schema = mongoose.Schema;

//create a new schema for our app
const constant_model = new Schema({
  symbol: {type: String, required:false},
  name: {type: String, required:false},
  value: {type: String, required:false},
  createdAt: {type: Date},
  updatedAt: {type: Date}
});

constant_model.pre('save', function(next){
  if (!this.createdAt){
    this.createdAt = new Date();
  }else{
    this.updatedAt = new Date();
  }
  next();
});

// export the model with associated name and schema
module.exports = mongoose.model("Constant", constant_model);