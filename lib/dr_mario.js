const Game = require("./game");

document.addEventListener("DOMContentLoaded", function() {
  const canvas = document.getElementsByTagName('canvas')[0];
  const ctx = canvas.getContext("2d");

  canvas.width = Game.WIDTH;
  canvas.height = Game.HEIGHT;
  new Game(ctx);
});
