import { Ul } from "./particulas/Ul";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import '.././../style/ulbox.css'
export const UlBox = ({clase,onActivar,valorActive})=>{
    return (
        <div onClick={onActivar}  className="UlBox">
            <p>Selecciona una carrera</p>
            <Ul valorActive={valorActive} />
            <FontAwesomeIcon  icon={clase} />

        </div>
    );
}