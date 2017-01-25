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

    this.addViruses();
  }

  start() {
    this.draw();
    createjs.Ticker.addEventListener("tick", handleTick.bind(this));
    function handleTick() {
      this.viruses[0].easel.y += 10;
      this.stage.update();
      console.log("display y: ", this.viruses[0].display.y);
      console.log("object y: ", this.viruses[0].y);
    }
  }

  add(object) {
    this.viruses.push(object);
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
    this.viruses.forEach((virus) => {
      virus.draw();
    });
  }
}

module.exports = Game;
