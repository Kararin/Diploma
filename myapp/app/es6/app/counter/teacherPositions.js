import Positions from '../app/TeacherPositions/TeacherPositionsCollection';
import expect from 'expect';
import deepFreeze from 'deep-freeze';

//TODO: get rid of switch
const teacherPositions = (state = {
    isFetching: false,
    isError: false,
    data: new Positions()
}, action) => {
    switch (action.type) {
        case 'REQUEST_POSITIONS':
            {
                return Object.assign({},
                    state, { isFetching: true });
            }
        case 'RESPONSE_POSITIONS_ERROR':
            {
                return Object.assign({},
                    state, {
                        isFetching: false,
                        isError: true
                    });
            }
        case 'RESPONSE_POSITIONS_SUCCESS':
            {
                return Object.assign({},
                    state, {
                        isFetching: false,
                        isError: false,
                        data: new Positions(...action.data)
                    });
            }
        case 'ADD_NEW_POSITION':
            {
                return Object.assign({},
                    state, {
                        data: new Positions(...state.data.array, action.data)
                    }
                );
            }
        default:
            return state;
    }
};

const testRequestPositions = () => {
    let stateBegore = {
            isFetching: false,
            isError: false,
        },
        stateAfter = {
            isFetching: true,
            isError: false,
        },
        action = {
            type: 'REQUEST_POSITIONS'
        };

    deepFreeze(stateBegore);
    deepFreeze(action);

    expect(teacherPositions(stateBegore, action)).toEqual(stateAfter);
};

const testErrorResponse = () => {
    let stateBegore = {
            isFetching: true,
            isError: true,
        },
        stateAfter = {
            isFetching: false,
            isError: true,
        },
        action = {
            type: 'RESPONSE_POSITIONS_ERROR'
        };

    expect(teacherPositions(stateBegore, action)).toEqual(stateAfter);
};

const testResponseSuccessful = () => {
    var stateBegore = {
            isFetching: true,
            data: null
        },
        stateAfter = {
            isFetching: false,
            isError: false,
            data: new Positions({
                name: 'teacher',
                shortName: 'teach.'
            })
        },
        action = {
            type: 'RESPONSE_POSITIONS_SUCCESS',
            data: [{
                name: 'teacher',
                shortName: 'teach.'
            }]
        };

    expect(teacherPositions(stateBegore, action)).toEqual(stateAfter);
};

const testAddNew = () => {
    var stateBefore = {
            isFetching: false,
            isError: false,
            data: new Positions({ name: 'teacher', shortName: 'teach.' })
        },
        action = {
            type: 'ADD_NEW_POSITION',
            data: {
                name: 'assistent',
                shortName: 'assist.'
            }
        },
        stateAfter = {
            isFetching: false,
            isError: false,
            data: new Positions({ name: 'teacher', shortName: 'teach.' },
                                { name: 'assistent', shortName: 'assist.'})
        };

    expect(teacherPositions(stateBefore, action)).toEqual(stateAfter);

};

testRequestPositions();
testErrorResponse();
testResponseSuccessful();
testAddNew();
export default teacherPositions;
