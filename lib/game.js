const Block = require("./block");
const Virus = require('./virus');
const Pill = require('./pill');

const COLORS = [
  '#dfb700',
  '#0000fc',
  '#cc0000'
];

function randomColor() {
  let rand = Math.random();
  rand *= COLORS.length;
  rand = Math.floor(rand);
  return COLORS[rand];
}

class Game {
  constructor(stage) {
    this.stage = stage;
    this.viruses = [];
    this.pills = [];

    this.addPill();
  }

  add(object) {
    this.pills.push(object);
  }

  addViruses() {
    let test = new Virus({color: COLORS[0], stage: this.stage, x: 100, y: 100});
    this.add(test);
  }

  addPill() {
    let colors = [];
    for (let i = 0; i < 2; i++) {
      colors.push(randomColor());
    }
    let pill = new Pill({colors: colors, stage: this.stage, x: 200, y: 200});
    this.add(pill);
  }

  draw() {
    this.pills.forEach((pill) => {
      pill.draw();
    });
  }
}

module.exports = Game;
