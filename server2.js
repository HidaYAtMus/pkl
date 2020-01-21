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

app.get('/', function(req, res){
      res.sendFile(__dirname+'/public/hasil.html');
  });

  app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req,res,next){
    req.io = io;
    next();
});
  
// Configure MySQL connection
let connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
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
        let scrape = JSON.stringify(json);
        connection.query("INSERT INTO report (nama_web,hasil) VALUES ('" + json.nama_web + "', '" + json.hasil + "');",scrape, function(err, result) {
          if(err) throw err;
          console.log('data inserted');
        });
      });

      //menampilkan isi yang passed
      connection.query("SELECT COUNT(hasil) AS jumlah FROM report GROUP BY hasil",function(err,tes){
        if(err) throw err;
        socket.emit('test', tes);
      });
      socket.on('tempramas', function(json){
        let scrape = JSON.stringify(json);
        connection.query("INSERT INTO tempramas (nama_web,hasil) VALUES ('" + json.nama_web + "', '" + json.hasil + "');",scrape, function(err, result) {
          if(err) throw err;
          console.log('data inserted');
          connection.query("SELECT COUNT(hasil) AS jumlah FROM tempramas GROUP BY hasil",function(err,tes){
            if(err) throw err;
            socket.emit('test', tes);
          });
        });
      });
      socket.on('vid', function(json){
        let scrape = JSON.stringify(json);
        connection.query("INSERT INTO vid_divmu (nama_web,hasil) VALUES ('" + json.nama_web + "', '" + json.hasil + "');",scrape, function(err, result) {
          if(err) throw err;
          console.log('data inserted');
          connection.query("SELECT COUNT(hasil) AS jumlah FROM vid_divmu GROUP BY hasil",function(err,tes){
            if(err) throw err;
            socket.emit('test', tes);
          });
        });
      });
    });


http.listen(app.get('port'), function() {
  console.log('Server jalan di port ' + app.get('port'));
});