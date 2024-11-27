import {Input} from './Input'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './inputbox.css'
export const InputBox = ({type,clase,placeholderr})=>{
    return (
        <div className="InputBox">
            <Input type= {type} placeholderr={placeholderr} />
            <FontAwesomeIcon icon={clase} />

        </div>
    );
}