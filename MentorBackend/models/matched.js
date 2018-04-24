'use strict';
module.exports = (sequelize, DataTypes) => {
  var matched = sequelize.define('matched', {
    mentorId: DataTypes.INTEGER,
    menteeId: DataTypes.INTEGER
  }, {});
  matched.associate = function(models) {
    // associations can be defined here
  };
  return matched;
};