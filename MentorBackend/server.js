const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const db = require('./models');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static("public"));

 require("./routes.js")(app);




db.sequelize.sync({force: false}).then(()=> {
    app.listen(PORT, ()=> {
        console.log(`app is listening on port ${PORT}`);
    })
})