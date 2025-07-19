import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/navBar'
import Inicio from './components/inicio'
import SobreMi from './components/sobremi'
import SeccionLenguajes from './components/SeccionLenguajes'
import Proyectos from './components/proyectos'
import Contacto from './components/contacto'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Inicio />
      <SobreMi />
      <SeccionLenguajes />
      <Proyectos />
      <Contacto />
    </>
  )
}

export default App
