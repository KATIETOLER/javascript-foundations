var Person = require('./person');
var Statue = require('./statue');


class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = []
  }
  gazeAtVictim(victim) {
    var statue = new Statue(victim.name)
    if (this.statues.length >= 3) {
      this.statues.shift()
    }
    this.statues.push(statue)
  }
}


//npm test mythical-creatures/test/medusa-test.js

module.exports = Medusa;
