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
	
	
	
	class Game {
	  constructor(ctx) {
	    this.ctx = ctx;
	    this.drawBlock(0, 0);
	  }
	
	  drawBlock(x, y) {
	    let pixelX = x * 20;
	    let pixelY = (19 - y) * 20;
	    this.ctx.fillStyle="#FF0000";
	
	    //Create a filled rectangle
	    this.ctx.fillRect(pixelX,pixelY,20,20);
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