const Block = require('./block');

class Pill {
  constructor(options) {
    this.colors = options.colors;
    this.stage = options.stage;
    this.x = options.x;
    this.y = options.y;
    this.name = options.name;

    let left = new Block({color: this.colors[0], stage: this.stage, x: this.x,
      y: this.y, name: this.name + "left", orientation: "left"});
    let right = new Block({color: this.colors[1], stage: this.stage, x: this.x + 20,
      y: this.y, name: this.name + "right", orientation: "right"});
    this.blocks = [left, right];
  }

  draw() {
    let pill = new createjs.Container();
    this.blocks.forEach((block) => {
      pill.addChild(block.draw());
    });
    this.stage.addChild(pill);
    this.stage.update();
  }
}

module.exports = Pill;
