
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import Button from './components/Button/Button'
import Contador from './components/Contador/Contador'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';





function App() {
    return (
      <div className='App'>
      <BrowserRouter>
          <NavBar />
          <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/category/:categoryId' element={<ItemListContainer/>} />
              <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
              <Route path='*' element={<h1>404 NOT FOUND</h1>} />
          </Routes>

      </BrowserRouter>
  </div>
    )
}

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
