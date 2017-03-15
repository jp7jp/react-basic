import React, { Component } from 'react';
import './App.css';
import Tasks from './components/tasks';
import ActiveTask from './components/activetask';
import AddTask from './components/addtask';

class App extends Component {

  state = {
    tasks: [],
    activeTask: null
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Tasks Manager</h2>
        </div>
        <Tasks />
        <ActiveTask />
        <AddTask />
      </div>
    );
  }
}

export default App;
