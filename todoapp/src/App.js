import React, { Component } from 'react';
import Todos from './ToDos';
import AddForm from './AddForm'


class  App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play mario cart'},
    ]
  }
  addTodo = (todo) => {
    // set id to the new element 
    todo.id = Math.random();
    //cloning the state array (using spread operator) and adding the new elent to it 
    //because we don't want to editing the state outside of the setState
    let newArray = [...this.state.todos, todo]

    // console.info(newArray);
    // then inside the setstate we are taking the new ninjas 
    //properties and assigning them to the ninjas array value
    this.setState({
      todos: newArray
    })
  }
  deleteTodo = (id) => {
    let todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todos
      // todos: todos
    })
  }
  render(){
    return (
      <div className="App container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>

        <AddForm  addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
