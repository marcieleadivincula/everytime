// const moment = require('moment');
const moment = require("moment-business-time");

const nowIn = '2015-02-27T16:30:00Z'
const nowOut = '2015-02-26T12:00:00Z'

function ClockInOut(nowIn, nowOut) {
    const now = moment();

    console.log(now)
    console.log(now.subtractWorkingTime(6, 'hours'));
    console.log(moment(nowIn).workingDiff(moment(nowOut), 'hours'));
}

ClockInOut(nowIn, nowOut);