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
	const GameView = __webpack_require__(2);
	
	document.addEventListener("DOMContentLoaded", function() {
	  const stage = new createjs.Stage("canvas");
	  var circle = new createjs.Shape();
	  circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
	  circle.x = 100;
	  circle.y = 100;
	  stage.addChild(circle);
	  stage.update();
	
	  //Update stage will render next frame
	createjs.Ticker.addEventListener("tick", handleTick);
	
	function handleTick() {
	 //Circle will move 10 units to the right.
	    circle.x += 10;
	    //Will cause the circle to wrap back
	    if (circle.x > stage.canvas.width) { circle.x = 0; }
	    stage.update();
	}
	});


/***/ },
/* 1 */
/***/ function(module, exports) {



/***/ },
/* 2 */
/***/ function(module, exports) {



/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map