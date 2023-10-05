import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import NavBar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContextProvider } from './components/context/CartContext';
import CartContainer from './components/CartContainer/CartContainer';
//import Titulo from './components/titulo/titulo';
// import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';





function App() {
  return (
    <BrowserRouter>
        <CartContextProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/categoria/:cid" element={<ItemListContainer/>}/>
            <Route path="/detalle/:pid" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<CartContainer/>}/>
          </Routes>
        </CartContextProvider>
    </BrowserRouter>
  )
}

export default App
