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
	const Virus = __webpack_require__(4);
	const Pill = __webpack_require__(5);
	
	const COLORS = [0, 59, 240];
	
	function randomColor() {
	  let rand = Math.random();
	  rand *= COLORS.length;
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
	        this.grid[i][j] = 0;
	      }
	    }
	    this.drawPill(2, 2, 'horizontal');
	    this.drawPill(5, 5, 'vertical');
	  }
	
	  drawBlock(xPos, yPos, hue) {
	    let pixelX = xPos * 20;
	    let pixelY = (19 - yPos) * 20;
	
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
	
	  drawPill(xPos, yPos, orientation) {
	    if (orientation === 'horizontal') {
	      this.drawBlock(xPos, yPos, randomColor());
	      this.drawBlock(xPos - 1, yPos, randomColor());
	    } else {
	      this.drawBlock(xPos, yPos, randomColor());
	      this.drawBlock(xPos, yPos + 1, randomColor());
	    }
	  }
	}
	
	Game.WIDTH = 200;
	Game.HEIGHT = 400;
	
	module.exports = Game;


/***/ },
/* 2 */
/***/ function(module, exports) {

	class Block {
	
	}
	
	module.exports = Block;


/***/ },
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	const Block = __webpack_require__(2);
	
	class Virus extends Block {
	}
	module.exports = Virus;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	const Block = __webpack_require__(2);
	
	class Pill {
	}
	module.exports = Pill;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map