db = require('../models');

module.exports = (app, test) => {
    const Op = db.Op;
    
    app.get('/api/mentors/:id', (req, res)=> {
        // console.log("get route linked");
        // console.log(req.params)
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
                        $gte: years,
                    },
                    isActive: true,
                },
            })
            .then((data) => res.json(data))
        })
    });
    // get mentees
    app.get('/api/mentees/:id', (req, res)=> {
        db.users.findOne({
            where: {
                    id: req.params.id
            }   
        }).then(data => {
            // set year gap for mentee diff /
            let years = data.yearsExperience -2;
            db.users.findAll({
                where: {
                    isMentee: true,
                    industry: data.industry,
                    yearsExperience: {
                        $lte: years,
                    },
                    isActive: true,
                },
             })
            .then((data) => res.json(data))
        })
    })
    //get all 
    app.get('/api/active', (req, res) => {

        db.users.findAll({where: {isActive: true}}) 
        .then( data => res.json(data))
    })

    app.get('/api/all', (req, res) => {

        db.users.findAll() 
        .then( data => res.json(data))
    })
    app.post('/api/all', (req, res) => {

        db.users.create(testUser) 
        .then( data => res.json(data))
    })

    let testMatch = {
        relationship: "is Mentor",
        matchId: 4
        
    
    }
    app.post('/api/matched/:id', (req, res) => {
        console.log(req.params)
        db.matched.create({
            userId: req.params.id,
            relationship: testMatch.relationship,
            matchId: testMatch.matchId
        })
        .then(
            console.log("posted to matched table")
        )
    })
    app.get('/api/matched/:id', (req, res) => {
        db.matched.findAll({
            where: {
                userId: req.params.id
            }
        }).then( objMatched => res.json(objMatched));
    })
    
    
    app.get('/api/update/:id', (req, res) => {
        console.log("update route hit")
     // route for updating user information
        db.users.update(
            {
                isMentor: false
             },
            {
               where: {
                   id: req.params.id
               }
            }
            
 
            
        )
    
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
  


// old routes

    // app.get('/api/webdev/mentors/:id', (req, res) => {
    //     db.users.findAll({
    //         where: {
    //             yearsExperience: {
    //                 $gt: 7
    //             },
    //             isMentor: true 
    //         }
    //     }).then(data => {
    //         res.json(data)
    //     })
    // })
    // app.get('/api/all/:id', (req, res) => {
        
    //      console.log(req.params.id)
    //      console.log(req.params.isMobileDev)
        
    //      db.webDev.create({
             
    //         userId: req.params.id,
    //         javascript: 4,
    //         python: 1
        
    //     }).then( data => {
    //         console.log("data", data);
    //     })

    // })