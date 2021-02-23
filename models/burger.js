var orm = require("../config/orm.js");

var burgers = {
    selectAll: function (call) {
        orm.selectAll("burgers", function (res) {
            call(res);
        });
    },
    insertOne: function (collumn, values, call) {
        orm.insertOne("burgers", collumn, values, function (res) {
            call(res);
        });
    },
    updateOne: function (collumnValues, condition, call) {
        orm.updateOne("burgers", collumnValues, condition, function (res) {
            call(res);
        });
    }
}

module.exports = burgers;