
class Werewolf {
  constructor(name) {
    this.name = name
    this.form = 'human'
    this.hungry = false
  }
  completeTransformation() {
    if(this.form === 'human') {
      this.form = 'wolf'
      this.hungry = true
      return `Aaa-Woooo!`
    }
    this.form = 'human'
    this.hungry = false;
    return 'Where are I?'
  }
  eatVictim(victim) {
    if(this.form == 'wolf'){
      victim.alive = false;
      this.form = 'human'
      return `Yum, ${victim.name} was delicious.`
    }
    return `No way am I eating ${victim.name}, I'd like a burger!`
  }
}


//npm test mythical-creatures/test/werewolf-test.js

module.exports = Werewolf;
