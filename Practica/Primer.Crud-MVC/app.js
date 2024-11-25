const { createDatabase } = require('./models/bdInit');
createDatabase();
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/router')
const app = express()
const port = 5500;
// Consiguere EJS
app.set('view engine', 'ejs');

//Configurar Body-Parser
app.use(bodyParser.urlencoded( {extended : true }));

// Servicio de Archivos Estatico
app.use(express.static('./public'));

app.use('/',router)

// Middleware de manejo de Errores
app.use((err, req, res, next) =>{
	res.status(500).send('Ocurrio un error en el servidor');
});

app.listen(port, ()=>{
	console.log(`El Servidor EstaCorriendo en " http://localhost:${port} "`)
});
