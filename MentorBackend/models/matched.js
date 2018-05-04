'use strict';
module.exports = (sequelize, DataTypes) => {
  var matched = sequelize.define('matched', {
    relationship: DataTypes.STRING,
    matchId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  matched.associate = function(models) {
    // associations can be defined here
  };
  return matched;
};