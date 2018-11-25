import path from 'path';
import http from 'http';
import express from 'express';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import LocalStrategy from 'passport-local';
import session from 'express-session';
import bodyParser from 'body-parser';
import models from './models/models';
import auth from './routes/auth';
//import document from './routes/socket_api';
//import socketIO from 'socket.io';


const app = express();
const server = http.Server(app);

import mongoose from 'mongoose';
mongoose.connect(process.env.MONGODB_URI);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


app.use(session({
  secret: process.env.SECRET
}));

passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  models.Candidate.findById(id, function(err, user) {
    done(err, user);
  });
});


passport.use(new LocalStrategy(function(email, password, done) {
    models.Candidate.findOne({ email: email }, function (err, user) {
      if (err) {
        console.log(err);
        return done(err);
      }
      if (!user) {
        console.log(user);
        return done(null, false);
      }
      if (user.password !== password) {
        return done(null, false);
      }
      return done(null, user);
    });
  }
));


app.use(passport.initialize());
app.use(passport.session());

app.use('/', auth(passport));

const PORT = process.env.PORT || 3001;

// app.get('/', (req, res) => {
//   res.send("Hello World!");
// });

app.listen(PORT, () => {
  console.log("Server started on PORT: " + PORT);
});
