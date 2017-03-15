import React, { Component } from 'react';
import TaskItem from '../components/taskitem';
import { selectTask, fetchTasks } from '../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Tasks extends Component {

  componentWillMount() {
    this.props.fetchTasks();
  }

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
  return {
    tasks: state.tasks
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchTasks: fetchTasks,
    selectTask: selectTask
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
