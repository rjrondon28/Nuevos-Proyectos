import {Select} from './Select'
import './inputselect.css'

export const InputSelect = ({clase, names,campo}) =>{
    return (
        <div className="InputSelect">
            <Select campo={campo} namess={names} placeholder="Selecione Un campo" />
        </div>
        
    );
}