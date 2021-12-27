class Sphinx{
  constructor(name) {
    this.name = name;
    this.riddles = [];
    this.heroesEaten = 0;
  }
  collectRiddle(riddle) {
    this.riddles.push(riddle)
    for(var i =0; i < this.riddles.length; i++){
      if(this.riddles.length >= 4) {
        this.riddles.splice(i, 1)
      }
    }
  }
  attemptAnswer(answer){
  for(var i =0; i < this.riddles.length; i++){
    if(this.riddles.length === 1 && this.riddles[i].answer === answer) {
      var rage = `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS \"${this.riddles[i].answer}"???`
      this.riddles.splice(i, 1)
      return rage
    }
    if (this.riddles[i].answer === answer) {
      this.riddles.splice(i, 1)
      return `That wasn\'t that hard, I bet you don\'t get the next one`
    }
  }
  this.heroesEaten+=1
  }
}





// npm test mythical-creatures/test/sphinx-test.js
module.exports = Sphinx;
