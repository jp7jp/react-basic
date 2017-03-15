import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTask } from '../actions';

class AddTask extends Component {

  state = {
    title: ''
  }

  addTask(e) {
    e.preventDefault();
    this.props.addTask(this.state);
  }

  updateTaskValue(e) {
    this.setState({
      title: e.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.addTask.bind(this)}>
        <input type="text" value={this.state.title} onChange={this.updateTaskValue.bind(this)} />
        <button type="submit">Add Task</button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addTask: addTask
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(AddTask);
