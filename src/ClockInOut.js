const moment = require("moment-business-time");

// Resolver error module
// function getMoment () {
//   const checkIn = moment();
//   console.log(checkIn)
// }
// let clickIn = document.getElementById('check-in').addEventListener('click', getMoment())
// console.log(clickIn);

const checkIn = moment();
const date = new Date;
const min = date.getMinutes();
const checkOut = checkIn.subtractWorkingTime(7, 'hours', min, 'minutes');

function getWorkedHours(checkIn, checkOut) {
   // console.log(checkOut);
   return checkOut - checkIn === 0 ? 'Horas ok' : 'Horas pend'

}
console.log(getWorkedHours(checkIn, checkOut));