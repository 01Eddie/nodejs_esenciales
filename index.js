const express = require('express');
const logger = require('morgan');
const bodyParser=require('body-parser')

const app=express();

const mongo = require('./db/connect')

app.use( logger("dev") );
app.use( bodyParser.json() )
app.use( bodyParser.urlencoded( { extended: false}) )

require('./routes')(app);
//require('./routes/views')(app);
//require('./routes/api')(app);
//require('./routes/special')(app);


app.get('/', (req, res) => {
    res.send('Estoy en la ruta');
});

console.log("Iniciando express");

app.listen(3000 , () => {
    console.log('Express esta en el puerto 3000')
})