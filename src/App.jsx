import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './navigation'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import Service from './component/Service'

function App() {

  return (
    <>
      <Navigation />
      <Home />
      <About />
      <Contact />
      <Service />
    </>
  )
}

export default App
