import React , {Component} from "react";
import Addtodo from './components/Addtodo/addtodo'
import TodoItem from './components/TodoItems/Todoitem'
import './App.css'

class App extends Component{
  state = {
    todos : [
      {
        "id": 1,
        "title": "delectus aut autem",
        "completed": true
      },
      {
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
      },
      {
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
      },
      {
        "id": 4,
        "title": "et porro tempora",
        "completed": true
      },
      {
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
      },
      {
        "id": 6,
        "title": "qui ullam ratione quibusdam voluptatem quia omnis",
        "completed": false
      }
    ]
  }

  deletItem =(id)=> {
    let todos = this.state.todos;
    let t = todos.findIndex(todo => todo.id === id)
    todos.splice(t,1)
    this.setState(todos)

  }

  doneItem =(id)=> {
    let todos = this.state.todos;
    let t = todos.findIndex(todo => todo.id === id)
    todos[t].completed = !todos[t].completed
    console.log(todos[t].completed)
    this.setState(todos)

  }
  addItem = (item) => {
    let todos = this.state.todos
    item.id = Math.random()
    item.completed = false
    todos.push(item)
    this.setState({todos})
  }
  render(){
    return (
      <div className="App">
        <h3>TODO</h3>
        <div className="container">
          <Addtodo addItem={this.addItem}/>
          <TodoItem todos={this.state.todos} deletItem={this.deletItem} doneItem={this.doneItem} />  
        </div>
        
      </div>
    );
  }
  
}

export default App;
