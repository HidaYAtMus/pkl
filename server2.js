const app = require('express')(),
  http = require('http').Server(app),
  io = require('socket.io')(http),
  path = require('path'),
  bodyParser=require('body-parser'),
  mysql = require('mysql');
  // dateFormat = require('dateformat');

  // DATE_FORMATER = require( 'dateformat' );
app.set('port', process.env.PORT || 8000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(require('express').static(path.join(__dirname, 'public')));
app.use(require('express').static(path.join(__dirname, 'bower_components')));

app.get('/', function(req, res){
      res.sendFile(__dirname+'/public');
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
 
// Pengambilan Date Time
let today = new Date(),
 dd = String(today.getDate()).padStart(2, '0'),
 mm = String(today.getMonth() + 1).padStart(2, '0'), //January is 0!
 yyyy = today.getFullYear(),
 time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// Pengambilan Date Time


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
      connection.query('SELECT t2.tanggal, t2.fail , t1.passed FROM (SELECT tanggal, COUNT(hasil) AS passed FROM record where hasil = "passed"GROUP BY tanggal) AS t1 INNER JOIN ( SELECT tanggal, COUNT(hasil) AS fail FROM record where hasil = "fail" GROUP BY tanggal)AS t2 ON t2.tanggal=t1.tanggal',function(err,tes){
        if(err) throw err;
        console.log('hasil video')
        
        console.info(tes[0].tanggal);
        // Convert data
        let date1="2020-01-22T17:00:00.000Z".toString("yyyyMMddHHmmss").
          replace(/T/, ' ').      
          replace(/\..+/, '');

          let auxCopia=date1.split(" ");
          date1=auxCopia[0];
          let hour=auxCopia[1];

          console.log(date1);
        // console.info(tes[1].tanggal);
        //   let date2="2020-01-23T17:00:00.000Z".toString("yyyyMMddHHmmss").
        //   replace(/T/, ' ').      
        //   replace(/\..+/, '');

        //   let auxCopia=date2.split(" ");
        //   date2=auxCopia[0];
        //   let hour=auxCopia[1];

        //   console.log(date2);
        // console.info(tes[2].tanggal);
        //   let date3="2020-01-24T17:00:00.000Z".toString("yyyyMMddHHmmss").
        //   replace(/T/, ' ').      
        //   replace(/\..+/, '');

        //   let auxCopia=date3.split(" ");
        //   date3=auxCopia[0];
        //   let hour=auxCopia[1];

        //   console.log(date3);
        // console.info(tes[3].tanggal);
        //   let date4="2020-01-25T17:00:00.000Z".toString("yyyyMMddHHmmss").
        //   replace(/T/, ' ').      
        //   replace(/\..+/, '');

        //   let auxCopia=date4.split(" ");
        //   date4=auxCopia[0];
        //   let hour=auxCopia[1];

        //   console.log(date4);
        // console.info(tes[4].tanggal);
        //   let date="2020-01-26T17:00:00.000Z".toString("yyyyMMddHHmmss").
        //               replace(/T/, ' ').      
        //               replace(/\..+/, '');
      
        //               let auxCopia=date.split(" ");
        //               date=auxCopia[0];
        //               let hour=auxCopia[1];

        //   console.log(date);

        // console.info(tes[0].passed);
        // console.info(tes[0].fail);
        // console.info(tes[1].passed);
        // console.info(tes[1].fail);
        // console.info(tes[2].passed);
        // console.info(tes[2].fail);
        // console.info(tes[3].passed);
        // console.info(tes[3].fail);
        // console.info(tes[4].passed);
        // console.info(tes[4].fail);
        // console.info(tes[5].passed);
        // console.info(tes[5].fail);
        // console.info(tes[2].t2.fail);
        // console.info(tes[2].tanggal);
        socket.emit('video', tes);
      });

  //     connection.query('SELECT hasil, COUNT(hasil) AS jumlah FROM record where nama_web like"%Home%" GROUP BY hasil',function(err,temp){
  //       if(err) throw err;
  //       console.log('hasil tempramas')
  //       console.info(temp[0].jumlah);
  //       console.info(temp[1].jumlah);
  //       // console.info(tes[2].tanggal);
  //       socket.emit('tempramas', temp);
  //     });
      
  //   //   socket.on('clientEvent', function(data) {
  //   //     console.log(data);
  //   //  });

  //   socket.on('setUsername', function(data) {
  //     if(users.indexOf(data) > -1) {
  //        users.push(data);
  //        socket.emit('userSet', {username: data});
  //     } else {
  //        socket.emit('userExists', data + ' username is taken! Try some other username.');
  //     }
  //  })
    });

     //   socket.on('div', function(json){
    //     let scrape = JSON.stringify(json);
    //     connection.query("INSERT INTO vid_divmu (nama_web,hasil) VALUES ('" + json.nama_web + "', '" + json.hasil + "');",scrape, function(err, result) {
    //       if(err) throw err;
    //       console.log('data inserted');
    //     });
    //   });

    //   //menampilkan isi yang passed
    //   connection.query("SELECT COUNT(hasil) AS hsl FROM vid_divmu GROUP BY hasil",function(err,vid){
    //     if(err) throw err;
    //     console.log('hasil video')
    //     console.info(vid[0].hsl);
    //     console.info(vid[1].hsl);
    //     socket.emit('t', vid);
    //   });
    // });


http.listen(app.get('port'), function() {
  console.log('Server jalan di port ' + app.get('port'));
});