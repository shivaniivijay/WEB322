// You may have noticed that some of the examples from the documentation include a mandatory 'require()' statement
const EventEmitter=require('events');
const myEmitter = new EventEmitter();

myEmitter.on('event', function () {
  console.log('an event occurred!');
});

myEmitter.emit('event');
// we run into an error: ReferenceError: EventEmitter is not defined. As you will have guessed, this is because our running script does not know about the "EventEmitter" class, as it is not global
// By using the global 'require' function, we have loaded a code "module" which contains code and logic that we can use in our own solutions. 