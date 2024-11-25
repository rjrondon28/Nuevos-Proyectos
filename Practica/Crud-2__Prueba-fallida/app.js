import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/router.js';
import path from 'path'
import {createDataBase} from './bd/bdata.js'
import {callbackError} from './controllers/controllers.js'
const app = express();
const port = 5600;
///////////// CREAR BASE DE DATOS /////
createDataBase();
///////////// Motor EJS ///////////////
app.set('view engine', 'ejs');
app.set('views', path.join(path.resolve(), './views'));
///////////// Middleware //////////////
app.use(bodyParser.urlencoded( {extended: true} ));
///////////// Archivos Static /////////
app.use(express.static(path.join(path.resolve(), './public/')));
///////////// Routes //////////////////
app.use(express.json() )
app.use(routes);
///////////// Maneador de Errores /////
app.use(callbackError);
///////////// Ecendido del Servidor ///
app.listen(port, ()=>{
	console.log(`Servidor Corriendo en "http://localhost:${port}`)
});
