const { query } = require("../config/connection.js");
var connection = require("../config/connection.js");

function qMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?")
    }
    return arr.toString();
}

function objToSql(ob) {
    var arr= [];

    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

var orm = {
    selectAll: function (table, cb) {
        var qString = "SELECT * FROM " + table + ";";
        connection.query(qString, function (error, result) {
            if (error) {
                throw error;
            }
            cb(result);
        })
    },
    insertOne: function (table, collumn, values, cb) {
        var qString = "INSERT INTO " + table;

        qString += " (";
        qString += collumn.toString();
        qString += ") ";
        qSting += "VALUES (";
        qString += qMarks(vals.length);
        qString += ") ";

        console.log(qString);

        connection.query(qString, values, function (error, result) {
            if (error) {
                throw error;
            }
            cb(result)
        });
    },
    updateOne: function(table, collumnValues, condition, cb){
        var qString = "UPDATE " + table;

        qString += " SET ";
        qString += objToSql(collumnValues);
        qString += " WHERE ";
        qString += condition;

        console.log(qString);
        connection.query(qString, function(error, result) {
            if (error) {
                throw error;
            }

            cb(result);
        });
    }
};

module.exports = orm;