const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();
var upTime = os.uptime();

// Template String
// ES6 / ES2015 : ECMAScript 2015
console.log(`Total memory: ${totalMemory}`);
console.log(`Free memory: ${freeMemory}`);
console.log(`Uptime: ${upTime}`);