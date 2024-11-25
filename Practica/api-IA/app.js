import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import path from 'path'
import { createDatabase } from './bd/createDb.js';
createDatabase()
import estudianteRoutes from './routes/estudianteRoutes.js';

const app = express();
// Configuración del motor de plantillas EJS
app.set('view engine', 'ejs');
app.set('views', path.join(path.resolve(), './views/'));

app.use(express.json());

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev')); // Usando morgan para el registro de solicitudes

// Public
app.use(express.static(path.join(path.resolve(), './public/')));
// Rutas
app.use( estudianteRoutes);

// Manejo de errores 404
app.use((req, res, next) => {
    res.status(404).send('Página no encontrada');
});

// Manejo de errores generales
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Error interno del servidor');
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
