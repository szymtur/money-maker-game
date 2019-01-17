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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./js/game.js\");\n/* harmony import */ var _mobile_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mobile.js */ \"./js/mobile.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var gameContainer = document.querySelector('#game_container');\n  var infoCaption = document.querySelector('#info_caption');\n  var startButton = document.querySelector('#start');\n\n  if (_mobile_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].any()) {\n    gameContainer.classList.add('invisible');\n    infoCaption.classList.remove('invisible');\n  }\n\n  startButton.addEventListener('click', function () {\n    var newGame = new _game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    newGame.showFurry();\n    newGame.showCoin();\n    newGame.startGame();\n    document.addEventListener('keydown', function (event) {\n      newGame.turnFurry(event);\n    });\n  });\n});\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./js/coin.js":
/*!********************!*\
  !*** ./js/coin.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//konstruktor monety\nfunction Coin() {\n  this.x = Math.floor(Math.random() * 10);\n  this.y = Math.floor(Math.random() * 10);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Coin);\n\n//# sourceURL=webpack:///./js/coin.js?");

/***/ }),

/***/ "./js/furry.js":
/*!*********************!*\
  !*** ./js/furry.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//konstruktor Furry'ego\nfunction Furry() {\n  this.x = 0;\n  this.y = 0;\n  this.direction = 'right';\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Furry);\n\n//# sourceURL=webpack:///./js/furry.js?");

/***/ }),

/***/ "./js/game.js":
/*!********************!*\
  !*** ./js/game.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _coin_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coin.js */ \"./js/coin.js\");\n/* harmony import */ var _furry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./furry.js */ \"./js/furry.js\");\n\n //konstruktor gry\n\nfunction Game() {\n  this.board = document.querySelectorAll('#game_board div');\n  this.scoreDisplay = document.querySelector('#counter');\n  this.startButton = document.querySelector('#start');\n  this.gameOverCaption = document.querySelector('#over');\n  this.furry = new _furry_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  this.coin = new _coin_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  this.coinSound = new Audio('sounds/coin.wav');\n  this.score = 0; //metoda do przelicznia pozycji Furry'ego i monety z x i y (0-9) na numer pola tablicy (0-99)\n\n  this.index = function (x, y) {\n    return x + y * 10;\n  }; //pokazuje Furry'ego na planszy\n\n\n  this.showFurry = function () {\n    this.hideVisibleFurry();\n\n    if (this.board[this.index(this.furry.x, this.furry.y)] != null) {\n      this.board[this.index(this.furry.x, this.furry.y)].classList.add('furry');\n    }\n  }; //pokazuje monetę na planszy\n\n\n  this.showCoin = function () {\n    this.board[this.index(this.coin.x, this.coin.y)].classList.add('coin');\n  }; //poruszanie się Furry'ego\n\n\n  this.moveFurry = function () {\n    if (this.furry.direction === 'right') {\n      this.furry.x = this.furry.x + 1;\n    } else if (this.furry.direction === 'left') {\n      this.furry.x = this.furry.x - 1;\n    } else if (this.furry.direction === 'up') {\n      this.furry.y = this.furry.y + 1;\n    } else if (this.furry.direction === 'down') {\n      this.furry.y = this.furry.y - 1;\n    }\n\n    this.showFurry();\n    this.checkCoinCollision();\n    this.gameOver();\n  }; //sterowanie klawiaturą\n\n\n  this.turnFurry = function (event) {\n    switch (event.which) {\n      case 37:\n        this.furry.direction = 'left';\n        break;\n\n      case 38:\n        this.furry.direction = 'down';\n        break;\n\n      case 39:\n        this.furry.direction = 'right';\n        break;\n\n      case 40:\n        this.furry.direction = 'up';\n        break;\n    }\n  }; //usuwanie klonów Furry'ego\n\n\n  this.hideVisibleFurry = function () {\n    var visibleFurry = document.querySelector('.furry');\n\n    if (visibleFurry != null) {\n      visibleFurry.classList.remove('furry');\n    }\n  }; //usuwanie monety\n\n\n  this.hideVisibleCoin = function () {\n    this.board[this.index(this.coin.x, this.coin.y)].classList.remove('coin');\n  }; //zderzenie z monetą\n\n\n  this.checkCoinCollision = function () {\n    if (this.furry.x === this.coin.x && this.furry.y === this.coin.y) {\n      this.hideVisibleCoin();\n      this.coinSound.play();\n      this.score++;\n      this.scoreDisplay.innerText = this.scoreFormat(this.score);\n      this.coin = new _coin_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n      this.showCoin();\n      console.log('bang');\n    }\n  }; //ustawia trzycyfrowy format punktacji\n\n\n  this.scoreFormat = function (score) {\n    if (score.toString().length == 1) {\n      return \"00\".concat(score);\n    } else if (score.toString().length == 2) {\n      return \"0\".concat(score);\n    } else {\n      return score;\n    }\n  }; //pokazuje napis \"game over\"\n\n\n  this.showGameOverCaption = function () {\n    this.gameOverCaption.classList.remove('invisible');\n  }; //ukrywa napis \"game over\"\n\n\n  this.hideGameOverCaption = function () {\n    this.gameOverCaption.classList.add('invisible');\n  }; //aktywuje przycisk \"start game\"\n\n\n  this.enableStartButton = function () {\n    this.startButton.disabled = false;\n  }; //dezaktywuje przycisk \"start game\"\n\n\n  this.disableStartButton = function () {\n    this.startButton.disabled = true;\n  }; //koniec gry - gdy Furry zderzy się z krawędzią planszy\n\n\n  this.gameOver = function () {\n    if (this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9) {\n      console.log('game over');\n      clearInterval(this.idSetInterval);\n      this.hideVisibleFurry();\n      this.hideVisibleCoin();\n      this.showGameOverCaption();\n      this.enableStartButton();\n    }\n  }; //wprawienie Furry'ego w ruch\n\n\n  this.startGame = function () {\n    var _this = this;\n\n    this.idSetInterval = setInterval(function () {\n      _this.moveFurry();\n    }, 350);\n    this.scoreDisplay.innerText = this.scoreFormat(0);\n    this.hideGameOverCaption();\n    this.disableStartButton();\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./js/game.js?");

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