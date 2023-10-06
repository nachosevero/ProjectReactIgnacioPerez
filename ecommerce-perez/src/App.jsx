
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import NavBar from './components/navbar/navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContextProvider } from './components/context/CartContext';
import CartContainer from './components/CartContainer/CartContainer';
import Footer from './components/Footer/Footer';
import Greeting from './components/greeting/Greeting';


import 'bootstrap/dist/css/bootstrap.min.css';





function App() {
  return (
    <BrowserRouter>
        <CartContextProvider>
          <NavBar />
          <Greeting />
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/categoria/:cid" element={<ItemListContainer/>}/>
            <Route path="/detalle/:pid" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<CartContainer/>}/>
          </Routes>
          <Footer />
        </CartContextProvider>
    </BrowserRouter>
  )
}

export default App
