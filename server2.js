
const app = require('express')(),
  http = require('http').Server(app),
  io = require('socket.io')(http),
  path = require('path'),
  bodyParser=require('body-parser'),
  mysql = require('mysql');

app.set('port', process.env.PORT || 8000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(require('express').static(path.join(__dirname, 'public')));
app.use(require('express').static(path.join(__dirname, 'bower_components')));


// Configure MySQL connection
let connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'testing_web'
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
        let scrape = JSON.stringify(json);
        connection.query("INSERT INTO report (nama_web,hasil) VALUES ('" + json.nama_web + "', '" + json.hasil + "');",scrape, function(err, result) {
          if(err) throw err;
          console.log('data inserted');
        });
      });
      connection.query('SELECT * FROM report',function(err,rows){
        if(err) throw err;
        console.log(rows);
        socket.emit('showrows', rows);
      });
  });

// app.route('/')
//   .get('index.html');

// app.route('/users')
//   .get(todoList.users);


http.listen(app.get('port'), function() {
  console.log('Server jalan di port ' + app.get('port'));
});