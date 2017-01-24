const Game = require("./game");
const GameView = require("./game_view");

document.addEventListener("DOMContentLoaded", function() {
  const canvas = document.getElementsByTagName('canvas')[0];
  canvas.style.backgroundColor = "black";
  const stage = new createjs.Stage(canvas);
  const game = new Game(stage);
  new GameView(game, stage).start();
});
