import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Registro from './Componentes/Registro'
import Envio from './Componentes/Registro/registro'

function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Prueba 1</h1>
      <Envio />
     {/* <Registro /> */}
    </>
  )
}

export default App