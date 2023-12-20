import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive");

  return (
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
          <button style={{backgroundColor:"Red", outlineColor: "blue"}} onClick={() =>setColor("red")}>
            Red
          </button>
          <button style={{backgroundColor:"green", outlineColor: "blue"}} onClick={() =>setColor("green")}>
            Green
          </button>
          <button style={{backgroundColor:"blue", outlineColor: "blue"}} onClick={() =>setColor("blue")}>
            Blue
          </button>
      </div>
     
  )
}

export default App
