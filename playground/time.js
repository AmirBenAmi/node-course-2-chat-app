// Jan 1st 1970 00:00:00 am = 0 (unix apik)

const moment = require('moment');

let date = moment();
console.log(date.format('h:mm a'));