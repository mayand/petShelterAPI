const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const petSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true},
    type:  {
        type:String,
        required: true},
    breed:  {
        type:String,
        required: true},
    latitude:  {
        type:Number,
        required: true,
        min: -90,
        max: 90},
    longitude:  {
        type:Number,
        required: true,
        min:-180,
        max:180}
});
const Pet = mongoose.model('Pet', petSchema);

router.get('/', async (req, res) =>{
    try{
        const pets = await Pet.find().sort('name');
        res.send(pets);
    }catch(ex){
        res.status(500).send({ succes: false, message: 'Internal Server Error' });
    }
});

router.get('/:id', async (req, res) =>{
    try{
        const pet = await Pet.findById(req.params.id);
        if (!pet) res.status(404).send("The Pet with the given id not found");
        else res.send(pet);
    }catch(ex){
        res.status(500).send({ succes: false, message: 'Internal Server Error' });
    }
});

router.post('/', async(req, res) =>{
    if(!req.body.name){
        res.status(400).send("name is required");
        return;
    }
    if(!req.body.type){
        res.status(400).send("type is required");
        return;
    }
    if(!req.body.breed){
        res.status(400).send("breed is required");
        return;
    }
    if(!req.body.latitude){
        res.status(400).send("latitude is required");
        return;
    }
    if(!req.body.longitude){
        res.status(400).send("longitude is required");
        return;
    }
    let pet = new Pet({
        name: req.body.name,
        type: req.body.type,
        breed: req.body.breed,
        latitude: req.body.latitude,
        longitude: req.body.longitude
    });
    try{
        pet = await pet.save();
        res.send(pet);
    }catch(ex){
        if (ex.code === 11000 && ex.name === 'MongoError'){
            res.status(500).send({ succes: false, message: 'Pet Name Already Exists' });
        }else{
            res.status(500).send({ succes: false, message: ex.message });
        }
    }   
});

module.exports = router;