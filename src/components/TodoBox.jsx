import React, { Component } from 'react';
import injectSheet from 'react-jss';

const styles = {
  box: {
    'max-width': '1200px',
    margin: '20px 20px 0',
  },
  addArea: {
    width: '100%',
    display: 'flex',
    'align-items': 'center',
    'justify-content': 'space-between',
  },
  label: {
    'font-size': '14px',
    color: '#666',
    'margin-right': '8px',
  },
  textInput: {
    padding: '6px 8px',
    border: '1px solid #d9d9d9',
    'border-radius': '4px',
    'font-size': '14px',
    outline: 'none',
  },
  btn: {
    padding: '4px 6px',
    'background-color': '#61dafb',
    outline: 'none',
    border: '1px solid #d9d9d9',
    'border-radius': '4px',
    color: '#333',
    'font-weight': 'bold',
  },
  desp: {
    'text-align': 'right',
    'font-size': '12px',
  },
  strong: {
    color: '#f00',
    'font-weight': 'bold',
    margin: '0 4px',
  },
};

class TodoBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  handleSubmit(event) {
    this.props.onAddTodo(this.textInput.value);
    event.preventDefault();
    this.textInput.value = '';
  }

  render() {
    const { classes } = this.props;
    return (
      <form className={classes.box} onSubmit={event => this.handleSubmit(event)}>
        <div className={classes.addArea}>
          <div className={classes.left}>
            <label className={classes.label}>添加事项</label>
            <input
              className={classes.textInput}
              autoFocus
              type="text"
              placeholder="请输入待办事项"
              onChange={event => this.handleChange(event)}
              ref={textInput => {
                this.textInput = textInput;
              }}
            />
          </div>
          <button className={classes.btn} type="submit">
            添加
          </button>
        </div>
        <p className={classes.desp}>
          已有
          <i className={classes.strong}>{this.props.todosLength}</i>
          条待办事项
        </p>
      </form>
    );
  }
}

export default injectSheet(styles)(TodoBox);
