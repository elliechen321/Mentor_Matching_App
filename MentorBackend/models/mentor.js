'use strict';
module.exports = (sequelize, DataTypes) => {
  var mentor = sequelize.define('mentor', {
    userId: DataTypes.INTEGER,
    isActive: { 
      type:DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {});
  mentor.associate = function(models) {
    // associations can be defined here
    
  };
  return mentor;
};