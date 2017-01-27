const Game = require("./game");

document.addEventListener("DOMContentLoaded", function() {
  const canvas = document.getElementsByTagName('canvas')[0];
  const ctx = canvas.getContext("2d");
  const entryEl = document.getElementById("entry-screen");
  const game = new Game(ctx);
  canvas.width = Game.WIDTH;
  canvas.height = Game.HEIGHT;

  const hideEntryEl = () => {
  };

  document.addEventListener("keypress", function(e) {
    if (e.keyCode === 13 && game.inProgress === false) {
      canvas.classList.remove("opaque");
      game.start();
    }
  });

});
