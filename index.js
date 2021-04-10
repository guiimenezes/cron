const CronJob = require('cron').CronJob;
//segundos, minutos, horas, dias, meses, anos
const job = new CronJob(
  '* * * * * *',
  () => {
    console.log('generating backup...');
  },
  null,
  true
);
