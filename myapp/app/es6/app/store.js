import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware} from 'redux';
import { combineReducers } from 'redux';

import teachers from './counter/teachers';
import teacherPositions from './counter/teacherPositions';

const reducer = combineReducers({
        teacherPositions,
        teachers
    }),
    store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;
