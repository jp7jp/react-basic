import { FETCH_TASKS } from '../actions';

export const tasksReducer = (state = [], action) => {
  switch(action.type) {
    case FETCH_TASKS:
      return action.payload.slice(0,10);
    default:
      return state;
  }

}
