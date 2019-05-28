import React, { Component } from 'react';
import logo from './logo.svg';

import TodoList from './components/TodoList';
import TodoBox from './components/TodoBox';

import './App.css';
import SearchBox from './components/SearchBox';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ['This is my first thing to do!'],
    };
    this.addTodo = this.addTodo.bind(this);
    this.delTodo = this.delTodo.bind(this);
    this.search = this.search.bind(this);
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
  // todo
  // 确保每一次搜索的 tmpArr 都是最原始的数组
  search(value) {
    const tmpArr = [...this.state.todos];
    const arr = tmpArr.filter(item => {
      return item.indexOf(value) > -1;
    });
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
          <SearchBox onSearch={this.search} todos={todos} />
          <TodoBox todosLength={todos.length} onAddTodo={this.addTodo} />
          <TodoList onDelTodo={this.delTodo} todos={todos} />
        </main>
      </div>
    );
  }
}

export default App;
