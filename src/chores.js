import React from "react";

function TodoChore({ id, chore, onCheck , removeChore}) {
    return (
        <div className = "Chores-Block">
            <img src="https://i.imgur.com/ybKIHhG.png" width="16" height="20" alt="Garbage-Bin" onClick={() => {onCheck(id)}}/> 
            {chore}
        </div>
    )
}

export default TodoChore;