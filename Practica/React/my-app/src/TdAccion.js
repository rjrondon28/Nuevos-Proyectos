import {Accion} from './Accion'
export const TdAccion = ({clas})=>{
	return (
		<td className={clas}> 
			<Accion accion="#" nombre="Bitacora"/>
			<Accion accion="#" nombre="Detalles"/>
			<Accion accion="#" nombre="Status"/>
		</td>
	);
}