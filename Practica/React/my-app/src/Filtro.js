import './inputfiltro.css'
import {Input} from './Input'
export const Filtro = ({clas}) =>{
	return (
		<div className ="filtro">
			<Input clas={clas} type="search" placeholder="Filtrar por Grupo,Sede,Usuario"/>
    </div>
	);
}	