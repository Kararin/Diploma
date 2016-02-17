import {createStore} from 'redux';
import teachers from './counter/teachers';
import {combineReducers} from 'redux';

const reducer = combineReducers({teachers}),
    store = createStore(reducer);

export default store;
