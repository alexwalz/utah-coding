var connection = require("../config/connection.js");

var orm = {
  selectWhere: function(tableInput, colToSearch, valOfCol) {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";

    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      callback(result)
    });
  }
};

module.exports = orm;
