import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers} from 'redux';
import teachers from './teachers/reducer';
import teacherPositions from './teacherPositions/reducer';
import days from './days/reducer';
import schedule from './schedule/reducer';
import dates from './myDates/reducer';
import exportReducer from './export/reducer';

const reducer = combineReducers({
        teacherPositions,
        teachers,
        days,
        schedule,
        dates,
        export: exportReducer
    }),
    store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;
