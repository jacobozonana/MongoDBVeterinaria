const mongoose = require ('mongoose');

const mascotaSchema = new mongoose.Schema({
    raza: {
        type: String,
        required: true
    },   
    dueño: {
        type: String,
        required: true
    },
    edad: Number,
    tratamiento: {
        type: String,
        required: true
    },
    cotizacion: Number
});

const Mascotas = mongoose.model('Mascotas', mascotaSchema)

module.exports = Mascotas;