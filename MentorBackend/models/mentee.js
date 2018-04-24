'use strict';
module.exports = (sequelize, DataTypes) => {
  var mentee = sequelize.define('mentee', {
    userId: DataTypes.INTEGER,
    isActive: {
      type:DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {});
  mentee.associate = function(models) {
    // associations can be defined here
  };
  return mentee;
};