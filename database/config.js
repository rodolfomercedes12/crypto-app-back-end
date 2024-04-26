const mongoose = require("mongoose");

const dbConnection = async () =>{

    try{
        await mongoose.connect( process.env.DB_CON, {
            useNewUrlParser: true,
            //useCreateIndex: true,
            useUnifiedTopology: true
        });
        console.log( "Connected MONGODB !!!!" );

    }catch(error){
        console.log(error);
        throw new Error( " DB Error!" );
    }

}

module.exports = {
    dbConnection
}