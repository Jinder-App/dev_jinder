import express from 'express';
const router = express.Router();
import models from '../models/models.js';

export default function(passport) {
  console.log('here!')
  router.post('/login', passport.authenticate('local'), function(req, res) {
    res.send(req.user);
  });

  router.post('/signup', function(req, res) {
    const newCandidate = new models.Candidate({
      email: req.body.email,
      password: req.body.password,
    });
    newCandidate.save()
    .then(response => {
      res.send(response);
    })
    .catch(error => {
      res.send(error);
    })
  });

  router.get('/logout', function(req, res){
    req.logout();
    res.send('logged out!');
  });

  return router;
}
