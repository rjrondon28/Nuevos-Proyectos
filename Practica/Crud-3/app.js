const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes/routes.js')
const app = express();
const port = 5700;
////////////////////// Motor EJS /////////////////////////////
app.set('view engine', 'ejs');
app.set('views', path.join(path.resolve(), './views/'))
//////////////////// Body-Parser ////////////////////////////
app.use(bodyParser.urlencoded( {extended: true} ));
///////////////////// Public ////////////////////////////////
app.use(express.static(path.join(path.resolve(), './public/')));
//////////////////// RUtas /////////////////////////////////
app.use('/', routes);
//////////////////// Manejo de Errores /////////////////////
app.use((err,req,res,next) =>{
	res.status(500).send('Ocurrio un error en el Servidor ');
	if (err) {
		console.error(err.message)
	};
})
//////////////////// Servidor Encendido ////////////////////
app.listen(port,()=>{
	console.log(`Servidor Corriendo en: http://localhost:${port}`);
})