const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const socketio = require('socket.io');
const mysql = require('mysql2');
const db = require('./models');
const app = express();
const server = http.Server(app);
const websocket = socketio(server);
const PORT = process.env.PORT || 3000;
const Op = db.Op;


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static("public"));

 require("./routes/routes.js")(app);


 app.get('/', function(req, res){
    console.log("located at the home")
    res.sendFile(path.join(__dirname, '../public/index.html'));

});
// The event will be called when a client is connected.
websocket.on('connection', (socket) => {
    console.log('A client just joined on', socket.id);
  });

db.sequelize.sync({force: false}).then(()=> {
    app.listen(PORT, ()=> {
        console.log(`app is listening on port ${PORT}`);
    })
})