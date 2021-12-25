const { NlpManager } = require('node-nlp');

const handleQuestion = async question => {
  const manager = new NlpManager({ languages: ['en'] });
  // Loading our saved model
  manager.load();
  const response = await manager.process('en', question);
  return response.answer;
};

module.exports = handleQuestion;
