const socket = io('http://localhost:3000');

// ask question from server
document.getElementById('submit').addEventListener('click', event => {
  event.preventDefault();
  socket.emit('question', document.getElementById('input').value);
});

// Listen to answers from server
socket.on('answer', answer => {
  console.log(answer);
});
