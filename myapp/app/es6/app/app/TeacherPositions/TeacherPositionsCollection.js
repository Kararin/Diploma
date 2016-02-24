import TeacherPosition from './TeacherPositionsModel';
import expect from 'expect';

export default class TeacherPositions {
    constructor(positions = []) {
        this.positions = this.addPositions(positions);
    }

    addPositions(positions) {
        let result = [];

        if (positions.length) {
            result = positions.map(position => {
                let resultPosition = position;

                if (!(position instanceof TeacherPosition)) {
                    resultPosition = new TeacherPosition(position);
                }

                return resultPosition;
            });
        }

        return result;
    }

    get array() {
        return this.positions.map(item => item.data);
    }
}

//TODO: test all cases
//TODO: ids?
// const testGetArray = () => {
//     var positions = new TeacherPositions([{
//             name: 'teacher',
//             shortName: 'teach.'
//         }]),
//         array = [{
//             name: 'teacher',
//             shortName: 'teach.'
//         }];
//     expect(positions.array).toEqual(array);
// };

// testGetArray();
//TODO: one base class
