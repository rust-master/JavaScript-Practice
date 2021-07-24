const fs = require('fs');

const files = fs.readdirSync('./');
console.log(files);

// Prefer to use Async functions
fs.readdir('./', function(err, files) {
  if(err) console.log(`Error: ${err}`);
  else console.log(`Result: ${files}`);
});