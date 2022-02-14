require('dotenv').config();
const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./database/config');

//crear serve express
const app = express();



//cors
app.use(cors())

//base de datos
dbConnection();

//crear rutas
app.get('/', (req, res) =>{
    res.json({
        ok: true,
        msg: 'Hola mundo'
    })
})

app.listen( process.env.PORT, () => {
    console.log('Server run on port ' + process.env.PORT);
})
