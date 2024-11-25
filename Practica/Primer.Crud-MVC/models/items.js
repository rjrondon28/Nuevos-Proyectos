const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'elmoreno',
    database: 'formulario_bd'
});

console.log('hola3');

connection.connect(err => {
    if (err) {
        console.error(`Error al conectarse con la base de datos: ${err.stack}`);
        process.exit(1); // Detener la aplicación si no se puede conectar
    }
    console.log(`Conectado a la base de datos con ID: ${connection.threadId}`);
});

const getAllItem = (callback) => {
    connection.query('SELECT * FROM items', (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

const addItem = (name, callback) => {
    const query = 'INSERT INTO items (name) VALUES (?)';
    connection.query(query, [name], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

const updateItem = (id, name, callback) => {
    const query = 'UPDATE items SET name = ? WHERE id = ?';
    connection.query(query, [name, id], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

const deleteItem = (id, callback) => {
    const query = 'DELETE FROM items WHERE id = ?';
    connection.query(query, [id], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

// Cerrar la conexión cuando la aplicación se detenga
process.on('SIGINT', () => {
    connection.end(err => {
        if (err) {
            console.error(`Error al cerrar la conexión: ${err.stack}`);
        }
        console.log('Conexión a la base de datos cerrada.');
        process.exit(0);
    });
});

module.exports = {
    getAllItem,
    addItem,
    updateItem,
    deleteItem
};