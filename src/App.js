import { useState } from 'react'

const App = () => {

    const [color, setColor ] = useState('')
  
    const handleShow = (c) => {

      if (c == 'red') {
        setColor(c)
      }
       if (c == 'blue') {
        setColor(c)
      }
       if ( c == 'yellow') {
        setColor(c)
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