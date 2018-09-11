const express = require("express");

const router = express.Router();

// Import the model to use its database functions.
const burg = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burg.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    //console.log(hbsObject); // for testing
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burg.create(["burger_name", "burger_eaten"], [req.body.burger_name, req.body.burger_eaten], function(result) {
    // Send back the ID of the new burger
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id=" + req.params.id;

  console.log("put condition", condition); // for testing

  burg.update({
    burger_eaten: req.body.burger_eaten
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/burgers/:id", function(req, res) {
  var condition = "id=" + req.params.id;

  console.log("del condition", condition); // for testing

  burg.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
