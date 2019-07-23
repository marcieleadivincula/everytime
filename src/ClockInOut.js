// const moment = require('moment');
const moment = require("moment-business-time");

const checkIn = moment();
const date = new Date;
const min = date.getMinutes();
const checkOut = checkIn.subtractWorkingTime(7, 'hours', min, 'minutes');

function getWorkedHours() {
   console.log(checkOut);
}

getWorkedHours();

