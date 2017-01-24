const Block = require("./block");

class Game {
  constructor(stage) {
    this.stage = stage;
    this.viruses = [];
    this.pills = [];

    this.addViruses();
  }

  add(object) {
    this.viruses.push(object);
  }

  addViruses() {
    this.add(new Block("RED", this.stage));
  }

  draw() {
    this.viruses.forEach((virus) => {
      virus.draw();
    });
  }
}

module.exports = Game;
