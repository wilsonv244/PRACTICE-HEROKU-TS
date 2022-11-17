import React, { useState } from 'react'
import Mensaje from './Mensaje';

const Counter = () => {
    const [mensaje, setMensaje] = useState<string>("")
    const [counter, setCounter] = useState(0);
    const [value, setValue] = useState<number>(0)
    const incrementar = (numero:number = 1):void=>{
        console.log(numero)
        setCounter(counter+numero)
    }
    const cambiarValor = (e:any) =>{
        const mensaje:number = parseInt(e.target.value);
        setValue(mensaje)
    }
  return (
    <div className='mt-5'>
        <h3>UseSatate:</h3>
        <p>{counter}</p>
        <div className="input-group mb-3">
             <span className="input-group-text" id="basic-addon1">@</span>
            <input type="number" className='form-control w-10' placeholder='Escriba un numero' name='numero' onChange={cambiarValor}/>
        </div>
        <button className='btn btn-outline-primary mt-2' onClick={()=>incrementar(value)}>Realizar Click</button>
        <button className='btn btn-outline-primary mt-2 ml-5' onClick={()=>incrementar(value)}>Realizar Click</button>
    </div>
    
  )
}

export default Counter