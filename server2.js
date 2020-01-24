const app = require('express')(),
  http = require('http').Server(app),
  io = require('socket.io')(http),
  path = require('path'),
  bodyParser=require('body-parser'),
  mysql = require('mysql'),
  dateFormat = require('dateformat');

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

      //menampilkan isi yang passed
      connection.query('SELECT DATE_FORMAT(t2.tanggal, "%m/%d/%Y") as tanggal, t2.fail , t1.passed FROM (SELECT tanggal, COUNT(hasil) AS passed FROM record where hasil = "passed" GROUP BY tanggal) AS t1 INNER JOIN ( SELECT tanggal, COUNT(hasil) AS fail FROM record where hasil = "fail"  GROUP BY tanggal)AS t2 ON t2.tanggal=t1.tanggal',function(err,tes){
        if(err) throw err;
        console.log('hasil video')
        
        console.info(tes[0].tanggal);
        // Convert data
       
        console.info(tes[1].tanggal);
        console.info(tes[2].tanggal);
        console.info(tes[3].tanggal);
        console.info(tes[4].tanggal);
        console.info(tes[0].passed);
        console.info(tes[0].fail);
        console.info(tes[1].passed);
        console.info(tes[1].fail);
        console.info(tes[2].passed);
        console.info(tes[2].fail);
        console.info(tes[3].passed);
        console.info(tes[3].fail);
        console.info(tes[4].passed);
        console.info(tes[4].fail);
        socket.emit('video', tes);
      });

    });

http.listen(app.get('port'), function() {
  console.log('Server jalan di port ' + app.get('port'));
});