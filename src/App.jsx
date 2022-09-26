import React from 'react'
import "./assets/estilos.css"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import  Login  from './components/Login'

const App = () => {
  return (

    <div>

      <BrowserRouter>
      
        <Routes>
          <Route exact path='/' element={<Login />}/>
        </Routes>
      
      </BrowserRouter>

    </div>
  

  )
}

export default App
