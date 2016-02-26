import Positions from 'teacherPositions/collection';
import expect from 'expect';
import Position from 'teacherPositions/model';
import deepFreeze from 'deep-freeze';

//TODO: get rid of switch
const teacherPositions = (state = {
    isFetching: false,
    isError: false,
    data: new Positions(),
    editing: new Set()
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
        case 'DELETE_POSITION':
            {
                state.data.delete(action.data);

                return Object.assign({},
                    state, {
                        data: new Positions(...state.data.array)
                    }
                );
            }
        case 'ADD_EDITING':
            {
                state.editing.add(action.id);
                return Object.assign({},
                    state);
            }
        case 'DELETE_EDITING':
            {
                state.editing.delete(action.id);
                return Object.assign({},
                    state);
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
            data: new Positions({ name: 'teacher', shortName: 'teach.' }, { name: 'assistent', shortName: 'assist.' })
        };

    expect(teacherPositions(stateBefore, action)).toEqual(stateAfter);
};

const testDelete = () => {
    var stateBefore = {
            isFetching: false,
            isError: false,
            data: new Positions({ id: 1, name: 'teacher', shortName: 'teach.' }, { id: 2, name: 'assistent', shortName: 'assist.' })
        },
        stateAfter = {
            isFetching: false,
            isError: false,
            data: new Positions({ id: 2, name: 'assistent', shortName: 'assist.' })
        },
        action = {
            type: 'DELETE_POSITION',
            data: new Position({ id: 1, name: 'teacher', shortName: 'teach.' })
        },
        result = teacherPositions(stateBefore, action);

    expect(result).toEqual(stateAfter);
};

testRequestPositions();
testErrorResponse();
testResponseSuccessful();
testAddNew();
testDelete();
export default teacherPositions;
