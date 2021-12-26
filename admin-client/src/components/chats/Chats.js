import React from 'react';
import ChatbotChat from './ChatbotChat';
import CustomerChat from './CustomerChat';

function Chats({ chats }) {
  return (
    <section className='chats'>
      {chats.map(chat =>
        chat.type === 'CHATBOT' ? (
          <ChatbotChat msg={chat.msg} />
        ) : (
          <CustomerChat msg={chat.msg} />
        )
      )}
    </section>
  );
}

export default Chats;
