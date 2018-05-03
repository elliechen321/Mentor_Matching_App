'use strict';
module.exports = (sequelize, DataTypes) => {
  var webDev = sequelize.define('webDev', {
    userId: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    javascript: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    python: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    reactJS: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    node: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    express: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    sql: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    html: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    css: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    mongoDB: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    angular: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    restAPI: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    ruby: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    php: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    go: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    meteor: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    wordpress: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    net: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    ember: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    backbone: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
  }, {});
  webDev.associate = function(models) {
    webDev.belongsTo(models.users)
    // associations can be defined here
  };
  return webDev;
};