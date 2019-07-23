
// const moment = require('moment');
const moment = require("moment-business-time");

function getMoment () {
  const checkIn = moment();
  console.log(checkIn)
}

const checkIn = moment();

console.log('teste check-in' + document.getElementById('check-in').addEventListener('click', getMoment()));

const date = new Date;
const min = date.getMinutes();
const checkOut = checkIn.subtractWorkingTime(7, 'hours', min, 'minutes');

function getWorkedHours(checkIn, checkOut) {
   // console.log(checkOut);
   return checkOut - checkIn === 0 ? 'Horas ok' : 'Horas pend'

}

console.log(getWorkedHours(checkIn, checkOut));