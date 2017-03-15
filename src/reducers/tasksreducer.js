import { FETCH_TASKS, ADD_TASK } from '../actions';

export const tasksReducer = (state = [], action) => {
  switch(action.type) {
    case FETCH_TASKS:
      return action.payload.slice(0,10);
    case ADD_TASK:
      console.log(action.payload);
      return [...state, action.payload];
    default:
      return state;
  }

}
