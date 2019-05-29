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
      searchList: [],
    };
    this.addTodo = this.addTodo.bind(this);
    this.delTodo = this.delTodo.bind(this);
    this.search = this.search.bind(this);
  }
  addTodo(todos) {
    this.setState({
      searchList: [...this.state.searchList, todos],
      todos: [...this.state.todos, todos],
    });
  }
  delTodo(todos, index) {
    const arr = [...todos];
    arr.splice(index, 1);
    this.setState({
      todos: [...arr],
      searchList: [...arr],
    });
  }
  search(value) {
    const tmpArr = [...this.state.todos];
    const arr = tmpArr.filter(item => {
      return item.indexOf(value) > -1;
    });
    this.setState({
      searchList: [...arr],
    });
  }
  componentWillMount() {
    this.setState({
      searchList: [...this.state.todos],
    });
  }
  render() {
    const { todos, searchList } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <SearchBox onSearch={this.search} todos={todos} />
          <TodoBox todosLength={todos.length} onAddTodo={this.addTodo} />
          <TodoList onDelTodo={this.delTodo} todos={searchList} />
        </main>
      </div>
    );
  }
}

export default App;
