const mongoose = require("mongoose");
const bodyParser = require("body-parser");

var http = require('http');
var path = require('path');

const express = require("express");
const app = express();

var server = http.createServer(app);

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://Phone_Data:f1voUiCHfXQKQz2R@cluster0.xzech.mongodb.net/Website_Data", {useNewUrlParser: true}, {useUnifiedTopology: true})

console.log(mongoose.connection.readyState);

const dataSchema = {
    title: String,
    content: String
}

app.use(express.static(path.resolve(__dirname, 'client')));

const Val = mongoose.model("Test_Data", dataSchema);

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html")
})

app.post("/", function(req, res) {
    let newData = new Val ({
        title: req.body.title,
        content: req.body.content
    });
    newData.save();
    res.redirect('/');
})

app.post('/appointment', async (req, res) => {
    console.log("HEY");
    console.log(req.body.phonenumber);
    res.redirect('/');
});

app.post('/cancelAppointment', async (req, res) => {  
    let code = request.body.code;
    response.send(`This slot has been removed.`);
    res.redirect('/');
});

console.log('Booting up the server! Please wait until finished...')
server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("All ready! Server listening at", addr.address + ":" + addr.port);
});