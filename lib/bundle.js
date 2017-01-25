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
	
	document.addEventListener("DOMContentLoaded", function() {
	  const canvas = document.getElementsByTagName('canvas')[0];
	  canvas.style.backgroundColor = "black";
	  const stage = new createjs.Stage(canvas);
	  new Game(stage).start();
	});


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	const Block = __webpack_require__(2);
	const Virus = __webpack_require__(4);
	const Pill = __webpack_require__(5);
	
	const COLORS = [
	  '#dfb700',
	  '#0000fc',
	  '#cc0000'
	];
	
	function randomColor() {
	  let rand = Math.random();
	  rand *= COLORS.length;
	  rand = Math.floor(rand);
	  return COLORS[rand];
	}
	
	function randomHeight() {
	  let rand = Math.random();
	  rand *= 500;
	  rand = Math.floor(rand);
	  return rand;
	}
	
	function randomWidth() {
	  let rand = Math.random();
	  rand *= 300;
	  rand = Math.floor(rand);
	  return rand;
	}
	
	class Game {
	  constructor(stage) {
	    this.stage = stage;
	    this.viruses = [];
	    this.pills = [];
	
	    this.addViruses();
	    this.addPill();
	  }
	
	  start() {
	    this.draw();
	    createjs.Ticker.setFPS(3);
	    createjs.Ticker.addEventListener("tick", handleTick.bind(this));
	    function handleTick() {
	      this.pills[0].easel.y += 10;
	      this.stage.update();
	    }
	  }
	
	
	  addViruses() {
	    for (let i = 0; i < 4; i++) {
	      let virus = new Virus({color: randomColor(), stage: this.stage,
	        x: randomWidth(), y: randomHeight()});
	      this.viruses.push(virus);
	    }
	  }
	
	  addPill() {
	    let colors = [];
	    for (let i = 0; i < 2; i++) {
	      colors.push(randomColor());
	    }
	    let pill = new Pill({colors: colors, stage: this.stage, x: 130, y: 20});
	    this.pills.push(pill);
	  }
	
	  draw() {
	    this.viruses.forEach((virus) => {
	      virus.draw();
	    });
	    this.pills.forEach((pill) => {
	      pill.draw();
	    });
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
	    this.orientation = options.orientation;
	  }
	
	  draw() {
	    const block = new createjs.Shape();
	    block.name = this.name;
	    block.x = this.x;
	    block.y = this.y;
	    block.setBounds(this.x - 20, this.y - 20, 20, 20);
	    if (this.orientation === 'left') {
	      block.graphics.beginFill(this.color).drawRoundRectComplex(0,
	        0, 20, 20, 10, 0, 0, 10);
	    } else {
	      block.graphics.beginFill(this.color).drawRoundRectComplex(0,
	        0, 20, 20, 0, 10, 10, 0);
	    }
	    return block;
	  }
	
	  destroy() {
	    this.stage.removeChild(this.stage.getChildByName(this.name));
	    this.stage.update();
	  }
	}
	
	module.exports = Block;


/***/ },
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	const Block = __webpack_require__(2);
	
	class Virus extends Block {
	  constructor(options) {
	    super(options);
	  }
	
	  draw() {
	    const virus = new createjs.Shape();
	    virus.name = this.name;
	    virus.x = this.x;
	    virus.y = this.y;
	    virus.graphics.beginFill(this.color).drawPolyStar(0, 0, 10,
	      12, 0.6);
	    this.easel = virus;
	    virus.setBounds(this.x - 10, this.y - 10, 20, 20);
	    this.stage.addChild(virus);
	    this.stage.update();
	  }
	}
	
	module.exports = Virus;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	const Block = __webpack_require__(2);
	
	class Pill {
	  constructor(options) {
	    this.colors = options.colors;
	    this.stage = options.stage;
	    this.x = options.x;
	    this.y = options.y;
	    this.name = options.name;
	
	    let left = new Block({color: this.colors[0], stage: this.stage, x: this.x,
	      y: this.y, name: this.name + "left", orientation: "left"});
	    let right = new Block({color: this.colors[1], stage: this.stage, x: this.x + 20,
	      y: this.y, name: this.name + "right", orientation: "right"});
	    this.blocks = [left, right];
	  }
	
	  draw() {
	    let pill = new createjs.Container();
	    this.blocks.forEach((block) => {
	      pill.addChild(block.draw());
	    });
	    this.easel = pill;
	    this.stage.addChild(pill);
	    this.stage.update();
	  }
	}
	
	module.exports = Pill;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map