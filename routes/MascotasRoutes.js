const express = require('express');
const router = express();

const Mascotas = require('../models/Mascotas')

router.get('/mascotas', (req, res)=>{
    Mascotas.find()
    .then ((resDB)=> res.status(200).json(resDB))
    .catch((err) => res.status(400).json(err))
})

router.get('/mascotas/:id', (req, res)=>{
    Mascotas.findById(req.params.id)
    .then ((resDB)=> res.status(200).json(resDB))
    .catch((err) => res.status(400).json(err))
})

router.post('/mascotas', (req, res)=>{
    const { body } = req;
    const newMascota = new Mascotas(body)
    newMascota.save()
    .then((respDB)=> res.status(201).json(respDB))
    .catch((err)=> res.status(400).json(err))
})

router.patch('/mascotas/:id', (req, res)=>{
    const { body } = req;
    Mascotas.findByIdAndUpdate(req.params.id, body, {new: true })
    .then ((resDB)=> res.status(201).json(resDB))
    .catch((err) => res.status(400).json(err))
})

router.delete('/mascotas/:id', (req, res)=>{
    Mascotas.findByIdAndDelete(req.params.id)
    .then((respDB)=> res.status(204).json(respDB))
    .catch((err)=> res.status(400).json(err));
});


module.exports = router;