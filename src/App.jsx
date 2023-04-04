import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import HeaderLink from './components/HeaderLink/HeaderLink'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
     <HeaderLink/>
    <Outlet></Outlet>
    </>
  )
}

export default App
