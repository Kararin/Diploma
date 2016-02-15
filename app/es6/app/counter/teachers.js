import {combineReducers} from 'redux';

let teacherId = 0;

const teachers = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TEACHER': {
            return [
            ...state,
            {
                name: action.name,
                id: teacherId++
            }];
        }
        default: return state;
    }
};

export default combineReducers({teachers});