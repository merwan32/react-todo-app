import React , {Component} from "react";
import Addtodo from './components/Addtodo/addtodo'
import TodoItem from './components/TodoItems/Todoitem'

class App extends Component{
  state = {
    todos : [
      {
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
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
        <h3>to list</h3>
        <TodoItem todos={this.state.todos} deletItem={this.deletItem}/>
        <Addtodo addItem={this.addItem}/>
      </div>
    );
  }
  
}

export default App;
