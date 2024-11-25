import estudiante from '../models/estidiante.js';

const estudianteController = {
    crear: async (req, res) => {
        const { nombre, email } = req.body;
        try {
            const result = await estudiante.crear(nombre, email);
           // res.status(201);
            console.log(`Estudiante creado id:${result.insertId}` )
            res.render('estudiantes')
        } catch (err) {
            res.status(500).send(err);
        }
    },
    obtenerTodos: async (req, res) => {
        try {
            const results = await estudiante.obtenerTodos();
            res.render('todos', { estudiantes: results });
        } catch (err) {
            res.status(500).send(err);
        }
    },
    actualizar: async (req, res) => {
        const { id, nombre, email } = req.body;
        try {
            await estudiante.actualizar(id, nombre, email);
            res.status(200).send({ message: 'Estudiante actualizado' });
        } catch (err) {
            res.status(500).send(err);
        }
    },
    eliminar: async (req, res) => {
        const { id } = req.params;
        try {
            await Estudiante.eliminar(id);
            res.status(200).send({ message: 'Estudiante eliminado' });
        } catch (err) {
            res.status(500).send(err);
        }
    },
    index: async (req,res) =>{
        try{
            res.render('estudiantes');
        }catch (e){
            res.status(500).send(`Error Al Renderizar pantilla ${e.message}`);
        }
    },
    todo: async (req,res) =>{
        try{
            res.render('todos');
        }catch (e){
            res.status(500).send(`Error al Renderizar pantilla ${e.message}`);
        }
    }
};

export default estudianteController;