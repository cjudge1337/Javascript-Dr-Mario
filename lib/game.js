const Block = require("./block");
const Virus = require('./virus');
const Pill = require('./pill');

const COLORS = [0, 59, 240];

function randomColor() {
  let rand = Math.random();
  rand *= COLORS.length;
  rand = Math.floor(rand);
  return COLORS[rand];
}


class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.grid = new Array(20);
    for (let i = 0; i < 20; i++) {
      this.grid[i] = new Array(10);
      for(let j = 0; j < 10; j++) {
        this.grid[i][j] = 0;
      }
    }
    this.drawPill(2, 2, 'horizontal');
    this.drawPill(5, 5, 'vertical');
  }

  drawBlock(xPos, yPos, hue) {
    let pixelX = xPos * 20;
    let pixelY = (19 - yPos) * 20;

    this.ctx.fillStyle = `hsl(${hue}, 100%, 50%)`;
    this.ctx.fillRect(pixelX + 2, pixelY + 2, 16, 16);

    this.ctx.fillStyle = `hsl(${hue}, 100%, 70%)`;
    this.ctx.beginPath();
    this.ctx.moveTo(pixelX, pixelY);
    this.ctx.lineTo(pixelX + 20, pixelY);
    this.ctx.lineTo(pixelX + 18, pixelY + 2);
    this.ctx.lineTo(pixelX + 2, pixelY + 2);
    this.ctx.fill();

    this.ctx.fillStyle = `hsl(${hue}, 100%, 40%)`;
    this.ctx.beginPath();
    this.ctx.moveTo(pixelX, pixelY);
    this.ctx.lineTo(pixelX, pixelY + 20);
    this.ctx.lineTo(pixelX + 2, pixelY + 18);
    this.ctx.lineTo(pixelX + 2, pixelY + 2);
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.moveTo(pixelX + 20, pixelY);
    this.ctx.lineTo(pixelX + 20, pixelY + 20);
    this.ctx.lineTo(pixelX + 18, pixelY + 18);
    this.ctx.lineTo(pixelX + 18, pixelY + 2);
    this.ctx.fill();

    this.ctx.fillStyle = `hsl(${hue}, 100%, 30%)`;

    this.ctx.beginPath();
    this.ctx.moveTo(pixelX, pixelY + 20);
    this.ctx.lineTo(pixelX + 20, pixelY + 20);
    this.ctx.lineTo(pixelX + 18, pixelY + 18);
    this.ctx.lineTo(pixelX + 2, pixelY + 18);
    this.ctx.fill();

  }

  drawPill(xPos, yPos, orientation) {
    if (orientation === 'horizontal') {
      this.drawBlock(xPos, yPos, randomColor());
      this.drawBlock(xPos - 1, yPos, randomColor());
    } else {
      this.drawBlock(xPos, yPos, randomColor());
      this.drawBlock(xPos, yPos + 1, randomColor());
    }
  }
}

Game.WIDTH = 200;
Game.HEIGHT = 400;

module.exports = Game;
