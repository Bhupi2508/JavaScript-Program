// Stopwatch
var utility = require('../utility/utility')
var read = require('readline-sync');

var s1 = parseInt(read.question("Press Enter for start the time :"));
var t1 = utility.StopWatch(s1);
var s2 = parseInt(read.question("Press Enter for stop the time :"));
var t2 = utility.StopWatch(s2);

var Elapsedtime = t2-t1; 
console.log("Elapsed time : " + Elapsedtime);
