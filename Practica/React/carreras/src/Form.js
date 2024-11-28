import './form.css';
import { InputBox } from './InputBox';
import {InputSelect} from './InputSelect'
import {ButtomBox} from './ButtomBox'
import {faLaptopFile,faLaptopCode,faSquarePollHorizontal} from '@fortawesome/free-solid-svg-icons'

export const Form = ({action,method})=>{
	return (
		<form  method={method} >
			<InputBox type= "text" clase={faLaptopFile} placeholderr="Nombre" />
			<InputBox type= "text" clase={faLaptopCode} placeholderr="Codigo Opsu"/>
			<InputSelect campo="Modalidad" names="select" clase={faSquarePollHorizontal}/>
			<ButtomBox valor1="Enviar" valor2="Cancelar"/>
		</form>
	);
}