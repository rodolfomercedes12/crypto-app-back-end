const express = require("express");
require("dotenv").config();
const app = express();
app.use(express.json());
const server = require("http").createServer(app);

const { dbConnection } = require("./database/config");
dbConnection();

 

app.use( "/api/login", require("./routes/auth") );



server.listen(process.env.PORT, (err) => {
    if( err ){
        throw new Error( err );
    }
    console.log("Corriendo en puerto", process.env.PORT);
});