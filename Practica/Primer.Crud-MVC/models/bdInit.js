// dbSetup.js (o el nombre que prefieras)
const mysql = require('mysql');

const createDatabase = () => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'elmoreno'
    });

    connection.connect(err => {
        if (err) {
            console.error(`La conexión con la base de datos ha fallado: ${err.stack}`);
            return;
        }
        console.log(`Conectando con la base de datos con ID = ${connection.threadId}`);

        // Crear la base de datos si no existe
        connection.query('CREATE DATABASE IF NOT EXISTS formulario_bd', (err, result) => {
            if (err) {
                console.error(`Error al crear la base de datos: ${err.message}`);
                connection.end();
                return;
            }

            // Usar la base de datos
            connection.query('USE formulario_bd', (err, result) => {
                if (err) {
                    console.error(`Error al usar la base de datos: ${err.message}`);
                    connection.end();
                    return;
                }

                // Crear las tablas
                const creaTable = `CREATE TABLE IF NOT EXISTS items (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    name VARCHAR(255) NOT NULL
                )`;

                connection.query(creaTable, (err, result) => {
                    if (err) {
                        console.error(`Error al crear la tabla: ${err.message}`);
                        connection.end();
                        return;
                    }
                    console.log('Tabla creada o existente');

                    // Cerrar la conexión
                    connection.end(err => {
                        if (err) {
                            console.error(`Error al cerrar la conexión: ${err.message}`);
                            return;
                        }
                        console.log('Conexión cerrada');
                    });
                });
            });
        });
    });
};

module.exports = {
    createDatabase
};