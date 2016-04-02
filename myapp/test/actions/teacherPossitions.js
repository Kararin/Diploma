import expect from 'expect';
import * as actions from '../../app/es6/app/actions/teacherPositions';
import {List} from 'immutable';

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
