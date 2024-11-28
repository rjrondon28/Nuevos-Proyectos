import {Select} from './Select'
import './inputselect.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export const InputSelect = ({clase, names,campo}) =>{
    return (
        <div className="InputSelect">
            <Select campo={campo} namess={names} placeholder="Selecione Un campo" />
            <FontAwesomeIcon icon={clase} />
            
        </div>
        
    );
}