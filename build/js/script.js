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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var header = document.querySelector(\".js-header\");\n  var menuToggler = document.querySelector(\".js-menu-toggler\");\n  var menuLinks = document.querySelectorAll(\".js-menu-link\");\n  var menuList = document.querySelector(\".navigation__list\");\n  var menuItems = document.querySelectorAll(\".navigation__item\");\n  var backBtn = document.querySelectorAll(\".navigation__back\");\n\n  var _loop = function _loop(x) {\n    backBtn[x].onclick = function (e) {\n      e.stopPropagation();\n      menuItems[x].querySelector(\".navigation__list\").classList.remove(\"navigation__submenu--active\");\n    };\n  };\n\n  for (var x = 0; x < backBtn.length; x++) {\n    _loop(x);\n  }\n\n  var _loop2 = function _loop2(i) {\n    menuItems[i].onclick = function () {\n      if (menuItems[i].querySelector(\".navigation__list\")) {\n        menuItems[i].querySelector(\".navigation__list\").classList.add(\"navigation__submenu--active\");\n        menuItems[i].querySelector(\".navigation__back\").classList.add(\"navigation__back--active\");\n      }\n    };\n  };\n\n  for (var i = 0; i < menuItems.length; i++) {\n    _loop2(i);\n  }\n\n  if (menuToggler) {\n    menuToggler.addEventListener(\"click\", function () {\n      if (header.classList.contains(\"header--menu-opened\")) {\n        header.classList.remove(\"header--menu-opened\");\n        document.body.classList.remove(\"menu-opened\");\n        menuItems.forEach(function (item) {\n          if (item.querySelector(\".navigation__submenu\")) {\n            item.querySelector(\".navigation__submenu\").classList.remove(\"navigation__submenu--active\");\n          }\n        });\n      } else {\n        header.classList.add(\"header--menu-opened\");\n        document.body.classList.add(\"menu-opened\");\n      }\n    });\n  }\n\n  for (var _i = 0; _i < menuLinks.length; _i++) {\n    menuLinks[_i].addEventListener(\"click\", function () {\n      if (window.innerWidth < 1025) {\n        header.classList.remove(\"header--menu-opened\");\n        document.body.classList.remove(\"menu-opened\");\n      }\n    });\n  }\n});\n\n//# sourceURL=webpack:///./src/js/modules/menu.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menu.js */ \"./src/js/modules/menu.js\");\n\nObject(_modules_menu_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack:///./src/js/script.js?");

/***/ })

/******/ });