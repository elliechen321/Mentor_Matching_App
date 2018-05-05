module.exports = {
    up: function(queryInterface, Sequelize) {
      // logic for transforming into the new state
    },
   
    down: function(queryInterface, Sequelize) {
        return queryInterface.dropTable('mentor');
        // logic for reverting the changes
    }
  }