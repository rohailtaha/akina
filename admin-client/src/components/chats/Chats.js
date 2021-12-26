import React from 'react';
import ChatbotChat from './ChatbotChat';
import CustomerChat from './CustomerChat';
import { v4 as uuidv4 } from 'uuid';

function Chats({ chats }) {
  return (
    <section className='chats'>
      {chats.map(chat =>
        chat.type === 'CHATBOT' ? (
          <ChatbotChat key={uuidv4()} msg={chat.msg} />
        ) : (
          <CustomerChat key={uuidv4()} msg={chat.msg} />
        )
      )}
    </section>
  );
}

export default Chats;
