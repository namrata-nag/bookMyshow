var express = require('express');
var router = express.Router();
var Movies = require('../movie');
// router.get('/getBook',function(req,res){
//   Books.find(function(err,books){
//     console.log("reponse is...." + books);
//         res.json(books);
//   })
// })

router.post('/addMovie', function(req, res) {
 console.log("body" + req.body.time);
 var name= req.body.name;
 var theater=req.body.theater;
 var price=parseInt(req.body.price);
var time=(req.body.time).split(",");
var screen =parseInt(req.body.screen);

console.log("every thing is done.......")

 var newMovie = new Movies({
        name:name,
        price: price,
        movieTheater:[{
            theater:theater,
            time:time,
            screen:screen
        }],
    
     })

     console.log("every thing is done  2222......." )
    Movies.addMovie(newMovie,function(err,user){
         if(err){console.log("error occured")}
       console.log(user);
       res.json(user);
     })

     });

     module.exports = router;