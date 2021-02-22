var orm = require("../config/orm.js");

var burgers = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    insertOne: function (collumn, values, cb) {
        orm.insertOne("burgers", collumn, values, function (res) {
            cb(res);
        });
    },
    updateOne: function (collumnValues, condition, cb) {
        orm.updateOne("burgers", collumnValues, condition, function(res) {
            cb(res);
        });
    }
}

module.exports = burgers;