import React, { useState } from 'react'
import './App.css'
import Logo from './assets/Logo.png'



function App() {
  const [date, setDate] = useState("")
  const [theDay, setTheDay] = useState("")


  const calculateDate = () =>{
    console.log(date);
    
    var birthDate = new Date(date);
    var gestationPeriod = 38 * 7 * 24 * 60 * 60 * 1000;
    var conceptionDate = new Date(birthDate.getTime() - gestationPeriod);
    var year = conceptionDate.getFullYear();
    var month = (conceptionDate.getMonth() + 1).toString().padStart(2, "0"); 
    var day = conceptionDate.getDate().toString().padStart(2, "0");
    
    if(isNaN(year)){
      setTheDay("Please choose the date.")
      return
    }
    setTheDay(`${year}-${month}-${day}`);
  }

    return (
    <>
         <div>
         <img style={{width:"250px", borderRadius:"180px"}} src={Logo} alt="Logo" />

          <h1>Select Your BirthDay</h1>
            <input  style={{width:"auto", fontSize:"50px"}} type="date" onChange={(e)=>{
              setDate(e.target.value);
            }}/>
            <br/>
            <br/>
            <br/>
            <button onClick={calculateDate}>Find Out</button>
            <h1>The Day You Won The Race</h1>
            <h1>🎉 {theDay} 🥳</h1>
         </div>
        
    </>
  )
}

export default App
