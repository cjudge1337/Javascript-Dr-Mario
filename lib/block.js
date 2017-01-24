class Block {

  constructor(options) {
    this.color = options.color;
    this.stage = options.stage;
    this.x = options.x;
    this.y = options.y;
    this.name = options.name;
  }

  draw(orientation) {
    const block = new createjs.Shape();
    block.name = this.name;
    if (orientation === 'left') {
      block.graphics.beginFill(this.color).drawRoundRectComplex(this.x,
        this.y, 20, 20, 10, 0, 0, 10);
    } else {
      block.graphics.beginFill(this.color).drawRoundRectComplex(this.x,
        this.y, 20, 20, 0, 10, 10, 0);
    }
    this.stage.addChild(block);
    this.stage.update();
  }

  destroy() {
    this.stage.removeChild(this.stage.getChildByName(this.name));
    this.stage.update();
  }
}

module.exports = Block;


// const block = new createjs.Shape();
// block.graphics.beginFill(this.color).drawRoundRectComplex(0, 0, 20, 20, 10, 0, 0, 10);
// block.x = 100;
// block.y = 100;
// this.stage.addChild(block);
// this.stage.update();
// const block2 = new createjs.Shape();
// block2.graphics.beginFill("#0000fc").drawRoundRectComplex(0, 0, 20, 20, 0, 10, 10, 0);
// block2.x = 120;
// block2.y = 100;
// this.stage.addChild(block2);
// this.stage.update();
