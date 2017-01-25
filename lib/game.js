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
  constructor(stage, document) {
    this.stage = stage;
    this.viruses = [];
    this.pills = [];
    this.keys = {};
    this.document = document;
    this.document.onkeydown = this.keydown.bind(this);
    this.document.onkeyup = this.keyup.bind(this);

    this.addViruses();
    this.addPill();
  }


  keydown(event) {
    this.keys[event.keyCode] = true;
  }

  keyup(event) {
    delete this.keys[event.keyCode];
  }

  start() {
    this.draw();
    createjs.Ticker.setFPS(2);
    createjs.Ticker.setInterval(130);
    createjs.Ticker.addEventListener("tick", handleTick.bind(this));
    function handleTick() {
      if (this.keys[37]) this.pills[0].easel.x -= 20;
      if (this.keys[38]) this.pills[0].easel.rotation += 90;
      if (this.keys[39]) this.pills[0].easel.x += 20;
      if (this.keys[40]) this.pills[0].easel.y += 20;
      this.stage.update();
      // debugger
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
    let pill = new Pill({colors: colors, stage: this.stage, x: 0, y: 0});
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
