import {Form} from './Form'
import {TablaCarrerasAgg} from './TablaCarreraAgg/TablaCarrerasAgg'
import {useState} from 'react'
export const App = () =>{
    const [boton, setBoton] = useState(false)
    const [activar, setActivar] = useState(false)
    function botton(){
        setBoton(prev => !boton)
        return boton;
    }
    function active(){
        setActivar(prev => !activar)
        return activar;
    }   
    return (
        <>
            <Form onBotton={botton} onActivar={active} valorActive={activar} action="#" method="POST" />
            <TablaCarrerasAgg onBotton={botton} boton={boton} />
        </>
    );
}