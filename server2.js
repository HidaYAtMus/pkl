const app = require('express')(),
  http = require('http').Server(app),
  io = require('socket.io')(http),
  path = require('path'),
  bodyParser=require('body-parser'),
  mysql = require('mysql');
  // DATE_FORMATER = require( 'dateformat' );
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
 
let today = new Date(),
    dd = String(today.getDate()).padStart(2, '0'),
    mm = String(today.getMonth() + 1).padStart(2, '0'), //January is 0!
    yyyy = today.getFullYear(),
    time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

today = yyyy + '/' + mm + '/' + dd + '/' + time;

console.log(today);

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('judul', function(msg){
        console.log('message: ' + msg);
      });
    console.log('user send');
    
    socket.on('kirim', function(json){
        console.log(today);
        let scrape = JSON.stringify(json);
        connection.query("INSERT INTO record (nama_web,fitur,hasil,tanggal) VALUES ('" + json.nama_web + "', '"+json.fitur+"','" + json.hasil + "', '"+today+"');",scrape, function(err, result) {
          if(err) throw err;
          console.log('data inserted');
        });
      });

      // //menampilkan isi yang passed
      connection.query(" SELECT COUNT(hasil) AS jumlah FROM record WHERE nama_web LIKE '%Video%' GROUP BY hasil;",function(err,tes){
        if(err) throw err;
        console.log('hasil test')
        console.info(tes[0].jumlah);
        console.info(tes[1].jumlah);
        socket.emit('test', tes);
      });
      
    //   socket.on('clientEvent', function(data) {
    //     console.log(data);
    //  });

    socket.on('setUsername', function(data) {
      if(users.indexOf(data) > -1) {
         users.push(data);
         socket.emit('userSet', {username: data});
      } else {
         socket.emit('userExists', data + ' username is taken! Try some other username.');
      }
   })
});


http.listen(app.get('port'), function() {
  console.log('Server jalan di port ' + app.get('port'));
});