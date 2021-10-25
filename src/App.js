import { useState } from 'react'

const App = () => {

    const [color, setColor ] = useState('')
  
    const handleShow = (ev) => {

      if (c == 'red') {
        setColor(ev)
      }
       if (c == 'blue') {
        setColor(ev)
      }
       if ( c == 'yellow') {
        setColor(ev)
      }
    }
  
    return (
      <div className="Botones">
        <h2> Ejercicio 1React</h2>
        <br/>
        <button onClick={() => handleShow('red')} >rojo</button>
        <br />
        <button onClick={() => handleShow('blue')} >azul</button>
        <br />
        <button onClick={() => handleShow('yellow')} >amarillo</button>
        <br />
      
      <div className="color" style={{background: color}}></div>        
    
      </div>
    )
  }
  
  export default App