// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor() {
    this.events = {};
  }
  // Register an event handler
  on(eventName, callback) {
    if(this.events[eventName]) {
      this.events[eventName].push(callback);
    } else {
      this.events[eventName] = [callback];
    }
  }

  // // 1
  // on(eventName, callback) {
  //   if(this.events[eventName]) {
  //     this.events[eventName].push(callback);
  //   } else {

  //   }
  // }

  // // 2
  // on(eventName, callback) {
  //   if(this.events[eventName]) {
  //     this.events[eventName].push(callback);
  //   } else {

  //   }
  // }

  // // 3
  // on(eventName, callback) {
  //   if(this.events[eventName]) {
  //     this.events[eventName].push(callback);
  //   } else {

  //   }
  // }

  // // 4
  // on(eventName, callback) {
  //   if(this.events[eventName]) {
  //     this.events[eventName].push(callback);
  //   } else {

  //   }
  // }

  // // 5
  // on(eventName, callback) {
  //   if(this.events[eventName]) {
  //     this.events[eventName].push(callback);
  //   } else {

  //   }
  // }

  // // 6
  // on(eventName, callback) {
  //   if(this.events[eventName]) {

  //   } else {

  //   }
  // }

  // // 7
  // on(eventName, callback) {
  //   if(this.events[eventName]) {

  //   } else {

  //   }
  // }

  // // 8
  // on(eventName, callback) {
  //   if(this.events[eventName]) {

  //   } else {

  //   }
  // }

  // // 9
  // on(eventName, callback) {
  //   if(this.events[eventName]) {

  //   } else {

  //   }
  // }

  // // 10
  // on(eventName, callback) {
  //   if(this.events[eventName]) {

  //   } else {

  //   }
  // }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    if(this.events[eventName]) {
      for(let cb of this.events[eventName]) {
        cb();
      }
    }
  }

  // 1

  // 2

  // 3

  // 4

  // 5

  // 6

  // 7

  // 8

  // 9

  // 10

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    delete this.events[eventName];
  }

  // 1

  // 2

  // 3

  // 4

  // 5

  // 6

  // 7

  // 8

  // 9

  // 10
}

module.exports = Events;
