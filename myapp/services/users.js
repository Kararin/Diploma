'use strict';

var schema = require('../schemas/Users'),
    BaseService = require('./baseService'),
    roleService = require('./roles'),
    rightsService = require('./rights');

class User extends BaseService {
    checkUser(user) {
        return new Promise ((resolve, reject) => {
            var checkedUser,
                role;

            schema.getModelBy({name: user.name, password: user.pass})
                .then((user) => {
                    !user && reject();

                    if (user.id) {
                        checkedUser = user;
                        role = user.role;
                    }

                    !role && reject();

                    console.log(roleService);
                    return roleService.getModelBy({id: role});
                }).then(role => {
                    console.log(role);
                    console.log('here');
                    !role || !role.rights && reject();
                    var promises = role.rights.map(item => rightsService.getModelBy({id: item}));

                    return Promise.all(promises);
                }).then(rights => {
                    resolve({
                        id: checkedUser.id,
                        role: role,
                        rights: rights
                    });
                }).catch(error => reject);
            });
    }
}

module.exports = new User(schema);
