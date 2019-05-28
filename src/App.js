import React, { Component } from 'react';
import logo from './logo.svg';

import TodoList from './components/TodoList';
import TodoBox from './components/TodoBox';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ['This is my first thing to do!'],
    };
    this.addTodo = this.addTodo.bind(this);
    this.delTodo = this.delTodo.bind(this);
  }
  addTodo(todos) {
    this.setState({
      todos: [...this.state.todos, todos],
    });
  }
  delTodo(todos, index) {
    const arr = [...todos];
    arr.splice(index, 1);
    this.setState({
      todos: [...arr],
    });
  }
  render() {
    const { todos } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <TodoBox todosLength={todos.length} onAddTodo={this.addTodo} />
          <TodoList onDelTodo={this.delTodo} todos={todos} />
        </main>
      </div>
    );
  }
}

export default App;
