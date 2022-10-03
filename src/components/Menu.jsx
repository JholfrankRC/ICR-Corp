import React from 'react'
import "../assets/menu.css"
import Logo from "../image/sinf.png"

import { useState } from 'react';
import { useNavigate, useRouteLoaderData } from 'react-router-dom';
import { Adivinanza } from './Adivinanza';



const Menu = (props) => {
  
  const [MenuLogout, setMenuLogout] = useState(false)

  const HandleMenuLogout = () => {
    
    setMenuLogout(!MenuLogout)
    document.getElementById("caja_menu").style.display = "none";

  }

/************************************ */
const [Logout, setLogout] = useState('')

  const submitLogout = (e) => {
    e.preventDefault();

    if(Logout === '9'){
      alert('Codigo de confirmacion exitoso 😊')
      location.reload();
    }else{
      alert('Numero de confirmacion invalido')
   }
  }
/************************************ */

 const [MenuAdivinanza, setMenuAdivinanza] = useState(false)

 const HandleMenuAdivinanza = () => {
   setMenuAdivinanza(!MenuAdivinanza)
   document.getElementById("caja_menu").style.display = "none";
 }

  return (

    <>
<div id="caja_menu">

    <div className='contmenu'>
        <strong className="h3">
         <p> Bienvenido Usuario : { props.usu }</p>
        </strong>

      <div className='menu'>
          <input type="submit" className='adivi' value='Adininanza' onClick={ HandleMenuAdivinanza }/>
          <input type="submit" className='cerrar' value='Cerrar sesion' onClick={ HandleMenuLogout }/>
      </div>

    </div>


</div>

 {/* ************* LOGOUT********** */}
      <div id="caja_menu">
      { MenuLogout && <div className='contmenu'>
        <div className='menu-2'>
          <h2>Digite el numero de cierre</h2>

          <form onSubmit={ submitLogout }>
            <input type='text' className='logout logout1' value={Logout} onChange={(e)=> { setLogout(e.target.value)}}/>
            <input type='submit' className='logout logout2'/>
          </form>
        </div>

      </div>}

    </div>
      {/* *************FIN LOGOUT********** */}
   
       
              {
                MenuAdivinanza && <Adivinanza/>

              }

          
    

     


    </>

  )
}

export default Menu