import {Span} from './Span'
export const Accion = ({accion, nombre})=>{
	return (
		<a href={accion} > <Span nombre={nombre} /> </a>
	);
}