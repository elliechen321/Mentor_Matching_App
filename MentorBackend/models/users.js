'use strict';
module.exports = (sequelize, DataTypes) => {
    var users = sequelize.define('users', {
        // github and linkedin
        //src for img 
        // website 
        // years of experience 
        fullName: DataTypes.STRING,

        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            }
        },
        facebook: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
        },
        location: {
            type: DataTypes.STRING,
            validate: {
                len: [0, 100]
            },
            defaultValue: "unkown"
        },
        phone: {
            type: DataTypes.STRING,
        },
        currentJob: {
            type: DataTypes.STRING,
        },
        company: {
            type: DataTypes.STRING,
            allowNull: true
        },
        yearsExperience: {
            type: DataTypes.INTEGER
        },
        isMentor: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        isMentee: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        industry: {
            type: DataTypes.STRING,
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
    users.associate = function (models) {

        users.hasMany(models.webDev,
            { foreignKey: 'userId', onDelete: "cascade" });

        users.hasMany(models.matched,
            { foreignKey: 'userId', onDelete: "cascade" });

    };

    return users;
};