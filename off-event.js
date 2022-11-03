const EventEmitter = require('events').EventEmitter;
class MyClass extends EventEmitter {
 constructor() {
 super();
 this.on('someEvent', this.someEventHandler);
 this.off('someEvent', this.someEventHandler);
 this.emit('someEvent');
 }
 someEventHandler() {
 console.log('someEvent occurred!');
 }
};

module.exports = { 
    classInstance : new MyClass(),
    MyClass}