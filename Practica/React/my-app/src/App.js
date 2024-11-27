import {Th} from './Th'
import {Td} from './Td'
import {TdAccion} from './TdAccion'

function App( {stilo, usuario} ) {
  let i = 0;
  const array = []
    usuario.forEach(elementos =>{
      i = i + 1;
      array.push(
        <tr key={i} >
          <Td datos= {elementos.nombre} />
          <Td datos= {elementos.grupo} />
          <Td datos={elementos.sede}/>
          <Td datos={elementos.fecha_h}/>
          <TdAccion clas="accion" />
        </tr>

        );
    })

  return (

    <table border={stilo}>
      <thead>
        <tr>
          <Th nombre="Usuario" />
          <Th nombre="Grupo" />
          <Th nombre="Sede" />
          <Th nombre="Fecha/H" />
          <Th nombre="Accion" />
        </tr>
      </thead>
      <tbody>
        {array}
      </tbody>
    </table>
  );
}
export default App;
