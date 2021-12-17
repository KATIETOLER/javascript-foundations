class Centaur {
  constructor(centaur) {
    this.name = centaur.name
    this.breed = centaur.type
    this.soundEffect = `Clop clop clop clop!!!`
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.count = 0;
  }
  shootBow() {
    this.count++
    if(this.count >= 3 || this.layingDown) {
      this.cranky = true;
      return 'NO!'
    }
    return `Twang!!!`
  }
  run() {
    this.count++
    if(this.count >= 3 || this.layingDown) {
      this.cranky = true;
      return 'NO!'
    }
    return this.soundEffect
  }
  sleep() {
    if(this.standing) {
      return `NO!`
    }
    this.count = 0;
    this.cranky = false;
    return `ZZZZ`
  }
  layDown() {
    this.standing = false;
    this.layingDown = true;
  }
  standUp() {
    this.standing = true;
    this.layingDown = false;
  }
  drinkPotion(){
    if(!this.standing){
      return `Not while I\'m laying down!`
    }
    this.cranky = false;
  }
}




module.exports = Centaur
//npm test mythical-creatures/test/centaur-test.js
