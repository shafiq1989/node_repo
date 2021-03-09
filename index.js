var format = require('date-format');
format(); //defaults to ISO8601 format and current date.
format(new Date());
time = format('hh:mm:ss.SSS', new Date());
console.log(time);
console.log("nayan");