// modules systems
// OS
// file system
// events
// http

// Modules
// define module to constant to avoid exception
const EventEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger();

logger.on('messageLogged', (arg) => {
    console.log('Listener callled', arg);  
});

logger.log('message');