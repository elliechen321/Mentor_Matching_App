db = require('../models');
// var Sequelize = require('sequelize');
module.exports = (app, test) => {
    const Op = db.Op;
    
    //get mentors 
    // const Op = Sequelize.Op
    app.get('/api/mentors/:id', (req, res)=> {
        console.log("get route linked");
        console.log(req.params)
        db.users.findOne({
            where: {
                    id: req.params.id
            }   
        }).then(data => {
            // set year gap for mentor diff /
            let years = data.yearsExperience +4;
            db.users.findAll({
                where: {
                    isMentor: true,
                    industry: data.industry,
                    yearsExperience: {
                        $gt: years,
                    },
                    isActive: true,
                    // id: {[$gt]: 6},
                },
    
             })
             .then((data) => {
    
             res.json(data)
            
            })

        })

    });
    // get mentees
    app.get('/api/mentees/:id', (req, res)=> {
        db.users.findOne({
            where: {
                    id: req.params.id
            }   
        }).then(data => {
            // set year gap for mentor diff /
            let years = data.yearsExperience -2;
            db.users.findAll({
                where: {
                    isMentee: true,
                    industry: data.industry,
                    yearsExperience: {
                        $lt: years,
                    },
                    isActive: true,
                    // id: {[$gt]: 6},
                },
    
             })
             .then((data) => {
    
             res.json(data)
            
            })

        })
        
    })
    //get all 
    app.get('/api/all', (req, res) => {
        
        console.log("all routes linked");

        db.users.findAll({
            
        }) 
        .then( data => {
            res.json(data);
        })

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
    // app.get('/api/test', (req, res) => {
        
    //     console.log("all routes linked");

    //     db.users.findAll({
    //         where: {

    //             isTest: true,
    //             isActive: true
    //         }
    //     }) 
    //     .then( data => {
    //         res.json(data);
    //     })

    // })

    app.post('/api/all', (req, res) => {
        
        console.log("users route linked");

        db.users.create(testUser) 
        .then( data => {
            res.json(data);
        })

         

    })
    // app.get('/api/webDev/javascript', (req, res)=>{
    //     db.webDev.findAll({
    //         where: {
    //                 javascript: {
    //                 $gt: 3  
    //               }
    //         }
    //         // include: [{
    //         //     model: users
    //         // }]
    //     }).then( data => {
    //         res.json(data);
    //     })
    // })
    app.get('/api/webdev/mentors/:id', (req, res) => {
        db.users.findAll({
            where: {
                yearsExperience: {
                    $gt: 7
                },
                isMentor: true 
            }
        }).then(data => {
            res.json(data)
        })
    })
    app.get('/api/all/:id', (req, res) => {
        
         console.log(req.params.id)
         console.log(req.params.isMobileDev)
        
         db.webDev.create({
             
            userId: req.params.id,
            javascript: 4,
            python: 1
        
        }).then( data => {
            console.log("data", data);
        })
        //     //   console.log(data.id);

        //     app.post('/api/webdev', (req, res) => {
        //         // console.log("post route hit");
                

        // })

                    //   console.log(data.id);
    

    })
    
};


// };

let testUser =  {
    firstName: "Bill",
    lastName: "GATES",
    email: "GOAT@yahoo.com",
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

  let testWeb =  {
    userId: '',
    javascript: 5,
    python: 4,
    reactJS: 3,
    node: 4,
    express: 5,
    sql: 2,
    html: 4,
    css: 3,
    mongoDB: 2,
    angular: 4,
    restAPI: 5,
    ruby: 3,
    php: 1,
    go: 0,
    meteor: 0, 
    wordpress: 0,
    net: 0,
    ember: 0,
    backbone: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  }
  

 /* what are you struggling with:
 
    How do I get the userId to webDev table with questions?

    */

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


