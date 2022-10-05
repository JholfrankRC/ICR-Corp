import React, { useMemo, useState } from 'react'


const muyp = 0
const sobrep = 10

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


            setMensaje(`Adivinaste en el intento ${count}`)
            
                document.getElementById("caja_menu").style.display = "none";

                
        }else{
            if(Adivinanza < NumAleatorio){
                setMensaje('estas por debajo')
            }else{
                if(Adivinanza > NumAleatorio){
                    setMensaje('te pasaste')
            }else{
                if(Adivinanza < muyp){
                    setMensaje('Estas muy por debajo')
                }else{
                    if(Adivinanza > sobrep){
                        setMensaje('Te sobrepasaste')
                    }
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
