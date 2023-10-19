const cron = require('node-cron');

cron.schedule('0 12 * * 1-6', () => {
  // Tarefa agendada a ser executada
  console.log('Tarefa agendada executada em: ' + new Date());
});
