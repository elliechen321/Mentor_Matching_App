'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('webDevs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        unique: true
    
      },
      javascript: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      python: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      reactJS: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      node: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      express: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      sql: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      html: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      css: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      mongoDB: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      angular: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      restAPI: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      ruby: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      php: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      go: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      meteor: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      wordpress: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      net: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      ember: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      backbone: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('webDevs');
  }
};