export default class {
    constructor({
        lastName = '',
        firstName = '',
        position = 'teacher'
    }) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.position = position;
    }

    get info() {
        return Object.assign({},
            this.lastName,
            this.firstName,
            this.position);
    }
}