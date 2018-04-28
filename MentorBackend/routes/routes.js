db = require('../models');
// var Sequelize = require('sequelize');
module.exports = (app, test) => {
    const Op = db.Op;
    
    //get mentors 
    // const Op = Sequelize.Op
    app.get('/api/mentors', (req, res)=> {
        console.log("get route linked");
        db.users.findAll({
            where: {
                // isMentor: true,
                // isActive: true,
                id: {[$gt]: 6},
            },

         })
         .then((data) => {

         res.json(data)
        
        })
    });
    // get mentees
    app.get('/api/mentees', (req, res)=> {
        console.log("mentees route linked")
        db.users.findAll({
            where: {
                isActive: true,
                isMentee: true
            }
        })
        .then( data => {

            res.json(data);

        })
    })
    //get all 
    app.get('/api/all', (req, res) => {
        
        console.log("all routes linked");
        db.users.create(testUser) 
         
        .then( data => {
            res.json(data);
        })
        .then(
            db.users.findAll({
                where: {
                    isActive: true
                },
                limit: 1
            })

    )   


    })
    //get webdev
    app.get('/api/webdev', (req, res) => {
        
        console.log("all routes linked");

        db.users.findAll({
            where: {
                isMentee: true,
                isMentor: true,
                isWebDev: true,
                isActive: true
            }
        }) 
        .then( data => {
            res.json(data);
        })

    })
    
    app.get('/api/mobiledev', (req, res) => {
        
        console.log("all routes linked");

        db.users.findAll({
            where: {

                isMobileDev: true,
                isActive: true
            }
        }) 
        .then( data => {
            res.json(data);
        })

    })
    app.get('/api/test', (req, res) => {
        
        console.log("all routes linked");

        db.users.findAll({
            where: {

                isTest: true,
                isActive: true
            }
        }) 
        .then( data => {
            res.json(data);
        })

    })

    app.post('/api/users', (req, res) => {
        
        console.log("users route linked");

        db.users.create(testUser) 
        .then( data => {
            res.json(data);
        })

    })

    // app.post('/api/webdev', (req, res)=> {
    //         console.log("api/webdev post route is linked");
    //     })
    
};

let testUser =  {
    firstName: "Jack",
    lastName: "Bose",
    email: "hero@yahoo.com",
    password: "test",
    phone: "2193893389",
    currentJob: "server-side engineer",
    company: "xyz startups",
    isMentor: true,
    isMentee: true,
    isWebDev: true,
    isQA: false,
    isTest: false,
    isData: false,
    isSecurity: false,
    isActive: false,
    createdAt: new Date(),
    updatedAt: new Date()
  }

//   if( testUser.isMentor ? console.log("is mentor") : console.log("is not mentor"));

        //  .then( (req, res) => {
        //     db.mentor.create(
        //        { where:  {  
                    
        //         userId: req.body.id
                
        //         }
                
        //         }).then(function(dbUser){
        //         res.json(dbUser);
        //     })
        
        // });



//route for notActive users.
    
    // app.get('/api/notActive', (req, res)=> {
    //     console.log("get route linked");
    //     db.users.findAll({
    //         where: {

    //             isActive: false 
    //         }
    //      })
    //      .then((data) => {

    //      res.json(data)
        
    //     })
    // });