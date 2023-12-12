import './App.css';
import { useEffect, useState } from "react";
import {TaskElement} from './component.js'

const catApi=fetch('https://cat-fact.herokuapp.com/facts/random')
  .then(response => response.json())
  .then(data => console.log(data.text))
  .catch(error => console.error(error));
function App() {



  const [addToArray,setTaskArray] = useState([]);
  const [createTask,setNewTask] = useState("");
  
  const taskCreation = (event) =>{
    setNewTask(event.target.value);
  }

  useEffect(() =>{
    console.log("mounted");
  })

  const addTask = () =>{
    setTaskArray([...addToArray,createTask]);
  }
  
  const deleteTask = (item) =>{
   const newVal = addToArray.filter((ele)=>{
       return ele !== item;
    })
    setTaskArray(newVal)
  }

  return(
    <div className="App">
        <div className="newTask">
            <input onChange={taskCreation}/>
            <button onClick={addTask}>ToDo</button>
            {catApi.text}
        </div>
        <div className="displayContent"> 
           {addToArray.map((ele)=>{
          
              return   <TaskElement item={ele} deleteTask={deleteTask} />
            })}
      </div>
    </div>
  );
 
}


export default App;
