import mysql from 'mysql2/promise';

export const connection = await mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'elmoreno',
    database: 'estudent'
});
console.log('Conectado a la base de datos MySQL!1');

 