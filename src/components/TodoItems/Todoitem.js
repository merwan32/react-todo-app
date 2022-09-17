import React from "react";
import './todoitem.css'

const TodoItem = (props) => {
    const {todos , deletItem , doneItem} = props;
    let length = todos.length
    const listitem = length ? todos.map(todo => {
        return (
            <div key={todo.id} className="todo">
                <button className={todo.completed ? "done":""} onClick={() => doneItem(todo.id)}>{todo.completed ?<>&#10003;</> :null}</button>
                <button className="delete" onClick={() => deletItem(todo.id)}>&#10005;</button>
                <span>{todo.title}</span>
            </div>
        ) 
    }): <p>there no todo yet</p>
    return (
        <div className="todos">
            {listitem}
        </div>
        
    )
}

export default TodoItem