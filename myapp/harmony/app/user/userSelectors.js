export const userHasRight = (user, rightName) => {
    var right = user.rights.find(item => item.name === rightName);
    return right;
};