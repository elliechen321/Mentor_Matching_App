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
      facebook: {
        type: Sequelize.STRING,
        unique: true
      },
      fullName: {
        type: Sequelize.STRING
      },

      email: {
        type: Sequelize.STRING, 
        validate: {
            isEmail: true
        }
      },
      location: {
        type: Sequelize.STRING,
          defaultValue: "unkown"
      },
      yearsExperience: {
        type: Sequelize.INTEGER
      },
      industry: {
        type: Sequelize.STRING,
              },
      password: {
          type: Sequelize.STRING,
                },
      phone: {
          type: Sequelize.STRING,
                },
      currentJob: {
          type: Sequelize.STRING,
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

