/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./js/game.js\");\n/* harmony import */ var _mobile_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mobile.js */ \"./js/mobile.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var gameContainer = document.querySelector('#game_container');\n  var mobileInfoCaption = document.querySelector('#mobile_info_caption');\n  var desktopInfoCaption = document.querySelector('#desktop_info_caption');\n  var startButton = document.querySelector('#start');\n\n  if (_mobile_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].any()) {\n    gameContainer.setAttribute('style', 'display: none');\n    desktopInfoCaption.setAttribute('style', 'display: none');\n    mobileInfoCaption.setAttribute('style', 'display: block');\n  }\n\n  startButton.addEventListener('click', function () {\n    this.blur(); // removes focus from start button\n\n    var newGame = new _game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    newGame.showFurry();\n    newGame.showCoin();\n    newGame.startGame();\n    document.addEventListener('keydown', function (event) {\n      newGame.turnFurry(event);\n    });\n  });\n});\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./js/coin.js":
/*!********************!*\
  !*** ./js/coin.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n/*\r\n    Coin Constructor\r\n*/\nvar Coin = /*#__PURE__*/function () {\n  function Coin(position) {\n    _classCallCheck(this, Coin);\n\n    this.position = position;\n    this.newPosition = this.execute();\n  }\n\n  _createClass(Coin, [{\n    key: \"execute\",\n    value: function execute() {\n      var notAllowed = [this.position, this.position + 1, this.position + 10, this.position - 1, this.position - 10];\n      var newCoinPosition;\n\n      do {\n        newCoinPosition = Math.floor(Math.random() * 100);\n      } while (newCoinPosition === undefined || notAllowed.includes(newCoinPosition));\n\n      return newCoinPosition;\n    }\n  }]);\n\n  return Coin;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Coin);\n\n//# sourceURL=webpack:///./js/coin.js?");

/***/ }),

/***/ "./js/furry.js":
/*!*********************!*\
  !*** ./js/furry.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/*\r\n    Furry Constructor\r\n*/\nvar Furry = /*#__PURE__*/_createClass(function Furry() {\n  _classCallCheck(this, Furry);\n\n  this.x = 0;\n  this.y = 0;\n  this.direction = 'right';\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Furry);\n\n//# sourceURL=webpack:///./js/furry.js?");

/***/ }),

