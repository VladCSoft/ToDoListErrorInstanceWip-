import React from "react";

function TodoChore({ id, chore, onCheck , removeChore}) {
    return (
        <>
        <li
            onClick={() => {onCheck(id)}}
        >
            {chore}  
        </li>
        </>
    )
}

export default TodoChore;