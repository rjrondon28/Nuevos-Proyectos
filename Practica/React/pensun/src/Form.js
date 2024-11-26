import './form.css';
import {Button} from './Button'
import {Select} from './Select'
import { InputBox } from './InputBox';
import {faUser} from '@fortawesome/free-solid-svg-icons'

export const Form = ({action,method})=>{
	return (
		<form  method={method} >
			<InputBox type= "text" />
			<InputBox type= "text" clase ={faUser} />
			<Select name="select" />
			<InputBox type= "number" />
			<InputBox type= "number" />
			<InputBox type= "number" />
			<InputBox type= "number" />
			<InputBox type= "number" />
			<Select name="select" />
			<Button type="button" valor="Enviar" />
			<Button type="button" valor="Volver" />
		</form>
	);
}