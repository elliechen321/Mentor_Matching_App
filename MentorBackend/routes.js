db = require('./models');

module.exports = (app) => {
    // make a route that does the follow:
    // gets all users where is isMentor === true
    app.get('/', (req, res)=> {
        console.log("get route linked");
        db.users.findAll({
            where: {
                isMentor: true
            }
        }).then( data => {res.json(data)});
        
    })
    
};