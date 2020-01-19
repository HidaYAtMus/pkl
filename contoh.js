var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mysql = require('mysql');

var db = mysql.createConnection({
  host: '127.0.0.1',
  port: '3306',
  user: 'root',
  password: '',
  database: 'testt'
});

db.connect(function (err) {
  if (err) console.log(err);
});

app.get('/', function(req, res){
  res.sendfile('index.html');
});

var id = 1;

io.sockets.on('connection', function (socket) {
    /*
    Pada bagian ini anda bisa mengambil data live dari database dengan menggunakan mysql atau mongodb,
    pada contoh dibawah saya hanya generate random data menggunakan Math.random()
    */
    
    var timer = setInterval(function() {
      if (++id < 22) {
        db.query('SELECT * FROM data WHERE id = ?', [id], function (err, results) {
          if (err) {
            console.info(err);
          } else {
            var x = results[0].time,
                y = results[0].value;

            socket.emit('chart_data', {
              x: x,
              y: y
            });
            console.info("emitted: [" + x + "," + y + "]");  
          }
        });
      } else {
        clearInterval(timer);
      }
    }, 1000); //update setiap 1 detik*/
  });

http.listen(3000, function(){
  console.log('listening on *:3000'); //jalankan server di port 3000
});