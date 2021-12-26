import { useEffect, useRef, useState } from 'react';
import Chats from './components/chats/Chats';
import io from 'socket.io-client';
import { CHAT_TYPE, isEmpty, SERVER } from './utilities/util-structures';
import Header from './components/Header';

function App() {
  const [socket, setSocket] = useState(null);
  const [chats, setChats] = useState([]);

  const inputRef = useRef();

  const handleSubmit = event => {
    const question = inputRef.current.value;
    event.preventDefault();
    if (!isEmpty(question)) {
      setChats(chats => [
        ...chats,
        { type: CHAT_TYPE.CUSTOMER, msg: question },
      ]);
      socket.emit('question', inputRef.current.value);
      inputRef.current.value = '';
    }
  };

  const handleQuestion = question => {
    console.log(question);
    setChats(chats => [...chats, { type: CHAT_TYPE.CHATBOT, msg: question }]);
  };

  useEffect(() => {
    const socket = io(SERVER);
    setSocket(socket);
    socket.on('unanswered', handleQuestion);

    return () => socket.close();
  }, []);

  return (
    <>
      {chats.length > 0 && <Header />}
      <div className='chat-box'>
        <div className='client'>
          <div className='client-info'>
            <h2>My Chat-Box</h2>
            <img src='images/logo.png' alt='logo' />
          </div>
        </div>

        <Chats chats={chats} />

        <form className='chat-input' onSubmit={handleSubmit}>
          <input type='text' placeholder='Enter Message' ref={inputRef} />
          <button type='submit' className='send-btn'>
            <img src='images/send.png' alt='send-btn' />
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
