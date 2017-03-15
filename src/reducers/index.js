import { combineReducers } from 'redux';
import { tasksReducer } from './tasksreducer';
import { activeTaskReducer } from './activetaskreducer';

export default combineReducers({
  tasks: tasksReducer,
  activeTask: activeTaskReducer
});
