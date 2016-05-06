var events = require('events');
var eventEmitter = new events.EventEmitter();

//listener #1
var listener1 = function listener1() {
    console.log('listener1 works');
}

//listener #2
var listener2 = function listener1() {
    console.log('listener2 works');
}

//bind connection event with listener1
eventEmitter.on('connection', listener1);

//bind connection event with listener1
eventEmitter.addListener('connection', listener2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + " Listeners listening to connection event");

//fire event
eventEmitter.emit('connection');

//remove bindings
eventEmitter.removeListener('connection', listener1);
console.log("listener1 has been removed");

//fire event
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + " Listeners listening to connection event");

console.log("Program ends");