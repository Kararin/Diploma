import Teacher from './Teacher';

export default class {
    constructor(teachers = []) {
        this.teachers = this.addTeachers(teachers);
    }

    addTeachers(teachers) {
        return teachers.map(person => new Teacher(person));
    }

    get array() {
        return this.teachers.map(person => new Teacher(person));
    }
}
