import './App.css';
import { useState} from "react";

//Change the Color of the Text for Responsive windows
function App() {

  let [initial,setChange] = useState(0);

 
  
   const increaseFunction = () =>{
    setChange(initial+1) 
 
   }

   const DecreaseFunction =() =>{
     setChange(initial-1)
   }
  
   const setToZero =() =>{
    setChange(0);
   }

  return(
    <div className="App">

      <h1>{initial}</h1>

      <button onClick={increaseFunction}>
      Increase
      </button> 
       
      <button onClick={DecreaseFunction}>
        Decrease
      </button>

      <button onClick={setToZero}>Set To Zero</button>
    </div>
  );
 
}


export default App;
