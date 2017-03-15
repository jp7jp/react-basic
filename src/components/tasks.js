import React, { Component } from 'react';
import TaskItem from '../components/taskitem';
import { connect } from 'react-redux';

class Tasks extends Component {

  taskitems() {
    return this.props.tasks.map((task) => {
      return <TaskItem key={task.id} task={task} selectTask={this.props.selectTask} />
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

function mapStateToProps(state) {
  console.log(state.tasks.tasks);
  return {
    tasks: state.tasks
  };
}

export default connect(mapStateToProps)(Tasks);
