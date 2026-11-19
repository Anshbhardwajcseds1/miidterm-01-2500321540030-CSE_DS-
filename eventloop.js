console.log("1. Start (Synchronous)");

setTimeout(() => {
  console.log("4. setTimeout (Timers Phase)");
}, 0);

setImmediate(() => {
  console.log("5. setImmediate (Check Phase)");
});

process.nextTick(() => {
  console.log("3. process.nextTick (Highest Priority Microtask)");
});

console.log("2. End (Synchronous)");