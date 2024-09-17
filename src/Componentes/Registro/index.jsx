import { useState } from "react";
import VistaDatos from "../VistaDatos";

const Registro = () => {
    const [datos, setDatos] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const registro = () => {
        setDatos([...datos, inputValue]);
        setInputValue("");
    };

    const eliminarDato = (index) => {
        const nuevosDatos = datos.filter((_, i) => i !== index);
        setDatos(nuevosDatos);
    }

    return (
        <>
            <input 
                type="text" 
                placeholder="Ingresa un texto" 
                value={inputValue} 
                onChange={handleInputChange} 
            />
            <button onClick={registro}>Enviar</button>

            <VistaDatos datos={datos} onEliminar={eliminarDato}/>
        </>
    );
};

export default Registro;
