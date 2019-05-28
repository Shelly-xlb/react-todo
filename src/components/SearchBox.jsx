import React, { Component } from 'react';
import injectSheet from 'react-jss';

const styles = {
  box: {
    'max-width': '1200px',
    margin: '20px 20px 0',
  },
  searchArea: {
    width: '90%',
    border: '1px solid #d9d9d9',
    margin: '0 auto',
    padding: '6px 8px',
    display: 'flex',
    'align-items': 'center',
    'justify-content': 'space-between',
  },
  textInput: {
    // border: '1px solid #f00', // 辅助线
    outline: 'none',
    width: '75%',
    'font-size': '14px',
    padding: '4px 6px',
  },
  btn: {
    'border-radius': '4px',
    color: '#555',
    'background-color': '#91e6fd',
    outline: 'none',
    border: 'none',
  },
};

class SearchBar extends Component {
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

  handleSearch(event) {
    this.props.onSearch(this.textInput.value);
    event.preventDefault();
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.box}>
        <div className={classes.searchArea}>
          <input
            className={classes.textInput}
            type="text"
            placeholder="Search......"
            onChange={event => this.handleChange(event)}
            ref={textInput => {
              this.textInput = textInput;
            }}
          />
          <button className={classes.btn} type="submit" onClick={event => this.handleSearch(event)}>
            搜索
          </button>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(SearchBar);
