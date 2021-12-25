const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path = require('path');
const handleQuestion = require('./controllers/chatbotController');

const app = express();

const server = http.createServer(app);

const io = socketio(server);

app.use(express.static(path.join(__dirname, 'client')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

io.on('connection', socket => {
  console.log('socket connection established!');
  socket.on('question', async question => {
    const answer = await handleQuestion(question);
    socket.emit('answer', answer);
  });
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
