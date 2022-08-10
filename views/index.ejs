const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

const app = express();
const ejs = require('ejs');
const { kStringMaxLength } = require('buffer');

app.set('view engine', 'ejs');

app.use('/node_modules', express.static(__dirname + '/node_modules/'));

app.use(bodyParser.urlencoded({extended: true}));


mongoose.connect("REDACTED FOR SECURITY", {useNewUrlParser: true}, {useUnifiedTopology: true})

const dataSchema = {
    title: String,
    content: String,
    date: String,
    phone_number: String,
}

const schedule_val = mongoose.model("Test_Data", dataSchema);

app.post("/appointment", function(req, res) {
    let newData = new schedule_val ({
        title: req.body.user_name,
        content: req.body.email_input,
        date: req.body.curr_date,
        phone_number: req.body.phone_input,
    });
    newData.save();
    res.redirect('/');
})

app.get('/', (req, res) => {
    var arr = [];
    schedule_val.find({}, function(err, schedule_vals) {
        res.render('index', {
            schedule_valsList: schedule_vals,
            arr,
        })
    })
})

app.listen(3000, function() {
    console.log('server is running');
})
