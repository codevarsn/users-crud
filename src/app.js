const express = require("express");

const cors = require("cors")

const app = express(); 

const PORT = 8000; // puerto de comunicacion

const db = require('./utils/database'); //importar coneccion a BD

const todoRouter = require('./routes/todo.routes'); //importar rutas

require('dotenv').config();


//middlewares

app.use(cors());

app.use(express.json()); 

app.use(function(_req, res, next) {
    res.setHeader("Content-Security-Policy", " 'default-src' 'self' 'unsafe-inline' https://varsan-user-crud-api.onrender.com/ https://www.postman.com/;" ); 
    next();
  });
  
// sincronizacion a bases de datos
db.authenticate()
    .then(() => console.log("Successful Auth"))
    .catch((error) => console.log(error)); 

db.sync()
    .then(() => console.log("base de datos sincronizada"))
    .catch((error) => console.log(error));


// iniciacion de rutas
app.use(todoRouter);



//configuracion de comunicacion (puerto)
app.listen(PORT, () => {
    console.log(`servidor escuchando en puerto ${PORT}`);
});

console.log(process.env);  
