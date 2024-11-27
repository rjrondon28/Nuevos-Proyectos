import { InputBox } from './InputBox';
import {ButtomBox} from './ButtomBox'
import {InputSelect} from './InputSelect'
import './form.css'
export const Form = ({action,method})=>{
	return (
		<form  method={method} >
			<InputBox type= "text"  placeholderr="Codigo" />
			<InputBox type= "text"  placeholderr="Nombre"/>
			<InputBox type= "text"  placeholderr="Carrera"/>
			<InputSelect campo="Carreras" names="select" />
			<InputSelect campo="Lista de Carrera" names="select" />
			<ButtomBox valor1="Enviar" valor2="volver"/>
		</form>
	);
}