export const SELECT_TASK = 'SELECT_TASK';
export const FETCH_TASKS = 'FETCH_TASKS';

export function selectTask(book) {
  return {
    type: SELECT_TASK,
    payload: book
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
