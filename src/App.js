import React, { useState } from 'react';
import TodoChore from "./chores.js";
import './App.css'; 

function App() {

  const [input , setInput] = useState("");
  const [chores, setChores] = useState([]);

  function addChore(event) {
    setChores(prevData => {
      return [...prevData , input];
    });

    setInput ("");
  }

  function removeChore(id) {
    setChores(prevData => {
      return prevData.filter((item,index) => {
        return index !== id;
      })
    });
  }
    

  return (
    <div className="App">
      
      <header className="Top-Bar">
        <ul>
          <li className="Title-Button"> TodoApp </li>
          <li className="Home-Button"> Home </li>
          <div className="Logistics-Block"> 
          <li className="Login-Button"> Login </li>
          <li className="Language-Button"> English </li>
          <img src="https://i.imgur.com/sC9nZbi.png" height="5" width="10" className="Down-Arrow"></img>
          </div>
        </ul>
      </header>
      
      <body>
        <div className="ToDoList-Block">
          <h class="ToDoList-Text"> TODO LIST </h>
        </div> 
        <form className="Submission-Block">
          <input onChange={(event) => {setInput(event.target.value)}} type="text" id="ToDoListItem" name="item" placeholder="enter text..."></input>
          <button type="button" className="Submit-Button" onClick={addChore}> Submit </button>
        </form>
        <div className="chores">
          <ul>
                {chores.map((chore, index) => (
                    <TodoChore
                        key={index}
                        id={index}
                        chore={chore}
                    />
                ))}
         </ul>

         </div>


      </body>

    </div>
  );
}

export default App;
