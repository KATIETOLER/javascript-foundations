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
      var newPerson = new Person(this.statues[0].name)
      newPerson.mood = 'relieved'
      this.statues.shift()
    }
    this.statues.push(statue)
    return newPerson
  }
}


//npm test mythical-creatures/test/medusa-test.js

module.exports = Medusa;
