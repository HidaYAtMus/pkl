var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');

app.set('port', process.env.PORT || 8000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(require('express').static(path.join(__dirname, 'public')));
app.use(require('express').static(path.join(__dirname, 'bower_components')));

// app.get('/', function(req, res) {
//   return res.render('index');
// });

// io.on('connection', function(socket) {
// //   socket.on('pesan', function(title) {
//     io.emit('pesan', title);
//         console.log(title);
//   });

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('judul', function(msg){
        console.log('message: ' + msg);
      });
  });


http.listen(app.get('port'), function() {
  console.log('Server jalan di port ' + app.get('port'));
});