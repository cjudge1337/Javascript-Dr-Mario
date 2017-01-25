class Block {

  constructor(options) {
    this.color = options.color;
    this.stage = options.stage;
    this.x = options.x;
    this.y = options.y;
    this.name = options.name;
    this.orientation = options.orientation;
  }

  draw() {
    const block = new createjs.Shape();
    block.name = this.name;
    if (this.orientation === 'left') {
      block.graphics.beginFill(this.color).drawRoundRectComplex(this.x,
        this.y, 20, 20, 10, 0, 0, 10);
    } else {
      block.graphics.beginFill(this.color).drawRoundRectComplex(this.x,
        this.y, 20, 20, 0, 10, 10, 0);
    }
    return block;
  }

  destroy() {
    this.stage.removeChild(this.stage.getChildByName(this.name));
    this.stage.update();
  }
}

module.exports = Block;
