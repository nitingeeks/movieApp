const express = require('express');
const router = express.Router();

const fs = require('fs');
const db = require('../fav.json');

router.route('/')
  .get(function(req, res) {
      fs.readFile('fav.json', 'utf-8', function(err, data)  {
        if (err){throw err};
        res.send(JSON.parse(data))
      });
  })
  .post(function(req, res)  {
      db.push(req.body.movie);
      fs.writeFile('fav.json', JSON.stringify(db), function(err, data)  {
      if (err) throw err;
      res.send('Favorite Movie added!');
      });
  });

  router.route('/:id')
    .put(function(req, res)  {
      const newBear = req.body.movie;
      db.forEach(function(movie, index)  {
        if (movie.id == req.params.id) {
        db.splice(index, 1, newBear);
        }
      });
        fs.writeFile('fav.json', JSON.stringify(db), function(err, data)  {
          if (err) throw err;
        res.send('Movie Details modified!');
      });
    })
    .delete(function(req, res)  {
        db.forEach(function(movie, index){
          if (movie.id == req.params.id) {
            db.splice(index, 1);
          }
        });
        fs.writeFile('fav.json', JSON.stringify(db), function(err, data)  {
          if (err) throw err;
        res.send('Movie deleted!');
        });
    });



module.exports = router;

