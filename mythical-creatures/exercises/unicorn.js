class Unicorn {
  constructor(name, color) {
    this.name = name;
    this.color = color || "white";
  }
  isWhite() {
    if(this.color === "white") {
      return true;
    } else {
      return false;
    }
  }
  says(sparkle) {
    var unicornSpeak = "**;* " + sparkle + " *;**"
    return unicornSpeak
  }
}

module.exports = Unicorn;
