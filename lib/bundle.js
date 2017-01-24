/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const Game = __webpack_require__(1);
	const GameView = __webpack_require__(3);
	
	document.addEventListener("DOMContentLoaded", function() {
	  const canvas = document.getElementsByTagName('canvas')[0];
	  canvas.style.backgroundColor = "black";
	  const stage = new createjs.Stage(canvas);
	  const game = new Game(stage);
	  new GameView(game, stage).start();
	});


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	const Block = __webpack_require__(2);
	
	const COLORS = {
	  "black": '#000000',
	  "yellow": '#dfb700',
	  "blue": '#0000fc',
	  "red": 'cc0000'
	};
	
	class Game {
	  constructor(stage) {
	    this.stage = stage;
	    this.viruses = [];
	    this.pills = [];
	
	    this.addViruses();
	  }
	
	  add(object) {
	    this.viruses.push(object);
	  }
	
	  addViruses() {
	    let test = new Block({color: COLORS.yellow, stage: this.stage, x: 20, y: 20});
	    this.add(test);
	  }
	
	  draw() {
	    this.viruses.forEach((virus) => {
	      virus.draw('left');
	    });
	    this.viruses[0].destroy();
	  }
	}
	
	module.exports = Game;


/***/ },
/* 2 */
/***/ function(module, exports) {

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


/***/ },
/* 3 */
/***/ function(module, exports) {

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


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map