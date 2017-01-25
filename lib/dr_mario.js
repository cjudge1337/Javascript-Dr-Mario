const Game = require("./game");

document.addEventListener("DOMContentLoaded", function() {
  const canvas = document.getElementsByTagName('canvas')[0];
  const ctx = canvas.getContext("2d");

  canvas.width = Game.WIDTH;
  canvas.height = Game.HEIGHT;
  new Game(ctx);
});

// recreate board using grid system
// write horizontal fall and veritcal fall
// write rotate
// write method to check if pill should continue moving
// check for 4 of a kind
// resume falling
