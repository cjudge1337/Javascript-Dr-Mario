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
  constructor(ctx) {
    this.ctx = ctx;
    this.drawBlock(0, 0);
  }

  drawBlock(x, y) {
    let pixelX = x * 20;
    let pixelY = (19 - y) * 20;
    this.ctx.fillStyle="#FF0000";

    //Create a filled rectangle
    this.ctx.fillRect(pixelX,pixelY,20,20);
  }
}

Game.WIDTH = 200;
Game.HEIGHT = 400;

module.exports = Game;
