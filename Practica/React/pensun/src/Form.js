import './form.css';
import { InputBox } from './InputBox';
import {InputSelect} from './InputSelect'
import {ButtomBox} from './ButtomBox'
import {faUser,faLaptopFile,faLaptopCode,faBookOpenReader,faSquarePollHorizontal,faPersonChalkboard} from '@fortawesome/free-solid-svg-icons'

export const Form = ({action,method})=>{
	return (
		<form  method={method} >
			<InputBox type= "text" clase={faLaptopFile} placeholderr="Semestre" />
			<InputBox type= "text" clase={faLaptopCode} placeholderr="Codigo de Materia"/>
			<InputBox type= "text" clase={faPersonChalkboard} placeholderr="Asignatura"/>
			<InputBox type= "text" clase={faBookOpenReader} placeholderr="Horas Teoricas"/>
			<InputBox type= "text" clase={faBookOpenReader} placeholderr="Horas Practicas"/>
			<InputBox type= "text" clase={faBookOpenReader} placeholderr="Horas Semanales"/>
			<InputBox type= "text" clase={faUser} placeholderr="Unidades de Credito"/>
			<InputSelect campo="Prelaciones" names="select" clase={faSquarePollHorizontal}/>
			<ButtomBox valor1="Enviar" valor2="volver"/>
		</form>
	);
}	 