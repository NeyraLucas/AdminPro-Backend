const mongoose = require('mongoose');

const dbConnection = async() =>{

    try{
        //conectarse a la bd de mongo
        await mongoose.connect(process.env.DB_CNN);

        console.log('DB online');

    }catch(err){
        console.log(err);
        throw new Error('error al cargar la bd');
    }

}

module.exports = {
    dbConnection
}