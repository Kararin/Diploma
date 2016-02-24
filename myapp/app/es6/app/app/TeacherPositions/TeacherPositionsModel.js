import expect from 'expect';

export default class TeacherPosition {
    constructor({
        name = '',
        shortName = ''
    }) {
        this.id = Date.now();
        this.name = name;
        this.shortName = shortName;
    }

    get data() {
        return Object.assign({
            id: this.id,
            name: this.name,
            shortName: this.shortName
        });
    }
}

//TODO: test without ids
// const testGetData = () => {
//     var position = new TeacherPosition({
//             name: 'teacher',
//             shortName: 'teach.'
//         }),
//         data = {
//             name: 'teacher',
//             shortName: 'teach.'
//         };

//     expect(position.data).toEqual(data);
// };

// testGetData();