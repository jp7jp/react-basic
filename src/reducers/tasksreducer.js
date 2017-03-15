// const initialState = {
//   tasks: [
//     {id: 1, title: 'Item 1 from Reducer'},
//     {id: 2, title: 'Item 2 from Reducer'},
//     {id: 3, title: 'Item 3 from Reducer'}
//   ],
//   active_task: null
// }

const initialState = [
  {id: 1, title: 'Item 1 from Reducer'},
  {id: 2, title: 'Item 2 from Reducer'},
  {id: 3, title: 'Item 3 from Reducer'}
]

export const tasksReducer = (state = initialState, action) => {
  return state;
}
