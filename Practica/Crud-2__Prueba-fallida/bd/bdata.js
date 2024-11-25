import {createPool} from 'mysql2/promise';

export const createDataBase = async () => {
    const connect = createPool({
        host: 'localhost',
        user: 'root',
        password: 'elmoreno'
    });

    try {
        // Crear la base de datos si no existe
        await connect.query('CREATE DATABASE IF NOT EXISTS estudiantes_bd');
        console.log('Base de datos creada o ya existe.');
        // Usar la base de datos
        await connect.query('USE estudiantes_bd');

        // Crear la tabla si no existe
        const createTable = `
            CREATE TABLE IF NOT EXISTS data (
                ID INT AUTO_INCREMENT PRIMARY KEY,
                NombreCOMPLETO VARCHAR(255) NOT NULL,
                ApeliidoCOMPLETO VARCHAR(255) NOT NULL,
                C_I INT NOT NULL,
                Direccion VARCHAR(255) NOT NULL,
                CodigoPostal INT NOT NULL,
                NmrCelular VARCHAR(15) NOT NULL,
                FechaNacimiento DATE NOT NULL,
                Nacionalidad VARCHAR(50) NOT NULL,
                CorreoElectronico VARCHAR(255) NOT NULL,
                DireccionRecidencia VARCHAR(255) NOT NULL,
                Foto BLOB,
                Stactus TINYINT(1) DEFAULT 1
            )
        `;
        const createTableUser = `CREATE TABLE user(ID INT AUTO_INCREMENT PRIMARY KEY,
                                Nombre VARCHAR(255) NOT NULL,
                                Usuario VARCHAR(255) NOT NULL,
                                Email VARCHAR(50) NOT NULL,
                                Password VARCHAR(50) NOT NULL ) `;
        await connect.query(createTableUser);
        await connect.query(createTable);
        console.log('Tabla creada con éxito.');

    } catch (error) {
        console.error(`Error al conectar: ${error.message}`);
    } finally {
        // Cerrar la conexión
        await connect.end();
        console.log('Conexión cerrada exitosamente.');
    }
};