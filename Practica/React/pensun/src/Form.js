import {Input} from './Input'
import {Button} from './Button'
import {Select} from './Select'
export const Form = ({action,method})=>{
	return (
		<form  method={method} >
			<Input type= "text" />
			<Select name="select" />
			<Button type="button" />
		</form>
	);
}