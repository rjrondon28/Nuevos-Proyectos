import './inputcarrera.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { Label } from './Label';
import { useState } from 'react';

export const InputCarreras = ({clase,fort})=>{
    const [boton,setBoton] = useState(false)
    function botton(){
        setBoton(!boton)
        return boton;
    }
    return (
        <div className={fort}>
            <Label label="Caja de Carreras" />
            <FontAwesomeIcon onClick={botton} className='bottona' icon={clase} />
        </div>
    );
}

