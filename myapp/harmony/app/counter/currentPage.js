export default (state = 'teachers', action) => {
    let result = state,
        actions = {
            GOTO_PAGE: () => {
                result = action.name;
            }
        };

    if (actions[action.type]) {
        actions[action.type]();
    }

    return result;
};