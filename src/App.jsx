import React from 'react'
import  Login  from './components/Login'

import { BrowserRouter, Routes, Route } from "react-router-dom"


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
