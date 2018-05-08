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
        type: DataTypes.INTEGER,
        allowNull: false
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
    gitHub: {
        type: DataTypes.STRING,
        allowNull: true
    },
    linkedIn: {
        type: DataTypes.STRING,
        allowNull: true
    },
    website: {
        type: DataTypes.STRING,
        allowNull: true
    },
    img: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYYmnz1t3TxqNXf7E11sIPdQvjG3VUkXxGWBu1SIVkcTTKObHI"

    },
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }

}, {});
  users.associate = function(models) {
    

    users.hasMany(models.webDev,
        {foreignKey: 'userId', onDelete: "cascade"});
    
    users.hasMany(models.matched,
        {foreignKey: 'userId', onDelete: "cascade"});
   
};
  
  return users;
};