const events = require("events");

const { EventEmitter } = events;

const eventEmitter = new EventEmitter;

// registering an event 

eventEmitter.on("event-1", function () {
    console.log("Hi there");
});

//  exit or raise an event

eventEmitter.emit("event-1", "bye there");
