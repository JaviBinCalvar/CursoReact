import { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import Button from './components/Button/Button'
import Contador from './components/Contador/Contador'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Button label={'Moscas'} clickeador={() => console.log ('Moscas') }  />
      <Button label={'Materiales'} clickeador={() => console.log ('Moscas')}/>
      <Button label={'Anzuelos'} clickeador={() => console.log ('Moscas')}/>
      <Contador />
      <ItemListContainer greeting={'Bienvenido'}/>
      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log (' cantidad agregada',quantity)} />
    </> 
  );
}

export default App
