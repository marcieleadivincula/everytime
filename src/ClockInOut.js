// const moment = require('moment');
const moment = require("moment-business-time");

function ClockInOut() {
   const now = moment();
   console.log(now.subtractWorkingTime(2, 'hours'));
}

ClockInOut();