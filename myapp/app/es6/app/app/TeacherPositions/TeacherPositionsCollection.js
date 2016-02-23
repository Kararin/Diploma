import TeacherPosition from './TeacherPositionsModel';

export default class {
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
}

//TODO: ine base class