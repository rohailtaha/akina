export const CHAT_TYPE = {
  CUSTOMER: 'CUSTOMER',
  CHATBOT: 'CHATBOT',
};

export const removeExtraSpaces = str =>
  str
    .split(' ')
    .filter(s => s)
    .join(' ');

export const isEmpty = str => removeExtraSpaces(str) === '';

export const SERVER = 'http://localhost:8000';
