const express = require("express");
const mongoose = require('mongoose');
const City = require("./models/cities");
//var methodOverride = require('method-override');

mongoose.connect('mongodb://localhost:27017/cities');

const app = express();

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(allowCrossDomain);

//app.use(methodOverride('_method'));


app.get("/cities",async (req,res)=>{
    try{
    var Cities = await City.find({});
    res.status(200).send(Cities);
    }catch(e){
        res.status(400).json({
            message:e.message
        });
    }
});


app.listen(3001, ()=>console.log("Server is listening on 3001"));