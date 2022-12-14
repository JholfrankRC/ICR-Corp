import React from 'react'
import '../assets/login.css'
import Logo from "../image/sinf.png"
import Menu from "../components/Menu"
import swal from 'sweetalert';

import { useState } from 'react';


var usuario = "991109";
var contrseña = "901199";

var ultiDigito = usuario.slice(0,1);
var primDigito = contrseña.slice(5,6);

/* console.log(ultiDigito);
console.log(primDigito); */

var total = Number(ultiDigito) + Number(primDigito);
/* console.log(total);
 */

const Login = () => {

  const [logon, setLogon] = useState("false")
  const [usu, setUsu] = useState('');
  const [pass, setPass] = useState('');
  const [captch, setCaptch] = useState('');

  

  function iniciarsesion (e) {
    e.preventDefault();
   

    console.log(setUsu)
    console.log(setPass)
    
    if ([usu, pass, captch].includes('')){
      swal({
        title:"Complete los datos faltantes",
        icon:"error"
      })
    }else{

      if(usu === usuario && pass === contrseña && captch === total.toString()){
        setLogon("true");
        document.getElementById("form_login").style.display = "none";
        swal({
          title:"Sesion iniciada",
          icon:"success"
        })
      
      }else{
        swal({
          title:"Error De usuario, contraseña y/o invalidos",
          icon:"error"
        })
        document.getElementById("txtusu").value = "";
        document.getElementById("txtpass").value = "";
        document.getElementById("captc").value = "";
        document.getElementById("txtusu").focus();
      }
    }
    }
    
  return (
    <div className='contenedor'>

        <div className='logo'>
          <img src={Logo} className='img'/>
        </div>

            <form id="form_login">

              <p className='pusu'>Username</p>
              <div className='botones'>
                      <input type="text"  id='txtusu' className="txtus"  onChange={ (e) => setUsu(e.target.value) }/>
              </div>

              <p className='ppass'>Password</p>
              <div className='botones'>
                      <input type="password"  id='txtpass' className="txtpa" onChange={ (e) => setPass(e.target.value) }/>
              </div> 

              <h5>Seguridad Captcha <br />   Sume el primer numero del usuario que es: {usu.slice(0,1)} con <br /> el primero de la Contraseña que es: {pass.slice(5,6)}</h5>
              

              <div className='captcha'>

                <input type="text"  id='captc' className="cap"  onChange={ (e) => setCaptch(e.target.value) }/>
              </div>

              
              <div className='botones'>
                    <input type="submit" className="env" value="Login" onClick={ iniciarsesion }/>                    
              </div>

            </form>

      { logon == "true" && <Menu  usu={usu}/> }

    </div>
      
 )
}

export default Login