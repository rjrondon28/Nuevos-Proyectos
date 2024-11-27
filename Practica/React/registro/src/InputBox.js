import {Input} from './Input'
import './inputbox.css'
export const InputBox = ({type,clase,placeholderr})=>{
    return (
        <div className="InputBox">
            <Input type= {type} placeholderr={placeholderr} />

        </div>
    );
}