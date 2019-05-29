import React, { Component } from 'react';
import injectSheet from 'react-jss';

const styles = {
  box: {
    'max-width': '1200px',
    margin: '40px 20px 0',
  },
  label: {
    'font-size': '16px',
    color: '#666',
  },
  list: {
    padding: '8px 16px',
  },
  item: {
    'border-radius': '4px',
    'font-style': 'italic',
    color: '#444',
    display: ' flex',
    'align-items': 'center',
    'justify-content': 'space-between',
    'list-style': 'none',
  },
  textInput: {
    padding: '6px 8px',
    border: '1px solid #d9d9d9',
    'border-radius': '4px',
    'font-size': '14px',
    outline: 'none',
  },
  btn: {
    'font-size': '12px',
    color: '#11cbfd',
    outline: 'none',
    border: 'none',
    background: 'none',
  },
};

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: props.todos,
      isEdit: false,
      value: '',
    };
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  handleEdit(event) {
    this.setState({
      isEdit: true,
    });
    event.preventDefault();
  }

  handleCancel(event) {
    this.setState({
      isEdit: false,
    });
    event.preventDefault();
  }

  handleDelete(event, todos, index) {
    this.props.onDelTodo(todos, index);
    event.preventDefault();
  }

  render() {
    const { todos, classes } = this.props;
    return (
      <div className={classes.box}>
        <label className={classes.label}>待办事项列表</label>
        <ul className={classes.list}>
          {todos.map((todo, index) => (
            <li key={index} className={classes.item}>
              {this.state.isEdit ? (
                <input
                  className={classes.textInput}
                  type="text"
                  onChange={event => this.handleChange(event)}
                  ref={textInput => {
                    this.textInput = textInput;
                  }}
                />
              ) : (
                <span>{todo ? todo : ''}</span>
              )}
              <span>
                {this.state.isEdit ? (
                  <span>
                    <button className={classes.btn}>确定</button>
                    <button className={classes.btn} onClick={event => this.handleCancel(event)}>
                      取消
                    </button>
                  </span>
                ) : (
                  <span>
                    <button className={classes.btn} onClick={event => this.handleEdit(event)}>
                      修改
                    </button>
                    <button
                      className={classes.btn}
                      onClick={event => this.handleDelete(event, todos, index)}
                    >
                      删除
                    </button>
                  </span>
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default injectSheet(styles)(TodoList);
