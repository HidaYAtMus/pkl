var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');

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