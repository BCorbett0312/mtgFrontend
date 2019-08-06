// //Install express server
// const express = require("express");
// const path = require("path");
//
// const app = express();
//
//
// // Serve only the static files form the dist directory
// app.use(express.static(__dirname + "/dist/mtgfrontend"));
//
// app.get("/*", function(req, res) {
//
//   res.sendFile(path.join(__dirname+ "/dist/mtgfrontend/index.html"));
// });
//
// // Start the app by listening on the default Heroku port
// app.listen(process.env.PORT || 8080);

//Install express server
express = require("express");
path = require("path");

app = express();

// Serve only the static files form the dist directory
app.use(express.static("./dist/theCardPool"));

app.get("/*", function(req, res) {

  res.sendFile(path.join("./dist/theCardPool/index.html"));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
