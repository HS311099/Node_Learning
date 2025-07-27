// Challange: "Event Maestro: Handle It All!"

//! Objective
// Create a program using Node.js EventEmitter that:

//? Listens for multiple types of user events (eg., 'login', 'logout', 'purchase', and profile update).
//? Tracks how many times each event is emitted.
//? Logs a summary of all events occurrences when a special summary event is triggred.

//! Requirements
//? Create at least four custom events (e.g., user-login, user-logout, user-purchase, profile-update).
//? Emit these events multiple times with different arguments (e.g., username, item purchased).
//? Track and store the count of each event type.
//? Define a summary event that logs a detailed report of how many times each event was triggered.

const fs = require('fs');
const path = require('path');
const EventEmitter = require("events");

const emitter = new EventEmitter();
const countsFile = path.join(__dirname, 'eventCounts.json');

// Load previous counts if file exists
let eventCounts = {
    "user-login": 0,
    "user-logout": 0,
    "user-purchase": 0,
    "profile-update": 0
};
if (fs.existsSync(countsFile)) {
    eventCounts = JSON.parse(fs.readFileSync(countsFile, 'utf8'));
}

emitter.on("user-login", (data) => {
    console.log(`Hello, ${data.userName}, Welcome back!.`);
});
emitter.on("user-logout", (data) => {
    console.log(`Goodbye, ${data.userName}`);
});
emitter.on("user-purchase", (data) => {
    console.log(`Purchase made by ${data.userName} for item: ${data.item}.`);
});
emitter.on("profile-update", (data) => {
    console.log(`Profile updated for ${data.userName}. New profession: ${data.profession}.`);
});

const emitEvent = (eventName, data) => {
    emitter.emit(eventName, data);
    eventCounts[eventName]++;
    // Save counts after each event
    fs.writeFileSync(countsFile, JSON.stringify(eventCounts, null, 2));
}

const summary = () => {
    console.log("Event Summary:");
    for (const [event, count] of Object.entries(eventCounts)) {
        console.log(`${event}: ${count} times`);
    }
}

emitter.on("summary", summary);

// Emit events
emitEvent("user-login", { userName: "Heet Shah" });
emitEvent("user-purchase", { userName: "Heet Shah", item: "Laptop" });
emitEvent("profile-update", { userName: "Heet Shah", profession: "MERN STACK Developer" });
emitEvent("profile-update", { userName: "Heet Shah", profession: "Full Stack Developer" });
emitEvent("user-logout", { userName: "Heet Shah" });
emitEvent("user-login", { userName: "Heet Shah", profession: "Full Stack Developer" });

// Emit summary event
emitter.emit("summary");

