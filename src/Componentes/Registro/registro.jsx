import { useState } from "react"
import Mostrar from "../view";



const Envio = () =>{

    const[dateInput, setDateInput] = useState('')
    const [datos, setDatos] = useState([]);

    const handlenInput = (e) =>{
        setDateInput(e.target.value)
    }

    const registro = () =>{
        setDatos([...datos, dateInput])
        setDateInput('')
    }


    return(
        <>
            <div>
                <input type="text" value={dateInput} onChange={handlenInput} />
                <button onClick={registro}>Enviar</button>
            </div>
            <Mostrar datos={datos}/>
        </>
    )
}

export default Envio