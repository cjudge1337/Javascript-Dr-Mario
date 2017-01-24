const Block = require("./block");

const COLORS = {
  "black": '#000000',
  "yellow": '#dfb700',
  "blue": '#0000fc',
  "red": 'cc0000'
};

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
    let test = new Block({color: COLORS.yellow, stage: this.stage, x: 20, y: 20});
    this.add(test);
  }

  draw() {
    this.viruses.forEach((virus) => {
      virus.draw('left');
    });
    this.viruses[0].destroy();
  }
}

module.exports = Game;
