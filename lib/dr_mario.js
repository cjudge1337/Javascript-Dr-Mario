const Game = require("./game");

document.addEventListener("DOMContentLoaded", function() {
  const canvas = document.getElementsByTagName('canvas')[0];
  canvas.style.backgroundColor = "black";
  const stage = new createjs.Stage(canvas);
  new Game(stage, document).start();
});
