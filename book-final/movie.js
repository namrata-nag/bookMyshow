var mongo = require('mongodb');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt')
mongoose.connect('mongodb://localhost:27017/fullstack');
var db = mongoose.connection;


var userSchema=mongoose.Schema({
    name:{
        type : String,
        index:true
    },
    price:{
        type: Number
    },
    movieTheater:[{
         theater:String,
         time:[],
         screen:Number
    }],
    img: {
        type: String
    }
    
});

var Movies= module.exports =mongoose.model('movies',userSchema);
module.exports.addMovie = (newMovie,callback)=>{
newMovie.save(callback);}



