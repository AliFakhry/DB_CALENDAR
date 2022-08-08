const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

const app = express();
const ejs = require('ejs');
const { kStringMaxLength } = require('buffer');

app.set('view engine', 'ejs');

app.use('/node_modules', express.static(__dirname + '/node_modules/'));

app.use(bodyParser.urlencoded({extended: true}));


mongoose.connect("mongodb+srv://Phone_Data:f1voUiCHfXQKQz2R@cluster0.xzech.mongodb.net/Website_Data", {useNewUrlParser: true}, {useUnifiedTopology: true})

const dataSchema = {
    title: String,
    content: String,
    date: String,
}

const Movie = mongoose.model("Test_Data", dataSchema);

app.post("/appointment", function(req, res) {
    let newData = new Movie ({
        title: req.body.user_name,
        content: req.body.email_input,
        date: req.body.curr_date,
    });
    newData.save();
    res.redirect('/');
})

app.get('/', (req, res) => {
    Movie.find({}, function(err, movies) {
        res.render('index', {
            moviesList: movies
        })
    })
})

app.listen(3000, function() {
    console.log('server is running');
})
