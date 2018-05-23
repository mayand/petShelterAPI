app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
const config = require('config');
const express = require('express');
const mongoose = require('mongoose');
const pets = require('./routes/pets')

const app = express();
app.use(express.json());
app.use('/pets', pets);

mongoose.connect(config.get('db'))
    .then(()=> console.log('connected to MongoDB..'))
    .catch(err=> console.error('couldnt connect to mongodb',err));

const port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log('listening on port '+port);
});