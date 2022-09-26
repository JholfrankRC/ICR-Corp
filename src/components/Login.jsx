import React from 'react'
import '../assets/login.css'
import Logo from "../image/sinf.png"

import { useState } from 'react';

var total = 0;
var usuario = "1043114873";
var contrseña = "3784113401";

var ultiDigito = usuario.slice(9,10);
var primDigito = contrseña.slice(0,1);

console.log(ultiDigito);
console.log(primDigito);

total = ultiDigito + primDigito;
console.log(total);

const Login = () => {
  
  const [logon, seLogon] = useState("false")
  const [usu, setUsu] = useState('');
  const [pass, setPass] = useState('');
  const [captch, setCaptch] = useState('');

  function iniciarsesion (e) {
    e.preventDefault();
    var txtusu = document.getElementById("txtusu").value
    var txtpass = document.getElementById("txtpass").value
    var captc = document.getElementById("captc").value

    console.log(setUsu)
    console.log(setPass)
    
    if (txtusu.length === "" || txtpass.length === "" || captc.length === ""){
      alert("Complete los datos faltantes")
    }else{
      if(usu === usuario && pass === contrseña && captch === total){
        seLogon("true");
        document.getElementById("form_login").style.display = "none";
        alert("Sesion iniciada")
        
      
      }else{
        seLogon("false");
        alert("Error De usuario y/o contraseña");
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

              <p>Username</p>
              <div className='botones'>
                      <input type="text"  id='txtusu' className="txtus"  onChange={ (e) => setUsu(e.target.value) }/>
              </div>

              <p>Password</p>
              <div className='botones'>
                      <input type="password"  id='txtpass' className="txtpa" onChange={ (e) => setPass(e.target.value) }/>
              </div> 

              <h5>Seguridad Captcha <br />   Ingrese el ultimo numero de tu Usuario y <br /> el primero de tu Contraseña</h5>
              

              <div className='captcha'>
                <input type="text"  id='captc' className="cap"  onChange={ (e) => setCaptch(e.target.value) }/>
              </div>

              
              <div className='botones'>
                    <input type="submit" className="env" value="Login" onClick={ iniciarsesion }/>                    
              </div>

            </form>


    </div>
      
 )
}

export default Login