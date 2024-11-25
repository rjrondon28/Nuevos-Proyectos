import {createPool} from 'mysql2/promise';

export const  =  createPool({
	host: 'localhost',
	user: 'root',
	password: 'elmoreno',
	database: 'estudiantes_bd'
});

export const addUsers = async (req,res) =>{
	await 	connect.query( 'INSER INTO user (Nombre, Usuario, Email, Password ) (?,?,?,?) ', [] );
}
