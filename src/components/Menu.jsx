import React from 'react'
import "../assets/menu.css"
import Logo from "../image/sinf.png"

import { useState } from 'react';


var cerrars = ""



const Menu = (props) => {


  const cerrarSesion = () => {



  }



  return (

    <>
<div id="caja_menu">

    <div className='contmenu'>
        <strong className="h3">
         <p> Bienvenido Usuario : { props.usu }</p>
        </strong>

      <div className='menu'>
          <input type="submit" className='adivi' value='Adininanza' onClick={ adivinanza }/>
          <input type="submit" className='cerrar' value='Cerrar sesion' onClick={ cerrarSesion }/>
      </div>

    </div>

</div>

    </>

  )
}

export default Menu