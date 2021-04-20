const events = require('events');
const eventEmitter = new events.EventEmitter();

eventEmitter.on('test',()=>{
    console.log("test event emitted");
});
eventEmitter.emit("test");