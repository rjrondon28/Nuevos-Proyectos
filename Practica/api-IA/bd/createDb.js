import { createPool } from 'mysql2/promise';

export const createDatabase = async () => {
    const pool = createPool({
        host: 'localhost',
        user: 'root',
        password: 'elmoreno'
    });

    try {
        // Crear la base de datos si no existe
        const createDatabaseQuery = `CREATE DATABASE IF NOT EXISTS estudent`;
        await pool.query(createDatabaseQuery);
        console.log('Base de datos creada o ya existe.');

        // Crear un nuevo pool de conexiones con la base de datos especificada
        const dbPool = createPool({
            host: 'localhost',
            user: 'root',
            password: 'elmoreno',
            database: 'estudent'
        });

        // Crear la tabla si no existe
        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS estudiantes (
                id INT AUTO_INCREMENT PRIMARY KEY,
                nombre VARCHAR(255) NOT NULL,
                email VARCHAR(50) NOT NULL 
            )
        `;
        await dbPool.query(createTableQuery);
        console.log('Tabla creada con éxito.');

    } catch (error) {
        console.error(`Error al conectarse: ${error.message}`);
    } finally {
        await pool.end();
        console.log('Conexión cerrada exitosamente.');
    }
};