const publishUpdate = require('./publisher');
const cron = require('node-cron');

cron.schedule('*/15 * * * *', async () => {
  await publishUpdate();
  console.log('Event published');
});

publishUpdate();