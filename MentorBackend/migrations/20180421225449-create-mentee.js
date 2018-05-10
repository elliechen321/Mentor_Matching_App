module.exports = {
    up: function(queryInterface, Sequelize) {
      // logic for transforming into the new state
    },
   
    down: function(queryInterface, Sequelize) {
      // logic for reverting the changes
      return queryInterface.dropTable('mentee');
    }
  }