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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/modules/menu.js":
/*!********************************!*\
  !*** ./src/js/modules/menu.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: C:\\\\Users\\\\excal\\\\OneDrive\\\\Документы\\\\GitHub\\\\RGSU-main-page\\\\src\\\\js\\\\modules\\\\menu.js: Unexpected token (30:16)\\n\\n\\u001b[0m \\u001b[90m 28 | \\u001b[39m                menuItems\\u001b[33m.\\u001b[39mforEach((item) \\u001b[33m=>\\u001b[39m {\\u001b[0m\\n\\u001b[0m \\u001b[90m 29 | \\u001b[39m                    \\u001b[36mif\\u001b[39m(menu)\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 30 | \\u001b[39m                })\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m                \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 31 | \\u001b[39m            } \\u001b[36melse\\u001b[39m {\\u001b[0m\\n\\u001b[0m \\u001b[90m 32 | \\u001b[39m                header\\u001b[33m.\\u001b[39mclassList\\u001b[33m.\\u001b[39madd(\\u001b[32m`header--menu-opened`\\u001b[39m)\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 33 | \\u001b[39m                document\\u001b[33m.\\u001b[39mbody\\u001b[33m.\\u001b[39mclassList\\u001b[33m.\\u001b[39madd(\\u001b[32m`menu-opened`\\u001b[39m)\\u001b[33m;\\u001b[39m\\u001b[0m\\n    at Parser._raise (C:\\\\Users\\\\excal\\\\OneDrive\\\\Документы\\\\GitHub\\\\RGSU-main-page\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:748:17)\\n    at Parser.raiseWithData (C:\\\\Users\\\\excal\\\\OneDrive\\\\Документы\\\\GitHub\\\\RGSU-main-page\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:741:17)\\n    at Parser.raise (C:\\\\Users\\\\excal\\\\OneDrive\\\\Документы\\\\GitHub\\\\RGSU-main-page\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:735:17)\\n    at Parser.unexpected (C:\\\\Users\\\\excal\\\\OneDrive\\\\Документы\\\\GitHub\\\\RGSU-main-page\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9097:16)\\n    at Parser.parseExprAtom (C:\\\\Users\\\\excal\\\\OneDrive\\\\Документы\\\\GitHub\\\\RGSU-main-page\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10548:20)\\n    at Parser.parseExprSubscripts (C:\\\\Users\\\\excal\\\\OneDrive\\\\Документы\\\\GitHub\\\\RGSU-main-page\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10122:23)\\n    at Parser.parseUpdate (C:\\\\Users\\\\excal\\\\OneDrive\\\\Документы\\\\GitHub\\\\RGSU-main-page\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10102:21)\\n    at Parser.parseMaybeUnary (C:\\\\Users\\\\excal\\\\OneDrive\\\\Документы\\\\GitHub\\\\RGSU-main-page\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10091:17)\\n    at Parser.parseExprOps (C:\\\\Users\\\\excal\\\\OneDrive\\\\Документы\\\\GitHub\\\\RGSU-main-page\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9961:23)\\n    at Parser.parseMaybeConditional (C:\\\\Users\\\\excal\\\\OneDrive\\\\Документы\\\\GitHub\\\\RGSU-main-page\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9935:23)\");\n\n//# sourceURL=webpack:///./src/js/modules/menu.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menu.js */ \"./src/js/modules/menu.js\");\n/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_menu_js__WEBPACK_IMPORTED_MODULE_0__);\n\n_modules_menu_js__WEBPACK_IMPORTED_MODULE_0___default()();\n\n//# sourceURL=webpack:///./src/js/script.js?");

/***/ })

/******/ });