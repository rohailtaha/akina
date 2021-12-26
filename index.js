const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const cors = require('cors');
const path = require('path');
const handleQuestion = require('./controllers/chatbotController');

const app = express();
app.use(express.static(path.join(__dirname, 'client')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const server = http.createServer(app);

const io = socketio(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', socket => {
  console.log('socket connection established!');
  socket.on('question', async question => {
    const answer = await handleQuestion(question);
    if (!answer)
      socket.emit('answer', 'Please wait till we get an agent to assist you.');
    else socket.emit('answer', answer);
  });
});

const port = process.env.PORT || 8000;

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
