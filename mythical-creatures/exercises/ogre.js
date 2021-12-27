

class Ogre {
  constructor(ogre) {
    this.name = ogre.name;
    this.home = ogre.abode || 'Swamp'
    this.swings = 0;

  }
  encounter(human) {
    human.encounterCounter+=1;
    if (human.encounterCounter===3 || human.encounterCounter === 6){
      this.swings+=1
    }
    if(this.swings % 2 == 0){
      human.knockedOut = true;
    }
  }
  swingAt(human) {
    this.swings+=1
  }
  apologize(human) {
    human.knockedOut = false;
  }
}



// npm test mythical-creatures/test/ogre-test.js

module.exports = Ogre;
