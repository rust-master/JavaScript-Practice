// First letter of word is capital, it indicate that its Event class.
const EventEmitter = require('events');
const emitter = new EventEmitter();

// Register a listener
emitter.on('messageLogged', function() {
  console.log('Listener callled');
});

// Raise an event
emitter.emit('messageLogged');