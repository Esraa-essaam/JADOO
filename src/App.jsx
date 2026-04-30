import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Components/Pages/Navbar/Navbar'
import Hero from './Components/Home/Hero';
import './App.css'

function App() {
 

  return (
    
    <div>
      <Navbar />
      <Hero/>
    </div>  
    
  )
}

export default App
