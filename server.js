const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/mtgfrontend'));

app.get('/*', function(req, res) {
  res.sendFile(path.join('./dist/mtgfrontend/index.html'));
});

app.listen(process.env.PORT || 8080);


