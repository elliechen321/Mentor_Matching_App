db = require('../models');

module.exports = (app) => {


    app.get('/api/mentors', (req, res)=> {
        console.log("get route linked");
        db.users.findAll({
            where: {
                isMentor: true,
                isActive: true
            }
         })
         .then((data) => {

         res.json(data)
        
        })
    });

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
    app.get('/api/all', (req, res) => {
        
        console.log("all routes linked");

        db.users.findAll({
            where: {
                isMentee: true,
                isMentor: true,
                isActive: true
            }
        })
        .then( data => {
            res.json(data);
        })

    })
    app.post('/api/mentors', (req, res)=> {
            
        })
    
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