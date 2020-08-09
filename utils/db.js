const mongoose = require('mongoose');
const { config } = require('../config')

mongoose.connect(
    config.db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    })
    .then(()=> console.log ('Conectado a Base de Datos MongoDB'))
    .catch (()=> console.log ('Error en la conexion'))


