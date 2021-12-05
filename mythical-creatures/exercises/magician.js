
class Magician {

  constructor(magician){
    this.name = `The Great ${magician.name}`;
    this.assistant = magician.assistant;
    this.favoriteAccessory = magician.clothing || 'top hat'
    this.confidencePercentage = 10;
  }
  performIncantation(incantation) {
    var incant = incantation.toUpperCase()
    return  `${incant}!`
  }
performTrick(){
  this.confidencePercentage+=10
  if(this.favoriteAccessory === 'top hat'){
  return `PULL RABBIT FROM TOP HAT`
    }
  return `PULL DOVE FROM SLEEVE`
  }
performShowStopper() {
  if(this.confidencePercentage >=100 && this.assistant === true) {
    return `WOW! The magician totally just sawed that person in half!`
    }
  return `Oh no, this trick is not ready!`
  }
}

//npm test mythical-creatures/test/magician-test.js

module.exports = Magician;
