export default class BaseModel {
    constructor ({
        isFetching,
        isError
    }) {
        this.isError = isError;
        this.isFetching = isFetching;
    }
}