import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import NavBar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
//import Titulo from './components/titulo/titulo';
// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/categoria/:cid" element={<ItemListContainer/>}/>
        <Route path="/detalle/:pid" element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
