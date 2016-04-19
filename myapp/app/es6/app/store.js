import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers} from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import { routerReducer } from 'react-router-redux';

import teachers from './counter/teachers';
import teacherPositions from './counter/teacherPositions';

const reducer = combineReducers({
        teacherPositions,
        teachers,
        routing: routerReducer
    }),
    store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;
