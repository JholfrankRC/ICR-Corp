import React, { useMemo, useState } from 'react'
import swal from 'sweetalert';
import '../assets/adivinanza.css'





export const Adivinanza = () => {

    const [Adivinanza, setAdivinanza] = useState('')
    const [count, setCount] = useState(1)  

    const [Mensaje, setMensaje] = useState('')
    
       const NumAleatorio =  useMemo(() => Math.floor(Math.random()*10) , [])    
       console.log(NumAleatorio)
    
    const Submit = (e) => {


        e.preventDefault();
        
        console.log(NumAleatorio)

        if(Adivinanza == NumAleatorio){
            swal({
                title:`Adivinaste en el intento ${count}`,
                icon:"success"
              })

            setMensaje(`Adivinaste en el intento ${count}`)
            
                document.getElementById("caja_menu").style.display = "none";

                
        }else{
            if(Adivinanza > 10 || Adivinanza < 0){
                
                setMensaje(`Estas fuera de los parametros`)
            }else{
                if(Adivinanza > NumAleatorio){
                    setMensaje(`Estas por encima`)
                }else{
                    if(Adivinanza < NumAleatorio){
                        setMensaje(`Estas por debajo`)
                    }
                }
            }
        }
        setCount(count + 1)
    }

  return (
      
    <div id="caja_menu">
        <div className='contmenu'>

            <div className='adivinanza'>
                <h2>Adivina el numero secreto [ 0 - 10 ]</h2>
                <form onSubmit={ Submit }>
                    <input type='number' className='adivinanza-input' value={ Adivinanza} onChange={(e)=> { setAdivinanza(e.target.value)}}/>
                    <input type='submit' className='adivinanza-input adivinanza-input2'/>

                </form>
                    
            {Mensaje}    
            </div>
        </div>    
    </div>        
  )
}
