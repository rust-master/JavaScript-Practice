// First letter of word is capital, it indicate that its Event class.
const EventEmitter = require('events');
const emitter = new EventEmitter();

// Register a listener
emitter.on('messageLogged', function(arg) {
  console.log('Listener callled', arg);
});

// Raise an event
emitter.emit('messageLogged', {id: 1, url: 'www.google.com'});