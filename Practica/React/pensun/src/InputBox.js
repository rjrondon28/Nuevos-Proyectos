import './inputbox.css'
import {Input} from './Input'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export const InputBox = ({type,clase})=>{
    return (
        <div className="InputBox">
            <Input type= {type}/>
            <FontAwesomeIcon icon={clase} />
        </div>
    );
}