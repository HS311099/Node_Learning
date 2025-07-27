// import the EventEmitter class from the 'events' module
const EventEmitter = require("events");

// create a new instance of EventEmitter
const emitter = new EventEmitter();

// 1. Define an event emitter listener (addListener)
// emitter.on('greet', (userName, profession) => {
//   console.log(`Hello, ${userName}, You are a ${profession}, Right?`);
// });

// 2. Trigger (emit) the event
// you can also pass arguments while emitting the event
// emitter.emit('greet', "Heet shah", "MERN STACK Developer");

emitter.on("greet", (data) => {
    console.log(`Hello, ${data.userName}, You are a ${data.profession}, Right?`);
});

emitter.emit("greet", {
  userName: "Heet shah",
  profession: "MERN STACK Developer",
});