/***/ "./js/game.js":
/*!********************!*\
  !*** ./js/game.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _coin_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coin.js */ \"./js/coin.js\");\n/* harmony import */ var _furry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./furry.js */ \"./js/furry.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\n/*\r\n    Game Constructor\r\n*/\n\nvar Game = /*#__PURE__*/function () {\n  function Game() {\n    _classCallCheck(this, Game);\n\n    this.board = document.querySelectorAll('#game_board div');\n    this.scoreDisplay = document.querySelector('#counter');\n    this.startButton = document.querySelector('#start');\n    this.gameOverCaption = document.querySelector('#over');\n    this.coinSound = new Audio('sounds/coin.wav');\n    this.furry = new _furry_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    this.score = 0;\n    this.coinPosition = 0;\n  }\n  /* converting Furry's position from x and y (0-9) to the board field number (0-99) */\n\n\n  _createClass(Game, [{\n    key: \"index\",\n    value: function index(x, y) {\n      return x + y * 10;\n    }\n  }, {\n    key: \"showFurry\",\n    value:\n    /* shows Furry on the board */\n    function showFurry() {\n      var furryPosition = this.index(this.furry.x, this.furry.y);\n\n      if (this.board[furryPosition]) {\n        this.board[furryPosition].classList.add('furry');\n      }\n    }\n  }, {\n    key: \"showCoin\",\n    value:\n    /* shows coin on the board */\n    function showCoin() {\n      this.coinPosition = new _coin_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.coinPosition).newPosition;\n\n      if (this.board[this.coinPosition]) {\n        this.board[this.coinPosition].classList.add('coin');\n      }\n    }\n  }, {\n    key: \"moveFurry\",\n    value:\n    /* Furry's movement */\n    function moveFurry() {\n      if (this.furry.direction === 'right') {\n        this.furry.x = this.furry.x + 1;\n      } else if (this.furry.direction === 'left') {\n        this.furry.x = this.furry.x - 1;\n      } else if (this.furry.direction === 'up') {\n        this.furry.y = this.furry.y + 1;\n      } else if (this.furry.direction === 'down') {\n        this.furry.y = this.furry.y - 1;\n      }\n\n      this.hideVisibleFurry();\n      this.showFurry();\n      this.checkCoinCollision();\n      this.checkGameOver();\n    }\n  }, {\n    key: \"turnFurry\",\n    value:\n    /* keyboard handling */\n    function turnFurry(event) {\n      switch (event.which) {\n        case 37:\n          this.furry.direction = 'left';\n          break;\n\n        case 38:\n          this.furry.direction = 'down';\n          break;\n\n        case 39:\n          this.furry.direction = 'right';\n          break;\n\n        case 40:\n          this.furry.direction = 'up';\n          break;\n      }\n    }\n  }, {\n    key: \"hideVisibleFurry\",\n    value:\n    /* removes Furry's clones from the board */\n    function hideVisibleFurry() {\n      var visibleFurry = document.querySelector('.furry');\n\n      if (visibleFurry) {\n        visibleFurry.classList.remove('furry');\n      }\n    }\n  }, {\n    key: \"hideVisibleCoin\",\n    value:\n    /* removes a coin from the board */\n    function hideVisibleCoin() {\n      this.board[this.coinPosition].classList.remove('coin');\n    }\n  }, {\n    key: \"checkCoinCollision\",\n    value:\n    /* coin collision handling */\n    function checkCoinCollision() {\n      var _this = this;\n\n      if (this.coinPosition === this.index(this.furry.x, this.furry.y)) {\n        this.coinSound.play().then(function () {\n          _this.score++;\n          _this.scoreDisplay.innerText = _this.scoreFormat(_this.score);\n          console.log('bang');\n        });\n        this.hideVisibleCoin();\n        this.showCoin();\n      }\n    }\n  }, {\n    key: \"scoreFormat\",\n    value:\n    /* makes three-digit score format */\n    function scoreFormat(score) {\n      if (score.toString().length === 1) {\n        return \"00\".concat(score);\n      }\n\n      if (score.toString().length === 2) {\n        return \"0\".concat(score);\n      }\n\n      return score;\n    }\n  }, {\n    key: \"showGameOverCaption\",\n    value:\n    /* shows \"game over\" caption */\n    function showGameOverCaption() {\n      this.gameOverCaption.classList.remove('invisible');\n    }\n  }, {\n    key: \"hideGameOverCaption\",\n    value:\n    /* hides \"game over\" caption */\n    function hideGameOverCaption() {\n      this.gameOverCaption.classList.add('invisible');\n    }\n  }, {\n    key: \"enableStartButton\",\n    value:\n    /* activates the \"start game\" button */\n    function enableStartButton() {\n      this.startButton.disabled = false;\n    }\n  }, {\n    key: \"disableStartButton\",\n    value:\n    /* deactivates the \"start game\" button */\n    function disableStartButton() {\n      this.startButton.disabled = true;\n    }\n  }, {\n    key: \"checkGameOver\",\n    value:\n    /* game over - when Furry collides edge of the game board */\n    function checkGameOver() {\n      if (this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9) {\n        console.log('game over');\n        clearInterval(this.setIntervalId);\n        this.hideVisibleFurry();\n        this.hideVisibleCoin();\n        this.showGameOverCaption();\n        this.enableStartButton();\n      }\n    }\n  }, {\n    key: \"startGame\",\n    value:\n    /* starts the game */\n    function startGame() {\n      var _this2 = this;\n\n      this.setIntervalId = setInterval(function () {\n        return _this2.moveFurry();\n      }, 350);\n      this.scoreDisplay.innerText = this.scoreFormat(this.score);\n      this.hideGameOverCaption();\n      this.disableStartButton();\n    }\n  }]);\n\n  return Game;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./js/game.js?");

/***/ }),

/***/ "./js/mobile.js":
/*!**********************!*\
  !*** ./js/mobile.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar isMobile = {\n  Android: function Android() {\n    return navigator.userAgent.match(/Android/i);\n  },\n  BlackBerry: function BlackBerry() {\n    return navigator.userAgent.match(/BlackBerry|RIM|BB|PlayBook/i);\n  },\n  iOS: function iOS() {\n    return navigator.userAgent.match(/iPhone|iPad|iPod/i);\n  },\n  Opera: function Opera() {\n    return navigator.userAgent.match(/Opera Mini/i);\n  },\n  Windows: function Windows() {\n    return navigator.userAgent.match(/IEMobile|WPDesktop|Nokia|Windows Phones/i);\n  },\n  webOS: function webOS() {\n    return navigator.userAgent.match(/webOS/i);\n  },\n  Kindle: function Kindle() {\n    return navigator.userAgent.match(/Kindle|Silk|KFAPW|KFARWI|KFASWI|KFFOWI|KFJW|KFMEWI|KFOT|KFSAW|KFSOWI|KFTBW|KFTHW|KFTT|WFFOWI/i);\n  },\n  any: function any() {\n    return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows() || isMobile.webOS() || isMobile.Kindle();\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (isMobile);\n\n//# sourceURL=webpack:///./js/mobile.js?");

/***/ })

/******/ });