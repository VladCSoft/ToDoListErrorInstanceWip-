import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css'; 

function App() {

  const [value, setValue] = useState ('');


  const [chores, setChores] = useState ([{ title: '' }]);

  const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      
      addChore(value);
      setValue("");
  }

  const addChore = title => {
    const newChores = [...chores , title];
    setChores(newChores);
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
        <div className="Submission-Block">
          <input onChange={e => setValue(e.target.value)} type="text" id="ToDoListItem" name="item" placeholder="enter text..."></input>
          <button type="button" className="Submit-Button"> Submit </button>
          {chores.map((chore, index) => (
                            chore={chore} ,
                            index={index}
                        ))}
        </div>


      </body>

    </div>
  );
}

export default App;
