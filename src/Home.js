import React , {useState}  from 'react';
import TodoChore from '/chores.js'


function Home() {

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
    <div> 
    <div className="ToDoList-Block">
          <h class="ToDoList-Text"> TODO LIST </h>
        </div> 
        <form className="Submission-Block">
          <input value={input} onChange={(event) => {setInput(event.target.value)}} type="text" id="ToDoListItem" name="item" placeholder="enter text..."></input>
          <button type="button" className="Submit-Button" onClick={addChore}> Submit </button>
        </form>
        <div className="chores">
                {chores.map((chore, index) => (
                    <TodoChore
                        key={index}
                        id={index}
                        chore={chore}
                        onCheck={removeChore}
                    />
                ))}
         </div>
    </div>
  );
}

export default Home;