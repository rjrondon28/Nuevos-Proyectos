import {Option} from './Options'
export const Select = ({select})=>{
	return (
		<select name={select}  >
			<Option value="Valor 1" />
		</select>
	);
}