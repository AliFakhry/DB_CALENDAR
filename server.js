const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://Phone_Data:f1voUiCHfXQKQz2R@cluster0.xzech.mongodb.net/Website_Data", {useNewUrlParser: true}, {useUnifiedTopology: true})


console.log(mongoose.connection.readyState);

const dataSchema = {
    title: String,
    content: String
}

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

app.listen(3000, function()
{
    console.log("Server is running on 3000");
})