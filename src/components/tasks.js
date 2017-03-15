import React, { Component } from 'react'
import TaskItem from '../components/taskitem'

class Tasks extends Component {

  taskitems() {
    return this.props.tasks.map((task) => {
      return <TaskItem key={task} task={task} selectTask={this.props.selectTask} />
    });
  }

  render() {
    return (
      <ul>
        {this.taskitems()}
      </ul>
    )
  }

}

export default Tasks;
