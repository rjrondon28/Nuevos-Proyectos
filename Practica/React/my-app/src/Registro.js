import './accion.css'
export const Registro = ( {clas,href,nombre} ) =>{
	return (
		<a className={clas} href={href} > {nombre} </a>
	);
};