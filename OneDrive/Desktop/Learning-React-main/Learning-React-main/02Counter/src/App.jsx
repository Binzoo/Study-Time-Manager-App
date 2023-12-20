import { useState } from 'react';
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)

  //counter = 5;

  const  addValue = ()=>{
    if(counter >= 0 && counter < 20){
      counter = counter + 1;
      setCounter(counter);
    }
   
  }

  const minusValue = () =>{
    if(counter > 0 && counter < 20){
      counter = counter - 1;
      setCounter(counter); 
    }
  }
  
  return (
    <>
         <h1>Chai aur React</h1> 
         <h2>Counter Value: {counter}</h2>  

         <button
          onClick={addValue}
         >Add Value</button>
         <br />
         <button
          onClick={minusValue}
         >Remove Value</button>
    </>
  )
}

export default App
