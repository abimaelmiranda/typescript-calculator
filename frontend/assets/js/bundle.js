/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/calculator/calc.ts":
/*!********************************!*\
  !*** ./src/calculator/calc.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Calculator = (function () {
    function Calculator() {
        this.display = document.querySelector('.display');
        this.setEvents();
    }
    Calculator.prototype.setEvents = function () {
        var _this = this;
        document.addEventListener('click', function (e) {
            var el = e.target;
            if (el.classList.contains('clear')) {
                _this.clearDisplay();
                return;
            }
            if (el.classList.contains('equal')) {
                _this.processExpression();
                return;
            }
            if (el.classList.contains('calc-key'))
                _this.display.value += el.innerText;
        });
    };
    Calculator.prototype.processExpression = function () {
        var expression = this.display.value;
        var operators = /[+\-*/]/g;
        var operations = expression.match(operators);
        var numbers = expression.split(operators).map(Number);
        if (numbers.includes(NaN))
            this.display.value = 'Expressão inválida';
        var result = numbers[0];
        for (var i = 0; i < operations.length; i++) {
            var currentNumber = numbers[i + 1];
            switch (operations[i]) {
                case '*':
                    result = this.multiply(result, currentNumber);
                    break;
                case '/':
                    result = this.divide(result, currentNumber);
                    break;
                case '-':
                    result = this.sub(result, currentNumber);
                    break;
                case '+':
                    result = this.sum(result, currentNumber);
                    break;
            }
        }
        this.showResult(result);
    };
    Calculator.prototype.sum = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return args.reduce(function (acc, value) {
            acc += value;
            return acc;
        }, 0);
    };
    Calculator.prototype.sub = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return args.reduce(function (acc, value) {
            acc -= value;
            return acc;
        }, 0);
    };
    Calculator.prototype.multiply = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return args.reduce(function (acc, value) {
            acc *= value;
            return acc;
        });
    };
    Calculator.prototype.divide = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return args.reduce(function (acc, value) {
            acc /= value;
            return acc;
        });
    };
    Calculator.prototype.clearDisplay = function () {
        this.display.value = '';
    };
    Calculator.prototype.showResult = function (result) {
        this.clearDisplay();
        this.display.value = String(result);
    };
    return Calculator;
}());
exports["default"] = Calculator;


/***/ }),

/***/ "./src/calculator/index.ts":
/*!*********************************!*\
  !*** ./src/calculator/index.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var calc_1 = __importDefault(__webpack_require__(/*! ./calc */ "./src/calculator/calc.ts"));
var calculator = new calc_1.default();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/calculator/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map