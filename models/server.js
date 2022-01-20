const express = require('express');
const cors = require('cors');

class Server {


    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.userPath = '/api/users';


        // Middlewares 
        this.middlewares();



        // Rutas de mi aplicacion 
        this.routes();
    }

    middlewares(){
        
        // Lectura y Parseo del Body 
        this.app.use( express.json() );

        // Directorio publico 
        this.app.use( express.static('public'));
        
        // CORS
        this.app.use(cors());

    }

    routes(){
        this.app.use(this.userPath , require('../routes/user.routes'))
          
    }

    listen(){
        this.app.listen( this.port, ()=>{
            console.log(`servidor corriendo en ${this.port}`);
        })
    }

}


module.exports = Server;