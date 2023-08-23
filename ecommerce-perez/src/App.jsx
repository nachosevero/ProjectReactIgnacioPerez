import { useState } from 'react'


import NavBar from './components/navbar/navbar';
//import Titulo from './components/titulo/titulo';
import Footer from './components/footer/footer';
import Greeting from './components/ItemListContainer/ItemListContainer';

// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <NavBar />

      <Greeting saludo={"¡Bienvenido a Infotech!"}/>

      <Footer />
    </div>
  )
}

export default App
