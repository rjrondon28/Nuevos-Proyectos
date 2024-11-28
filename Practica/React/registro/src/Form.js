import { InputBox } from './InputBox';
import {ButtomBox} from './ButtomBox'
import {InputSelect} from './InputSelect'
import {faLaptopFile,faLaptopCode,faPersonChalkboard} from '@fortawesome/free-solid-svg-icons'
import './form.css'
export const Form = ({action,method})=>{
	return (
		<form  method={method} >
			<InputBox type= "text" clase={faLaptopCode} placeholderr="Codigo" />
			<InputBox type= "text" clase={faLaptopFile} placeholderr="Nombre"/>
			<InputSelect campo="Carreras" clase={faPersonChalkboard}  names="select" />
			<InputSelect campo="Lista de Carrera" names="select" />
			<ButtomBox valor1="Enviar" valor2="volver"/>
		</form>
	);
}