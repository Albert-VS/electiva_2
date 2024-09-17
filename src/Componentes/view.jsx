import styled from "styled-components";


const Vista = styled.div`
    width: 300px;
    height: auto;
    border: 2px dotted #fff;
`

const ListaEstilizada = styled.ul`
    list-style: none;
display: flex;
justify-content: center;
`
const LiEstilizado = styled.li`
    font-size: 20px;
    border: 2px solid #000;
    text-align: center;
    padding: 10px;
    border-radius: 15px;
    background-color: transparent;
`

const Mostrar = ({ datos }) => {
    return (
        <Vista>
            {
                datos.map((e) => {
                    return (
                        <ListaEstilizada>
                            <LiEstilizado>
                                {e}
                            </LiEstilizado>
                        </ListaEstilizada>
                    )
                })
            }
        </Vista>
    )
}


export default Mostrar;