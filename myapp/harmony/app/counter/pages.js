import expect from 'expect';
import deepFreeze from 'deep-freeze';

const pages = (
    state = {
        teachers: {}
    },
    action) => {
    var actions = {
            TOGGLE_ADD_PAGE: () => {
                var result = {
                    [action.pageName]: toggleAddPage(state[action.pageName], action)
                };
                return Object.assign({},
                    state,
                    result
                );
            }
        },
        result = state;

    if (actions[action.type]) {
        result = actions[action.type]();
    }

    return result;
};

const toggleAddPage = (
    state = {
        isAddShown: false
    }, action) => {
    var actions = {
            TOGGLE_ADD_PAGE: () => {
                return Object.assign({},
                    state, {
                        isAddShown: !state.isAddShown
                    }
                );
            }
        },
        result = state;

    if (actions[action.type]) {
        result = actions[action.type]();
    }

    return result;

};

const testToggleTeacherAddPage = () => {
    const stateBefore = {
            teachers: {
                isAddShown: false
            }
        },
        action = {
            type: 'TOGGLE_ADD_PAGE',
            pageName: 'teachers'
        },
        stateAfter = {
            teachers: {
                isAddShown: true
            }
        };

    deepFreeze(stateBefore);
    deepFreeze(action);
    expect(pages(stateBefore, action)).toEqual(stateAfter);
};

const testToggleTeacherAddPage1 = () => {
    const stateBefore = {
            teachers: {
                isAddShown: true
            }
        },
        action = {
            type: 'TOGGLE_ADD_PAGE',
            pageName: 'teachers'
        },
        stateAfter = {
            teachers: {
                isAddShown: false
            }
        };

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(pages(stateBefore, action)).toEqual(stateAfter);
};

testToggleTeacherAddPage();
testToggleTeacherAddPage1();

export default pages;
