var express = require('express');
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/profiles');

var profile = require("./profileModel")



var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));
app.use(express.static('node_modules'));


app.get('/', function(req, res) {
  res.send('Testing Server')
})

app.get('/profiles', function (req, res, next) {
  Beer.find(function (error, profiles) {
    if (error) {
      console.error(error)
      return next(error);
    } else {
      res.send(profiles);
    }
  });
});

app.post('/profiles', function(req, res, next) {
  Beer.create(req.body, function(err, beer) {
    if (err) {
      console.error(err)
      return next(err);
    } else {
      res.json(beer);
    }
  });
});



app.delete('/profiles/:id', function(req, res, next) {
  Beer.remove({ _id: req.params.id }, function(err) {
    if (err) {
      console.error(err)
      return next(err);
    } else {
      res.send("Profile Deleted");
    }
  });
});

app.put('/profiles/:id', function(req, res, next) {
  console.log(req.params.id);
  console.log(req.body);
  res.send(req.body);
});

app.put('/profiles/:id', function(req, res, next) {
  profile.findOneAndUpdate({ _id: req.params.id }, req.body, function(err, profile) {
    if (err) {
      console.error(err)
      return next(err);
    } else {
      res.send(profile);
    }
  });
});

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// main error handler
// warning - not for use in production code!
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: err
  });
});

app.listen('3000', function() {
  console.log("Listening on 3000, YALLAH!")
});
