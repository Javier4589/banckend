const express = require('express')
const morgan = require('morgan')

const app = express();
//variables de entorno-enviroment variables
app.set('port',process.env.PORT || 3000)
app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({ extended:false }));

app.use("/api/Persona",require('./routes/Persona.ruta'));

module.exports=app;   
