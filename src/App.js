import React, { Component } from 'react';
import './App.css';
import Tasks from './components/tasks';
import ActiveTask from './components/activetask';

class App extends Component {

  state = {
    tasks: ['Item 1', 'Item 2', 'Item 3'],
    activeTask: null
  }

  selectTask(task) {
    this.setState({
      activeTask: task
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Tasks Manager</h2>
        </div>
        <Tasks tasks={this.state.tasks} selectTask={this.selectTask.bind(this)} />
        <ActiveTask task={this.state.activeTask} />
      </div>
    );
  }
}

export default App;
