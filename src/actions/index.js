export const SELECT_TASK = 'SELECT_TASK';
export const FETCH_TASKS = 'FETCH_TASKS';
export const ADD_TASK = 'ADD_TASK';

export function selectTask(task) {
  return {
    type: SELECT_TASK,
    payload: task
  };
}

export function fetchTasks() {

  const request = fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json());

  return {
    type: FETCH_TASKS,
    payload: request
  }
}

export function addTask(props) {

  const request = fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(props)
    })
    .then(response => response.json());

  return {
    type: ADD_TASK,
    payload: request
  }
}
