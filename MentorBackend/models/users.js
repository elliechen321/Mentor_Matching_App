'use strict';
module.exports = (sequelize, DataTypes) => {
  var users = sequelize.define('users', {
// github and linkedin
//src for img 
// website 
// years of experience 
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING, 
    email: {
        type: DataTypes.STRING, 
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [0,100]
        },
        defaultValue: "unkown"
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    currentJob: {
        type: DataTypes.STRING,
        allowNull: false
    },
    company: {
        type: DataTypes.STRING, 
        allowNull: true
    },
    yearsExperience: {
        type: DataTypes.INTEGER
    },
    isMentor: {
        type:DataTypes.BOOLEAN,
        defaultValue: false
    },
    isMentee: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    industry: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }

}, {});
  users.associate = function(models) {
    
    users.hasMany(models.webDev, 
        {foreignKey: 'userId', onDelete: "cascade"});
    // associations can be defined here
  };
  return users;
};