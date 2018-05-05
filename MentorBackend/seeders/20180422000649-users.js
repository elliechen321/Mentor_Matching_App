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
      location: "Minneapolis",
      yearsExperience: 5,
      isMentor: true,
      isMentee: false,
      industry: 'mobileDev',
      gitHub: "www.github.com",
      linkedIn: "www.linkedin.com",
      website: "www.googl.com",
      isActive: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: "Rerrick",
      lastName: "Dose",
      email: "pmv@yahoo.com",
      password: "test",
      phone: "2193892889",
      currentJob: "fullstack developer",
      company: "Minnesota Timberwolves",
      location: "Minneapolis",
      yearsExperience: 7,
      isMentor: false,
      isMentee: true,
      industry: 'webDev',
      gitHub: "www.github.com",
      linkedIn: "www.linkedin.com",
      website: "www.googl.com",
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
      location: "Minneapolis",
      yearsExperience: 1,
      isMentor: false,
      isMentee: true,
      industry: 'webDev',
      gitHub: "www.github.com",
      linkedIn: "www.linkedin.com",
      website: "www.googl.com",
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: "Back",
      lastName: "Jose",
      email: "oerh@yahoo.com",
      password: "test",
      phone: "2193893389",
      currentJob: "server-side engineer",
      company: "xyz startups",
      location: "Minneapolis",
      yearsExperience: 7,
      isMentor: true,
      isMentee: true,
      industry: 'webDev',
      gitHub: "www.github.com",
      linkedIn: "www.linkedin.com",
      website: "www.googl.com",
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
      location: "Minneapolis",
      yearsExperience: 1,
      industry: 'webDev',
      gitHub: "www.github.com",
      linkedIn: "www.linkedin.com",
      website: "www.googl.com",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: "Samber",
      lastName: "Mith",
      email: "amber@gmail.com",
      password: "Test",
      phone: "3128883908",
      currentJob: "UI designer",
      location: "Minneapolis",
      yearsExperience: 4,
      company: "711",
      isMentor: true,
      isMentee: false,
      industry: 'webDev',
      gitHub: "www.github.com",
      linkedIn: "www.linkedin.com",
      website: "www.googl.com",
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: "Smber",
      lastName: "Amith",
      email: "Smber@gmail.com",
      password: "Test",
      phone: "3128833908",
      currentJob: "UI designer",
      company: "711",
      location: "Chicago",
      yearsExperience: 5,
      isMentor: false,
      isMentee: true,
      industry: 'webDev',
      gitHub: "www.github.com",
      linkedIn: "www.linkedin.com",
      website: "www.googl.com",
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
      location: "Minneapolis",
      yearsExperience: 9,
      isMentor: true,
      isMentee: true,
      industry: 'webDev',
      gitHub: "www.github.com",
      linkedIn: "www.linkedin.com",
      website: "www.googl.com",
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
      location: "Chicago",
      yearsExperience: 5,
      isMentor: true,
      isMentee: true,
      industry: 'webDev',
      gitHub: "www.github.com",
      linkedIn: "www.linkedin.com",
      website: "www.googl.com",
      isActive: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: "John",
      lastName: "Barkley",
      email: "est@yahoo.com",
      password: "test",
      phone: "219389239",
      currentJob: "Manager",
      company: "Facebook",
      location: "San Jose",
      yearsExperience: 5,
      isMentor: true,
      isMentee: false,
      industry: 'mobileDev',
      gitHub: "www.github.com",
      linkedIn: "www.linkedin.com",
      website: "www.googl.com",
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
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
