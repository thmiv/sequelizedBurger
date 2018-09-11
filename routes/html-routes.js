// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/burgers/", function(req, res) {
    db.Burger.findAll({})
      .then(function(dbBurg) {
        res.json(dbBurg);
      });
  });

  // POST route for saving a new post
  app.post("/api/burgers", function(req, res) {
    console.log(req.body);
    db.Burger.create({
      burger_name: req.body.burger_name,
      burger_eaten:  req.body.burger_eaten,
    })
      .then(function(dbBurg) {
        res.json(dbBurg);
      });
  });

  // DELETE route for deleting posts
  app.delete("/api/burgers/:id", function(req, res) {
    db.Burger.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbBurg) {
        res.json(dbBurg);
      });
  });

  // PUT route for updating posts
  app.put("/api/burgers", function(req, res) {
    db.Burger.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbBurg) {
        res.json(dbBurg);
      });
  });
};
