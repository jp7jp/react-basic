import React, { Component } from 'react';

class TaskItem extends Component {

  onSelectTask() {
    this.props.selectTask(this.props.task);
  }

  render() {
    return <li onClick={this.onSelectTask.bind(this)}>{this.props.task.title}</li>
  }
}

export default TaskItem;
