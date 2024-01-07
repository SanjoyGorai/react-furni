import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './componants/Header/Header'
import Navbar from './componants/Navbar/Navbar'
import Home from './componants/Home/Home'
import { Outlet } from 'react-router-dom'
import Footer from './componants/Footer/Footer'
import { useEffect } from 'react'

function App() {

  // useEffect(() => {
  //   console.log("App useEffect Callled ");
  //   fetch('https://fakestoreapi.com/products/1')
  //     .then(res => res.json())
  //     .then(json => console.log(json))
  // })

  return (
    <>
      <Navbar />
      <Outlet />
      {/* <Footer /> */}

    </>
  )
}

export default App
