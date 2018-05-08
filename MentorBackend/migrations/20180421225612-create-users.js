'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: Sequelize.STRING, 
      email: {
        type: Sequelize.STRING, 
        allowNull: false,
        validate: {
            isEmail: true
        }
      },
      location: {
        type: Sequelize.STRING,
          allowNull: false,
          defaultValue: "unkown"
      },
      yearsExperience: {
        type: Sequelize.INTEGER
      },
      industry: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
          type: Sequelize.STRING,
          allowNull: false
      },
      phone: {
          type: Sequelize.STRING,
          allowNull: false
      },
      currentJob: {
          type: Sequelize.STRING,
          allowNull: false
      },
      company: {
          type: Sequelize.STRING, 
          allowNull: true
      },
      isMentor: {
          type:Sequelize.BOOLEAN,
          defaultValue: false
      },
      isMentee: {
          type: Sequelize.BOOLEAN,
          defaultValue: false
      },
      gitHub: {
          type: Sequelize.STRING,
          allowNull: true
      },
      linkedIn: {
        type: Sequelize.STRING,
        allowNull: true
      },
      website: {
        type: Sequelize.STRING,
        allowNull: true
      },
      img: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYYmnz1t3TxqNXf7E11sIPdQvjG3VUkXxGWBu1SIVkcTTKObHI"
      },
      isActive: {
          type: Sequelize.BOOLEAN,
          defaultValue: true
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
    return queryInterface.dropTable('users');
  }
};