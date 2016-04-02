import expect from 'expect';
import reducer, {teacherPositionOptions} from '../../app/es6/app/counter/teacherPositions';
import {
    List
} from 'immutable';

describe('teacherPosition reduser', () => {
    it('should return the initial state', () => {
        var nextState = {
            data: List(),
            isFetching: false,
            isError: false,
            options: {
                isAddNewOpen: false
            }
        };
        expect(
            reducer(undefined, {})
        ).toEqual(nextState);
    });

    it(`should add one value`, () => {
        var nextState = {
                data: List([{
                    id: 1,
                    name: 'teaher',
                    shortName: 'teach.'
                }]),
                isFetching: false,
                isError: false
            },
            initialState = {
                data: List(),
                isFetching: false,
                isError: false
            },
            action = {
                type: 'ADD_NEW_POSITION',
                data: {
                    id: 1,
                    name: 'teaher',
                    shortName: 'teach.'
                }
            };

        expect(reducer(initialState, action)).toEqual(nextState);
    });

    it(`shouldn't add empty value`, () => {
        var nextState = {
                data: List(),
                isFetching: false,
                isError: false
            },
            initialState = {
                data: List(),
                isFetching: false,
                isError: false
            },
            action = {
                type: 'ADD_NEW_POSITION',
                data: null
            };

        expect(reducer(initialState, action)).toEqual(nextState);
    });

    it('should add couple values value', () => {
        var nextState = {
                data: List([{
                    id: 1,
                    name: 'teaher',
                    shortName: 'teach.'
                }, {
                    id: 2,
                    name: 'expert',
                    shortName: 'exp.'
                }]),
                isFetching: false,
                isError: false
            },
            initialState = {
                data: List(),
                isFetching: false,
                isError: false
            },
            action = {
                type: 'ADD_NEW_POSITIONS',
                data: [{
                    id: 1,
                    name: 'teaher',
                    shortName: 'teach.'
                }, {
                    id: 2,
                    name: 'expert',
                    shortName: 'exp.'
                }]
            };

        expect(reducer(initialState, action)).toEqual(nextState);
    });

    it('should change to multi items data and finish request', () => {
        var initialState = {
                data: List([{
                    id: 2,
                    name: 'expert',
                    shortName: 'exp.'
                }]),
                isFetching: true,
                isError: false
            },
            nextState = {
                data: List([{
                    id: 1,
                    name: 'teaher',
                    shortName: 'teach.'
                }, {
                    id: 2,
                    name: 'expert',
                    shortName: 'exp.'
                }]),
                isFetching: false,
                isError: false
            },
            action = {
                type: 'RESPONSE_POSITIONS_SUCCESS',
                data: [{
                    id: 1,
                    name: 'teaher',
                    shortName: 'teach.'
                }, {
                    id: 2,
                    name: 'expert',
                    shortName: 'exp.'
                }]
            };

          expect(reducer(initialState, action)).toEqual(nextState);
    });

    it('should change to one item data and finish request', () => {
        var initialState = {
                data: List([{
                    id: 2,
                    name: 'expert',
                    shortName: 'exp.'
                }]),
                isFetching: true,
                isError: false
            },
            nextState = {
                data: List([{
                    id: 1,
                    name: 'teaher',
                    shortName: 'teach.'
                }]),
                isFetching: false,
                isError: false
            },
            action = {
                type: 'RESPONSE_POSITIONS_SUCCESS',
                data: [{
                    id: 1,
                    name: 'teaher',
                    shortName: 'teach.'
                }]
            };

          expect(reducer(initialState, action)).toEqual(nextState);
    });

    it('shoud change options', () => {
        var initialState = {
                data: List([{
                    id: 2,
                    name: 'expert',
                    shortName: 'exp.'
                }]),
                isFetching: true,
                isError: false,
                options: {
                    isAddNewOpen: true
                }
            },
            nextState = {
                data: List([{
                    id: 2,
                    name: 'expert',
                    shortName: 'exp.'
                }]),
                isFetching: true,
                isError: false,
                options: {
                    isAddNewOpen: false
                }
            },
            action = {
                type: 'IS_ADD_NEW_POSITION_PAGE_OPEN',
                isOpen: false
            };

        expect(reducer(initialState, action)).toEqual(nextState);
    });
});

describe('teacherPositionOptions subreduces', () => {
    it('should return initialState', () => {
        var initialState = {
            isAddNewOpen: false
        };

        expect(teacherPositionOptions(undefined, {})).toEqual(initialState);
    });

    it('should change visible Add new position page to true', () => {
        var initialState = {
            isAddNewOpen: false
        },
        nextState = {
            isAddNewOpen: true
        },
        action = {
            type: 'IS_ADD_NEW_POSITION_PAGE_OPEN',
            isOpen: true
        };

        expect(teacherPositionOptions(initialState, action)).toEqual(nextState);
    });

    it('should change visible Add new position page to false', () => {
        var initialState = {
            isAddNewOpen: true
        },
        nextState = {
            isAddNewOpen: false
        },
        action = {
            type: 'IS_ADD_NEW_POSITION_PAGE_OPEN',
            isOpen: false
        };

        expect(teacherPositionOptions(initialState, action)).toEqual(nextState);
    });
});