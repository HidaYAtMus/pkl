var express = require('express');
var app = express();
var http = require('http').Server(express);
var io = require('socket.io')(http);
var path = require('path');
var bodyParser = require('body-parser');
var mysql = require('mysql');

app.set('port', process.env.PORT || 8000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(require('express').static(path.join(__dirname, 'public')));
app.use(require('express').static(path.join(__dirname, 'bower_components')));

// Configure MySQL connection
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'testing'
  });

//Establish MySQL connection
connection.connect(function(err) {
  if (err) 
     throw err
  else {
      console.log('Connected to MySQL');
}
});

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('judul', function(msg){
        console.log('message: ' + msg);
      });
    console.log('user send');
    socket.on('kirim', function(json){
        console.log(JSON.stringify(json));
        var scrape = JSON.stringify(json);
        connection.query("INSERT INTO report (nama_web,hasil) VALUES ('" + json.nama_web + "', '" + json.hasil + "');",scrape, function(err, result) {
          if(err) throw err;
          console.log('data inserted');
        });
      });
  });

  // io.on('json', function(data){
  //   data_json = JSON.stringify(data);
  //   alert(data_json);
  // // Send data_json via AJAX...
  // });

http.listen(app.get('port'), function() {
  console.log('Server jalan di port ' + app.get('port'));
});