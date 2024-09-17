
const VistaDatos = ({datos, onEliminar}) => {
    return (
        <>
            <ul>
                {
                    datos.map((e, index) => {
                        const eliminarDato = () => {
                            onEliminar(index);
                        }

                        return (
                            <div key={index}>
                                <li>{e}</li>
                                <button onClick={eliminarDato}>X</button>
                            </div>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default VistaDatos;



