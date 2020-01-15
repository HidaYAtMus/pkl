var app = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');

// Configure MySQL connection
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'testing'
  })

//Establish MySQL connection
connection.connect(function(err) {
   if (err) 
      throw err
   else {
       console.log('Connected to MySQL');
       // Start the app when connection is ready
      //  app.listen(3000);
      //  console.log('Server listening on port 3000');
 }
});

app.set('port', process.env.PORT || 8000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(require('express').static(path.join(__dirname, 'public')));
app.use(require('express').static(path.join(__dirname, 'bower_components')));

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('judul', function(msg){
        console.log('message: ' + msg);
      });
    console.log('user send');
    socket.on('kirim', function(json){
        console.log('message: ' + json);
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
