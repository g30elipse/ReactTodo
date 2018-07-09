import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// COMPONENTS
import NewTodo from './components/newTodo';
import Todos from './components/todos';
import Filter from './components/visibilityFilter';

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: [],
      filter: 'ALL'
    }
    this.addTodo = this.addTodo.bind(this)
    this.controlHandler = this.controlHandler.bind(this)
    this.setVisibilityFilter = this.setVisibilityFilter.bind(this)
  }


  // ADD A NEW TODO
  addTodo(todo) {
    if (todo.body !== "") {
      this.setState({
        todos: this.state.todos.concat(todo),
      })
    } else {
      alert("cannot be empty")
    }
  }


  // CONTROLLER FOR DELETE and DONE 
  controlHandler(type, id) {
    switch(type) {
      case 'DEL':
        this.setState({
          todos: this.state.todos.filter((todo, i) => (
            id !== todo.id
          ))
        })
        break

      case 'DONE':
        let temp = this.state.todos.find(todo => todo.id === id)
        const index = this.state.todos.indexOf(temp)
        temp = this.state.todos
        temp[index].isDone = !temp[index].isDone
        this.setState({
          todos: temp
        })  

        break
      default:
    }
  }

  setVisibilityFilter(filter) {
    this.setState({ filter })
  }


  render() {
    return (
      <div className="App">
      
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Todo</h1>
          <h4>created using React</h4>
        </header>

        
        <div className="App-content">
          <NewTodo handler={this.addTodo}/>
          <Filter handler={this.setVisibilityFilter}/>
          <hr />
          <Todos data={this.state.todos} filter={this.state.filter} controlHandler={this.controlHandler}/>
        </div>
      </div>
    );
  }
}

export default App;
