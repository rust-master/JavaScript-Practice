const EventEmitter = require('events');

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
    // log function
    log(msg) {
        console.log(msg);

        // Raise an event
        this.emit('messageLogged', { id: 1, url: 'www.google.com' });
    }
}
module.exports = Logger;