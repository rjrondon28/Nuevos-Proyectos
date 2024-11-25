import {connect, addUsers} from '../models/Estudiantes.js'
export const index = (req, res) => {
    try {
        res.render('index');
    } catch (e) {
        console.error(e.message);
        res.status(500).send('Ocurrió un error al Renderizar la vista');
    }
};
export const callbackError = (err,req,res,next)=>{
    res.status(500).send('Ocurrio Un Error en el Servidor');
    if(err){
        console.error(err.message);
    };
};

const addUser = (req, res)=>{
    const {nombre, usuario, email, password} = req.body
    addUsers( newUser )

}