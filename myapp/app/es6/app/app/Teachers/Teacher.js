let id = 0;

export default class {
    constructor({
        lastName = '',
        firstName = '',
        position = 'teacher',
    }) {
        this.id = id++;
        this.lastName = lastName;
        this.firstName = firstName;
        this.position = position;
    }

    get info() {
        return Object.assign({},
            this.lastName,
            this.firstName,
            this.position,
            this.id);
    }

    get fullName() {
        return `${this.lastName} ${this.firstName}`;
    }
}

//TODO: change names