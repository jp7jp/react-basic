import React, { Component } from 'react';
import './App.css';
import Tasks from './components/tasks';
import ActiveTask from './components/activetask';

class App extends Component {

  state = {
    tasks: [],
    activeTask: null
  }

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  //     .then(response => response.json())
  //     .then(data => {
  //       this.setState({
  //         tasks: data.slice(0, 10)
  //       });
  //     });
  // }

  // selectTask(task) {
  //   this.setState({
  //     activeTask: task
  //   });
  // }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Tasks Manager</h2>
        </div>
        <Tasks />
        <ActiveTask />
      </div>
    );
  }
}

export default App;
