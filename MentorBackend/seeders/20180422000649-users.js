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
      fullName: "Derrick Rose",
      email: "mvp@yahoo.com",
      facebook: "Test1",
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
      fullName: "Rerrick Dose",
      email: "pmv@yahoo.com",
      password: "test",
      phone: "2193892889",
      facebook: "Test2",
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
      fullName: "Jack Bose",
      email: "hero@yahoo.com",
      password: "test",
      phone: "2193893389",
      currentJob: "server-side engineer",
      company: "xyz startups",
      location: "Minneapolis",
      facebook: "Test3",
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
      fullName: "Back Jose",
      facebook: "Test4",
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
      fullName: "Derrick Rose",
      email: "dflskdh@yahoo.com",
      password: "test",
      facebook: "Test5",
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
      fullName: "Summer Saunders",
      email: "amber@gmail.com",
      password: "Test",
      facebook: "Test6",
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
      fullName: "Smber",
      email: "Smber@gmail.com",
      password: "Test",
      facebook: "Test7",
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
      fullName: "chose",
      email: "chose@yahoo.com",
      password: "329898test",
      phone: "3418892889",  
      facebook: "Test9",
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
      fullName: "Lopeze",
      email: "lopez@yahoo.com",
      password: "sdsda",
      phone: "3418892889",  
      currentJob: "SDET",
      company: "McDonald's",
      location: "Chicago",
      facebook: "Test10",
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
      fullName: "Miller Mike",
      email: "est@yahoo.com",
      password: "test",
      phone: "219389239",
      currentJob: "Manager",
      facebook: "Test11",
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