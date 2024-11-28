import { InputBox } from './InputBox';
import {ButtomBox} from './ButtomBox'
import {InputSelect} from './InputSelect'
import { InputCarreras } from './InputCarreras';
import {faLaptopFile,faLaptopCode,faPersonChalkboard,faBoxesPacking	} from '@fortawesome/free-solid-svg-icons'
import './form.css'


export const Form = ({action,method})=>{

	return (
		<form  method={method} >
			
			<h1>Areas</h1>
			<InputBox type= "text" clase={faLaptopCode} placeholderr="Codigo" />
			<InputBox type= "text" clase={faLaptopFile} placeholderr="Nombre"/>
			<InputSelect campo="Carreras" clase={faPersonChalkboard}  names="select" />
			<InputCarreras fort="cajaCarreras" clase={faBoxesPacking}/>
			<ButtomBox valor1="Enviar" valor2="volver"/>
		</form>
	);
}
