var express = require("express");

var router = express.Router();

var burgers = require("../models/burger.js");

router.get("/", function (req, res) {
    burgers.selectAll(function (data) {
        var burgerData = {
            burgers: data
        };
        console.log(burgerData);
        res.render("index", burgerData);
    });
});

router.post("/api/burgers", function (req, res) {
    burgers.insertOne([
        "burger_name", "devoured"
    ], [
        req.body.burger, req.body.devoured
    ], function (result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);
    console.log(req.body.devoured)

    burgers.updateOne({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.change == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router; 