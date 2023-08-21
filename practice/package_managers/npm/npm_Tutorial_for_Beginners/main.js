var moment = require('moment');
var unique = require('uniq');

var myDate = new Date();
var myCoolDate = moment(myDate).format('MMMM Do YYYY, h:mm:ss a');
var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];

console.log(myDate);
console.log(myCoolDate);
console.log(unique(data));