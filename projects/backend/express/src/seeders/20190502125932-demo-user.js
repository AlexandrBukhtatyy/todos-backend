'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
        */
        return queryInterface.bulkInsert('Users', [{
            firstName: 'Alex',
            lastName: 'Bukhtatyy',
            email: 'admin@mail.ru',
            password: 'f88c7ebe4740db59c873cecf5e1f18e3726a1ad64068a13d764b79028430ab0e'
        }, {
            firstName: 'John',
            lastName: 'Doe',
            email: 'user@mail.ru',
            password: 'f88c7ebe4740db59c873cecf5e1f18e3726a1ad64068a13d764b79028430ab0e'
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
        */
        return queryInterface.bulkDelete('Users', null, {});
    }
};
