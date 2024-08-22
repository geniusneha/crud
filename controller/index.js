const mongoose = require('express');
const Movie = require('../models/movieModel')

exports.getData = async (req, res) => {
    try {
        const data = await Movie.find()
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error);        
    }
};

exports.getDataById = async (req, res) => {
    try{
        const data = await Movie.findById(req.params.id)
        if (!data) {
            return res.status(404).send();
          }
          res.status(200).send(data);
    } catch (error){
        res.status(500).send(error);
    }
};

exports.postData = async(req, res) => {
    try {
        const data = new Movie({
            name : req.body.name,
            image: req.body.image
        })
        await data.save()
        res.status(201).send(data);
    } catch (error) {
        res.status(400).send(error)
    }
};

exports.putData = async(req, res) => {
    try{
        const data = await Movie.findById(req.params.id)
        data.name = req.body.name
        const updated = await data.save()
        if (!updated){
            return res.status(400).send(updated)
        }
        res.status(200).send(updated)
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.deleteData = async(req, res) => {
    try{
        const data = await Movie.findByIdAndDelete(req.params.id);
        if (!data) {
            return res.status(404).send('Id not found, Data not deleted')
        }
        res.status(200).send(data)
    } catch (error){
        res.status(500).send(error);
    }
};