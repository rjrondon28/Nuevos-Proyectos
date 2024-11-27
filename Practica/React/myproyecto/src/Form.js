import { InputBox } from './InputBox';
import {ButtomBox} from './ButtomBox'
import './form.css'
export const Form = ({action,method})=>{
	return (
		<form  method={method} >
			<InputBox type= "text"  placeholderr="Codigo Opsu" />
			<InputBox type= "text"  placeholderr="Nombre"/>
			<InputBox type= "text"  placeholderr="Descripcion"/>
			<InputBox type= "text"  placeholderr="Direccion"/>
			<InputBox type= "text"  placeholderr="Telefono"/>
			<InputBox type= "text"  placeholderr="Correo"/>
			<ButtomBox valor1="Enviar" valor2="volver"/>
		</form>
	);
}