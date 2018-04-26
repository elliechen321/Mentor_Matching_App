'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('users', [{
      firstName: "Derrick",
      lastName: "Rose",
      email: "mvp@yahoo.com",
      password: "test",
      phone: "2193892889",
      currentJob: "fullstack developer",
      company: "Minnesota Timberwolves",
      isMentor: true,
      isMentee: true,
      isWebDev: true,
      isMobileDev: false,
      isQA: false,
      isActive: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: "Jack",
      lastName: "Bose",
      email: "hero@yahoo.com",
      password: "test",
      phone: "2193893389",
      currentJob: "server-side engineer",
      company: "xyz startups",
      isMentor: false,
      isMentee: true,
      isWebDev: true,
      isMobileDev: false,
      isQA: false,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: "Derrick",
      lastName: "Rose",
      email: "dflskdh@yahoo.com",
      password: "test",
      phone: "2193892889",
      currentJob: "Product Manager",
      company: "Hooli",
      isMentor: true,
      isMentee: false,
      isWebDev: true,
      isMobileDev: false,
      isQA: false,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: "Amber",
      lastName: "Smith",
      email: "amber@gmail.com",
      password: "Test",
      phone: "3128883908",
      currentJob: "UI designer",
      company: "711",
      isMentor: true,
      isMentee: true,
      isWebDev: true,
      isMobileDev: false,
      isQA: false,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: "Melonie",
      lastName: "Chose",
      email: "chose@yahoo.com",
      password: "329898test",
      phone: "3418892889",  
      currentJob: "SDET",
      company: "McDonald's",
      isMentor: true,
      isMentee: true,
      isWebDev: true,
      isMobileDev: false,
      isQA: false,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: "Mark",
      lastName: "Lopez",
      email: "lopez@yahoo.com",
      password: "sdsda",
      phone: "3418892889",  
      currentJob: "SDET",
      company: "McDonald's",
      isMentor: true,
      isMentee: true,
      isWebDev: true,
      isMobileDev: false,
      isQA: false,
      isActive: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
