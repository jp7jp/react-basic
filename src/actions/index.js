export function selectTask(book) {
  return {
    type: 'SELECT_TASK',
    payload: book
  };
}
