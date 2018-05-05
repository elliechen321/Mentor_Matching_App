const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const db = require('./models');
const PORT = process.env.PORT || 3000;
const Op = db.Op;
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static("public"));

 require("./routes/routes.js")(app);


 app.get('/', function(req, res){
    console.log("located at the home")
    res.sendFile(path.join(__dirname, '../public/index.html'));

});

db.sequelize.sync({force: false}).then(()=> {
    app.listen(PORT, ()=> {
        console.log(`app is listening on port ${PORT}`);
    })
})