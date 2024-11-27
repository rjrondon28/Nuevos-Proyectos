import './accion.css'
import {Span} from './Span'
export const Accion = ({ accion, nombre})=>{
	return (
		<a className='action'  href={accion} > d <Span clas="span" nombre={nombre} /> </a>
	);
}