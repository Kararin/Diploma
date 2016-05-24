import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers} from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import { routerReducer } from 'react-router-redux';

import teachers from './teachers/reducer';
import teacherPositions from './teacherPositions/reducer';
import days from './days/reducer';
import schedule from './schedule/reducer';
import dates from './dates/reducer';

const reducer = combineReducers({
        teacherPositions,
        teachers,
        days,
        routing: routerReducer,
        schedule,
        dates
    }),
    store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;
