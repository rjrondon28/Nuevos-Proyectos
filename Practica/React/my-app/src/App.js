import {Th} from './Th'
import {Td} from './Td'

function App( {stilo, usuario} ) {
  const array = [];
  for (var i = 0; i < usuario; i++) {
    array.push(
      <tr key={i} >
          <Td datos="Ricardo"/>
          <Td datos="Admin"/>
          <Td datos="Ais"/>
          <Td datos="28/11/1999"/>
          <Td datos="Bitacora"/>
        </tr>
      );
  }
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
