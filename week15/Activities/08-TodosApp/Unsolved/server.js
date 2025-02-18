// *****************************************************************************
// Server.js 
// *****************************************************************************


var express = require("express");
var bodyParser = require("body-parser");
var db = require("./models")

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/api-routes.js")(app);




db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
