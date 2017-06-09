const Game = require("./game");

document.addEventListener("DOMContentLoaded", function() {
  const canvas = document.getElementsByTagName('canvas')[0];
  const ctx = canvas.getContext("2d");
  const entryEl = document.getElementById("entry-screen");
  let game = new Game(ctx);
  canvas.width = Game.WIDTH;
  canvas.height = Game.HEIGHT;

  document.addEventListener("keypress", function(e) {
    if (e.keyCode === 13 && game.inProgress === false) {
      game.start();
    } else if (e.keyCode === 32) {
      window.location.reload();
    }
  });

});
