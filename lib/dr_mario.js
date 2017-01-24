const Game = require("./game");
const GameView = require("./game_view");

document.addEventListener("DOMContentLoaded", function() {
  const stage = new createjs.Stage("canvas");
  var circle = new createjs.Shape();
  circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
  circle.x = 100;
  circle.y = 100;
  stage.addChild(circle);
  stage.update();

  //Update stage will render next frame
createjs.Ticker.addEventListener("tick", handleTick);

function handleTick() {
 //Circle will move 10 units to the right.
    circle.x += 10;
    //Will cause the circle to wrap back
    if (circle.x > stage.canvas.width) { circle.x = 0; }
    stage.update();
}
});
