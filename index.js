const CronJob = require('cron').CronJob;
const job = new CronJob(
  '* * * * * *',
  () => {
    console.log('generating backup...');
  },
  null,
  true
);
