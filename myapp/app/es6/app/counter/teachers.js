export default (state = new Collection(), action) => {
    switch (action.type) {
        case 'ADD_TEACHER': {
            let people = [...state.array, action.teacher];
            return new Collection(people);
        }
        default: return state;
    }
};