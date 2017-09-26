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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//ES6 CODE, which will be converted to ES5 code by Babel, and will be output into temp/Script/app-es6.js

var speciesName = document.querySelector('.panel-name');
var outter = document.querySelectorAll('.outter');
console.log(outter);

[].forEach.call(outter, function (c) {
	var inner = c.querySelectorAll('.inner')[0],
	    next = c.querySelectorAll('.next')[0],
	    prev = c.querySelectorAll('.prev')[0],
	    bubblesContainer = c.querySelectorAll('.bubbles')[0],
	    images = c.querySelectorAll('img'),
	    species = ['Button-Mushroom', 'Bearded-Tooth-Mushroom', 'Idontknow-Mushroom', 'Oyster-Mushroom', 'Chanterelle'],
	    currentImageIndex = 0,
	    width = 720,
	    bubbles = [];

	var _loop = function _loop(i) {
		var b = document.createElement('span');
		b.classList.add('bubble');
		bubblesContainer.appendChild(b);
		bubbles.push(b);

		b.addEventListener('click', function () {
			currentImageIndex = i;
			switchImg();
		});
	};

	for (var i = 0; i < images.length; i++) {
		_loop(i);
	}

	function showName() {
		console.log(species[currentImageIndex]);
		speciesName.innerHTML = species[currentImageIndex];
	}

	function switchImg() {
		// console.log(currentImageIndex);
		inner.style.left = -width * currentImageIndex + 'px';
		for (var x in bubbles) {
			if (x == currentImageIndex) {
				bubbles[x].classList.add('active');
			} else {
				bubbles[x].classList.remove('active');
			}
		}
	}

	function showHide() {
		if (currentImageIndex == 0) {
			prev.style.visibility = 'hidden';
		} else {
			prev.style.visibility = 'visible';
		}

		if (currentImageIndex == images.length - 1) {
			next.style.visibility = 'hidden';
		} else {
			next.style.visibility = 'visible';
		}
	}

	next.addEventListener('click', function () {
		currentImageIndex++;
		if (currentImageIndex >= images.length) {
			currentImageIndex = images.length - 1;
		}
		showName();
		showHide();
		switchImg();
	});

	prev.addEventListener('click', function () {
		currentImageIndex--;
		if (currentImageIndex < 0) {
			currentImageIndex = 0;
		}
		showName();
		showHide();
		switchImg();
	});

	showName();
	showHide();
	switchImg();
});

/***/ })
/******/ ]);