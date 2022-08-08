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
    content: String,
    date: String,
}

app.use(express.static(path.resolve(__dirname, 'client')));

const Val = mongoose.model("Test_Data", dataSchema);

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html")
})

app.post("/appointment", function(req, res) {
    console.log(req.body.input)
    let newData = new Val ({
        title: req.body.user_name,
        content: req.body.email_input,
        date: req.body.curr_date,
    });
    newData.save();
    res.redirect('/');
})

app.post('/cancelAppointment', async (req, res) => {  
    let code = req.body.code;
    response.send(`This slot has been removed.`);
    res.redirect('/');
});

console.log('Booting up the server! Please wait until finished...')
server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("All ready! Server listening at", addr.address + ":" + addr.port);
});