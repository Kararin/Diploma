import TeacherPosition from './TeacherPositionsModel';
import expect from 'expect';

export default class TeacherPositions {
    constructor(...positions) {
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

    push(position) {
        var resultPosition = position;

        if (!(position instanceof TeacherPosition)) {
            resultPosition = new TeacherPosition(position);
        }

        this.positions.push(resultPosition);
    }

    delete(positionToDelete) {
        var cb = (element) => {
            return element.id === positionToDelete.id;
        },
            indexToDelete = this.positions.findIndex(cb);
            console.log(indexToDelete);

        this.positions.splice(indexToDelete, 1);
    }
}

//TODO: test all cases
