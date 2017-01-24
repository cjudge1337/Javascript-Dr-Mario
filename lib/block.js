class Block {

  constructor(color, stage) {
    debugger
    this.color = color;
    this.stage = stage;
  }

  draw(stage) {
    const block = new createjs.Shape();
    block.graphics.beginFill("DeepSkyBlue").drawRect(0, 0, 100, 100);
    block.x = 100;
    block.y = 100;
    this.stage.addChild(block);
    this.stage.update();
  }

  destroy() {

  }
}

module.exports = Block;

// var circle = new createjs.Shape();
// circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
// circle.x = 100;
// circle.y = 100;
// stage.addChild(circle);
// stage.update();
//
// //Update stage will render next frame
// createjs.Ticker.addEventListener("tick", handleTick);
//
// function handleTick() {
// //Circle will move 10 units to the right.
//   circle.x += 10;
//   //Will cause the circle to wrap back
//   if (circle.x > stage.canvas.width) { circle.x = 0; }
//   stage.update();
// }
