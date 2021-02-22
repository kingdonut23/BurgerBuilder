var express = require("express");

var router = express.Router();

var burgers = require("../models/burger.js");

router.get("/", function(req, res){
    burgers.selectAll(function(data){
        var burgerData = {
            burgers: data
        };
        console.log(burgerData);
        res.render("index", burgerData);
    });
});

router.post("/api/burger", function (req, res) {
    burgers.insertOne([
        "burgers", "devoured"
    ], [
        req.body.burger, req.body.devoured
    ], function (result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burger/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burgers.updateOne({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.chanedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router; 