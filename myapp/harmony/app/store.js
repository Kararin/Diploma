import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers} from 'redux';
import teachers from './teachers/reducer';
import teacherPositions from './teacherPositions/reducer';
import days from './days/reducer';
import schedule from './schedule/reducer';
import dates from './myDates/reducer';

const reducer = combineReducers({
        teacherPositions,
        teachers,
        days,
        schedule,
        dates
    }),
    store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;
