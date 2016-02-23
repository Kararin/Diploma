import Teacher from 'model/Teacher';

export default class {
    constructor(teachers = []) {
        this.teachers = this.addTeachers(teachers);
    }

    addTeachers(teachers) {
        let result = [];

        if (teachers.length) {
            result = teachers.map(person => {
                let result = person;

                if (!(person instanceof Teacher)) {
                    result = new Teacher(person);
                }

                return result;
            });
        }

        return result;
    }

    push(teacher) {
        if (!(teacher instanceof Teacher)) {
            this.teachers.push(new Teacher(teacher));
        } else {
            this.teachers.push(teacher);
        }
    }

    get array() {
        return (this.teachers.length)?
                    this.teachers.map(person => new Teacher(person)):
                    [];
    }
}

//todo: write tests