import expect from 'expect';
import reducer, {teacherPositionOptions} from '../../harmony/app/teacherPositions/reducer';
import {
    List,
    Set
} from 'immutable';

describe('teacherPosition reduser', () => {
    it('should return the initial state', () => {
        var nextState = {
            data: List(),
            isFetching: false,
            isError: false,
            options: {
                editing: Set()
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
});