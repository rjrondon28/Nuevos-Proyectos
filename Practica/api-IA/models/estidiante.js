import {connection} from '../config/db.js';

const Estudiante = {
    crear: async (nombre, email) => {
        const query = 'INSERT INTO estudiantes (nombre, email) VALUES (?, ?)';
        const [result] = await connection.execute(query, [nombre, email]);
        return result;
    },
    obtenerTodos: async () => {
        const query = 'SELECT * FROM estudiantes';
        const [results] = await connection.execute(query);
        return results;
    },
    actualizar: async (id, nombre, email) => {
        const query = 'UPDATE estudiantes SET nombre = ?, email = ? WHERE id = ?';
        await connection.execute(query, [nombre, email, id]);
    },
    eliminar: async (id) => {
        const query = 'DELETE FROM estudiantes WHERE id = ?';
        await connection.execute(query, [id]);
    }
};

export default Estudiante;