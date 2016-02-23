export default class {
    constructor({
        name = '',
        shortName = ''
    }) {
        this.id = new Date().now();
        this.name = name;
        this.shortName = shortName;
    }
}