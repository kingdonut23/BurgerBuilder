var connection = require("../config/connection.js");

function qMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?")
    }
    return arr.toString();
}

function objToSql(ob) {
    var arr = [];

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
    selectAll: function (table, call) {
        var qString = "SELECT * FROM " + table + ";";
        connection.query(qString, function (error, result) {
            if (error) {
                throw error;
            }
            call(result);
        })
    },
    insertOne: function (table, collumn, values, call) {
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
            call(result)
        });
    },
    updateOne: function (table, collumnValues, condition, call) {
        var qString = "UPDATE " + table;

        qString += " SET ";
        qString += objToSql(collumnValues);
        qString += " WHERE ";
        qString += condition;

        console.log(qString);
        connection.query(qString, function (error, result) {
            if (error) {
                throw error;
            }

            call(result);
        });
    }
};

module.exports = orm;