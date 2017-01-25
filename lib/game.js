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

function randomHeight() {
  let rand = Math.random();
  rand *= 500;
  rand = Math.floor(rand);
  return rand;
}

function randomWidth() {
  let rand = Math.random();
  rand *= 300;
  rand = Math.floor(rand);
  return rand;
}

class Game {
  constructor(stage) {
    this.stage = stage;
    this.viruses = [];
    this.pills = [];

    this.addViruses();
    this.addPill();
  }

  start() {
    this.draw();
    createjs.Ticker.setFPS(3);
    createjs.Ticker.addEventListener("tick", handleTick.bind(this));
    function handleTick() {
      this.pills[0].easel.y += 10;
      this.stage.update();
    }
  }


  addViruses() {
    for (let i = 0; i < 4; i++) {
      let virus = new Virus({color: randomColor(), stage: this.stage,
        x: randomWidth(), y: randomHeight()});
      this.viruses.push(virus);
    }
  }

  addPill() {
    let colors = [];
    for (let i = 0; i < 2; i++) {
      colors.push(randomColor());
    }
    let pill = new Pill({colors: colors, stage: this.stage, x: 130, y: 20});
    this.pills.push(pill);
  }

  draw() {
    this.viruses.forEach((virus) => {
      virus.draw();
    });
    this.pills.forEach((pill) => {
      pill.draw();
    });
  }
}

module.exports = Game;
