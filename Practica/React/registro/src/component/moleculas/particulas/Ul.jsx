import { Li } from "./micro-particulas/Li";
import styles from '../../../style/ul.css'; 
export const Ul = ({valorActive}) =>{
    return (
        <ul className = {valorActive ? 'listactive' : 'lista' } >
            <Li content="Agronomia" /> 
            <Li content="Veterinaria" /> 
            <Li content="Ing. Sistema " /> 
            <Li content="Ing. Civil" /> 
        </ul>
    );
}