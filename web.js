var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(readFile());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});


function readFile(){
var fs = require('fs');
fs.readFileSync('index.html', function (err, data) {
  if (err) throw err;
  console.log(data);

    var buf=data;
    return buf.toString();
});

}
