import React, { Component } from 'react';
import { connect } from 'react-redux';

class ActiveTask extends Component {
  render() {
    const task = this.props.task;

    if (!task) {
      return <h1>Please select a task</h1>
    }

    return <h1>{this.props.task.title}</h1>
  }
}

function mapStateToProps(state) {
  return {
    task: state.activeTask
  }
}

export default connect(mapStateToProps)(ActiveTask);
