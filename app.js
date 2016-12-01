var express = require('express'), app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.use(express.static('js'));
app.use(express.static('css'));
app.use(express.static('bs'));
app.use(express.static('img'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/index.html', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

var numero = 0;
io.on('connection', function (socket) {
    console.log('conectou');
    socket.on('chat message', function (msg) {
        if (msg == "") {

        } else {
            io.emit('chat message', msg);
        }
    });
    socket.on('disconnect', function () {
        numero--;
        console.log('desconectou');
    });
});

http.listen(3000, function () {
    console.log('listening on *:3000');
});