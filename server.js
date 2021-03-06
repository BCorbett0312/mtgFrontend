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
