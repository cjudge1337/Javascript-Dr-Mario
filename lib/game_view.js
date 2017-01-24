class GameView {
  constructor(game, stage) {
    this.game = game;
    this.stage = stage;
  }

  start() {
    this.game.draw();
  }
}

module.exports = GameView;
