import React from "react";


const TodoItem = (props) => {
    const {todos , deletItem} = props;
    let length = todos.length
    const listitem = length ? todos.map(todo => {
        return (
            <div key={todo.id}>
                <span>{todo.title}</span>
                <button onClick={() => deletItem(todo.id)}>&#10005;</button>
            </div>
        ) 
    }): <p>there no todo yet</p>
    return (
        <div>
            todoitem
            {listitem}
        </div>
        
    )
}

export default TodoItem