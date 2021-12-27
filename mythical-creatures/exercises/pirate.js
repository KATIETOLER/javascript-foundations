
class Pirate {
  constructor(name, job){
    this.name = name;
    this.job = job || 'scallywag'
    this.cursed = false;
    this.booty = 0;
  }
  robShip() {
    if(this.booty<=499){
    this.booty+=100
  return `YAARRR!`}
    this.cursed = true;
    return `ARG! I\'ve been cursed!`
  }
  liftCurse() {
    if(this.booty>=500 && this.cursed){
      this.booty-=300;
      this.cursed=false;
      return `Your curse has been lifted!`
    }
      return `You don\'t need to lift a curse!`
  }
}


//npm test mythical-creatures/test/pirate-test.js

module.exports = Pirate;
