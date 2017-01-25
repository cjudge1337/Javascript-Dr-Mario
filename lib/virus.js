const Block = require('./block');

class Virus extends Block {
  constructor(options) {
    super(options);
  }

  draw() {
    const virus = new createjs.Shape();
    virus.name = this.name;
    virus.x = this.x;
    virus.y = this.y;
    virus.graphics.beginFill(this.color).drawPolyStar(0, 0, 10,
      12, 0.6);
    this.easel = virus;
    virus.setBounds(this.x - 10, this.y - 10, 20, 20);
    this.stage.addChild(virus);
    this.stage.update();
  }
}

module.exports = Virus;
