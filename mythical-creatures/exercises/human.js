const Ogre = require('./ogre');


class Human {
  constructor(name) {
    this.name = name;
    this.encounterCounter = 0;
    this.notices = false;
    this.knockedOut = false;
  }
  noticesOgre() {
    if(this.encounterCounter === 3 || this.encounterCounter === 6){
      return true;
    }
    return false;
  }
}

module.exports = Human;
