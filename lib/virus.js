const Block = require('./block');

class Virus extends Block {
  constructor(options) {
    super(options);
  }

  draw() {
    const virus = new createjs.Shape();
    virus.name = this.name;
    virus.graphics.beginFill(this.color).drawPolyStar(this.x, this.y, 10,
      12, 0.6);
      this.easel = virus;
    this.stage.addChild(virus);
    this.stage.update();
  }
}

module.exports = Virus;
