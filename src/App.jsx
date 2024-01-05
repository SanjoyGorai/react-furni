import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './componants/Header/Header'
import Navbar from './componants/Navbar/Navbar'
import Home from './componants/Home/Home'
import {Outlet} from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar />
      <Outlet/>

    </>
  )
}

export default App
