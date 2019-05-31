'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
        */
        return queryInterface.bulkInsert('Todos', [{
            author: 1,
            title: 'title 1',
            text: 'text 1',
            status: 1
        }, {
            author: 1,
            title: 'title 2',
            text: 'text 2',
            status: 1
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
        */
        return queryInterface.bulkDelete('Todos', null, {});
    }
};
