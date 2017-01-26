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


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	const Block = __webpack_require__(2);
	
	const COLORS = [0, 59, 240];
	
	function randomColor() {
	  let rand = Math.random();
	  rand *= 3;
	  rand = Math.floor(rand);
	  return COLORS[rand];
	}
	
	
	class Game {
	  constructor(ctx) {
	    this.ctx = ctx;
	    this.grid = new Array(20);
	    for (let i = 0; i < 20; i++) {
	      this.grid[i] = new Array(10);
	      for(let j = 0; j < 10; j++) {
	        this.grid[i][j] = new Block(j, i);
	      }
	    }
	    this.currentPill = {
	      xPos: 4,
	      yPos: 18,
	      orientation: "horizontal1",
	      color1: COLORS[1],
	      color2: COLORS[2]
	    };
	    this.falling = [];
	
	    this.bindKeyHandlers();
	  }
	
	  bindKeyHandlers() {
	    const currentPill = this.currentPill;
	
	    Game.MOVES.forEach(move => {
	      key(move, this.handleMove.bind(this));
	    });
	  }
	
	  handleMove(move) {
	
	    if (move.key === 'a' || move.key === 'ArrowLeft') {
	      this.drawPill(this.currentPill.xPos, this.currentPill.yPos,
	        this.currentPill.orientation, -1, -1);
	      this.currentPill.xPos -= 1;
	
	    } else if (move.key === 'w' || move.key === 'ArrowUp') {
	
	      if (this.currentPill.orientation === 'horizontal1') {
	        this.drawPill(this.currentPill.xPos, this.currentPill.yPos,
	          this.currentPill.orientation, -1, -1);
	        this.currentPill.orientation = 'vertical1';
	
	      } else if (this.currentPill.orientation === 'vertical1') {
	        this.drawPill(this.currentPill.xPos, this.currentPill.yPos,
	          this.currentPill.orientation, -1, -1);
	        this.currentPill.orientation = 'horizontal2';
	
	      } else if (this.currentPill.orientation === 'horizontal2') {
	        this.drawPill(this.currentPill.xPos, this.currentPill.yPos,
	          this.currentPill.orientation, -1, -1);
	        this.currentPill.orientation = 'vertical2';
	
	      } else if (this.currentPill.orientation === 'vertical2') {
	        this.drawPill(this.currentPill.xPos, this.currentPill.yPos,
	          this.currentPill.orientation, -1, -1);
	        this.currentPill.orientation = 'horizontal1';
	      }
	
	    } else if (move.key === 'd' || move.key === 'ArrowRight') {
	      this.drawPill(this.currentPill.xPos, this.currentPill.yPos,
	        this.currentPill.orientation, -1, -1);
	      this.currentPill.xPos += 1;
	
	    } else if (move.key === 's' || move.key === 'ArrowDown') {
	      this.drawPill(this.currentPill.xPos, this.currentPill.yPos,
	        this.currentPill.orientation, -1, -1);
	      this.currentPill.yPos -= 1;
	    }
	
	    this.drawPill(this.currentPill.xPos, this.currentPill.yPos,
	      this.currentPill.orientation, this.currentPill.color1,
	      this.currentPill.color2);
	
	    this.drawGrid();
	  }
	
	  drawBlock(xPos, yPos, hue) {
	    let pixelX = xPos * 20;
	    let pixelY = (19 - yPos) * 20;
	    if (hue !== -1) {
	      this.ctx.fillStyle = `hsl(${hue}, 100%, 50%)`;
	      this.ctx.fillRect(pixelX + 2, pixelY + 2, 16, 16);
	
	      this.ctx.fillStyle = `hsl(${hue}, 100%, 70%)`;
	      this.ctx.beginPath();
	      this.ctx.moveTo(pixelX, pixelY);
	      this.ctx.lineTo(pixelX + 20, pixelY);
	      this.ctx.lineTo(pixelX + 18, pixelY + 2);
	      this.ctx.lineTo(pixelX + 2, pixelY + 2);
	      this.ctx.fill();
	
	      this.ctx.fillStyle = `hsl(${hue}, 100%, 40%)`;
	      this.ctx.beginPath();
	      this.ctx.moveTo(pixelX, pixelY);
	      this.ctx.lineTo(pixelX, pixelY + 20);
	      this.ctx.lineTo(pixelX + 2, pixelY + 18);
	      this.ctx.lineTo(pixelX + 2, pixelY + 2);
	      this.ctx.fill();
	
	      this.ctx.beginPath();
	      this.ctx.moveTo(pixelX + 20, pixelY);
	      this.ctx.lineTo(pixelX + 20, pixelY + 20);
	      this.ctx.lineTo(pixelX + 18, pixelY + 18);
	      this.ctx.lineTo(pixelX + 18, pixelY + 2);
	      this.ctx.fill();
	
	      this.ctx.fillStyle = `hsl(${hue}, 100%, 30%)`;
	
	      this.ctx.beginPath();
	      this.ctx.moveTo(pixelX, pixelY + 20);
	      this.ctx.lineTo(pixelX + 20, pixelY + 20);
	      this.ctx.lineTo(pixelX + 18, pixelY + 18);
	      this.ctx.lineTo(pixelX + 2, pixelY + 18);
	      this.ctx.fill();
	    }
	  }
	
	  drawPill(xPos, yPos, orientation, color1 = randomColor(), color2 = randomColor()) {
	    if (orientation === 'horizontal1') {
	      this.setGrid(xPos, yPos, color1);
	      this.setGrid(xPos - 1, yPos, color2);
	    } else if (orientation === 'vertical1') {
	      this.setGrid(xPos, yPos, color1);
	      this.setGrid(xPos, yPos + 1, color2);
	    } else if (orientation === 'horizontal2') {
	      this.setGrid(xPos, yPos, color2);
	      this.setGrid(xPos, yPos + 1, color1);
	    } else if (orientation === 'vertical2') {
	      this.setGrid(xPos, yPos, color2);
	      this.setGrid(xPos, yPos + 1, color1);
	    }
	  }
	
	  drawGrid() {
	    this.ctx.clearRect(0, 0, 200, 400);
	
	    for (let i = 0; i < 20; i++) {
	      for (let j = 0; j < 10; j++) {
	        this.drawBlock(j, i, this.grid[i][j].color);
	      }
	    }
	  }
	
	  setGrid(x, y, color) {
	    if (x >= 0 && x < 10 && y >= 0 && y < 20) {
	      this.grid[y][x].color = color;
	    }
	  }
	}
	
	Game.WIDTH = 200;
	Game.HEIGHT = 400;
	Game.MOVES = [
	  'w',
	  'a',
	  's',
	  'd',
	  'up',
	  'left',
	  'right',
	  'down'
	];
	
	module.exports = Game;


/***/ },
/* 2 */
/***/ function(module, exports) {

	class Block {
	  constructor(xPos, yPos) {
	    this.xPos = xPos;
	    this.yPos = yPos;
	    this.color = -1;
	    this.virus = false;
	  }
	}
	
	module.exports = Block;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map