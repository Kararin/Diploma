import Positions from '../app/TeacherPositions/TeacherPositionsCollection';
import expect from 'expect';
import deepFreeze from 'deep-freeze';

const teacherPositions = (state = {
    isFetching: false,
    isError: false,
    data: new Positions()
}, action) => {
    switch (action.type) {
        case 'REQUEST_POSITIONS': {
            return Object.assign({},
                state,
                {isFetching: true});
        }

        default: return state;
    }
};


const testRequestPositions = () => {
    let stateBegore = {
            isFetching: false,
            isError: false,
            data: new Positions()
        },
        stateAfter = {
            isFetching: true,
            isError: false,
            data: new Positions()
        },
        action = {
            type: 'REQUEST_POSITIONS'
        };

    deepFreeze(stateBegore);
    deepFreeze(action);

    expect(teacherPositions(stateBegore, action)).toEqual(stateAfter);

};

testRequestPositions();
export default teacherPositions;