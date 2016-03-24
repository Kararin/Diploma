import expect from 'expect';
import * as actions from '../../app/es6/app/actions/teacherPositions';
import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import {List} from 'immutable';
import {fetch} from 'isomorphic-fetch';

describe('teacherPositions actions', () => {
    it('responseSuccess action', () => {
        var posiions = [{
            id: 1,
            name: 'teach',
            shortName: 't.'
        }];
        const expectedAction = {
            type: 'RESPONSE_POSITIONS_SUCCESS',
            data: posiions
        };
        expect(actions.responseSuccess(posiions)).toEqual(expectedAction);
    });
});

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
    afterEach(() => {
        nock.cleanAll();
    });

    it('creates fetchPositions when fetching todos has been done', (done) => {
        nock('http://localhost:3333')
            .get('teacherPositions')
            .reply(200, {
                positions: [{
                    id: 1,
                    name: 'teach',
                    shortName: 't.'
                }]
            });

        const expectedActions = [{
            type: 'REQUEST_POSITIONS'
        }, {
            type: 'RESPONSE_POSITIONS_SUCCESS',
            data: [{
                    id: 1,
                    name: 'teach',
                    shortName: 't.'
                }]
        }];
        const store = mockStore({
            data: List(),
            isFetching: false,
            isError: false
        }, expectedActions, done);

        store.dispatch(actions.fetchPositions());
    });
});