let teacherId = 0;

export default (state = [], action) => {
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
