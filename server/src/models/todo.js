'use strict';
module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    title: DataTypes.STRING,
    text: DataTypes.TEXT,
    author: DataTypes.INTEGER,
    status: DataTypes.INTEGER
  }, {});

  Todo.associate = function(models) {
    Todo.belongsTo(models.User, {
      foreignKey: 'id',
      as: 'author_id'
    });
  };
  
  return Todo;
};