/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main/main */ \"./src/main/main.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  (0,_main_main__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBK0I7QUFFL0JDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNoREYsc0RBQUksRUFBRTtBQUNWLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0J1YmJsZVBvcC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNYWluIGZyb20gJy4vbWFpbi9tYWluJztcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICAgIE1haW4oKTtcclxufSk7Il0sIm5hbWVzIjpbIk1haW4iLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/main/game/bubble.js":
/*!*********************************!*\
  !*** ./src/main/game/bubble.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// export default class Bubble {\n//     constructor() {\n//         this.element = \n//     }\n// }\n\nconst Bubble = () => {\n  const element = document.createElement(\"div\");\n  element.innerHTML = \"\";\n  element.style.border = \"1px solid black\";\n  element.style.borderRadius = '50%';\n  element.style.height = '25px';\n  element.style.width = '25px';\n  element.style.background = 'black';\n  return element;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bubble);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi9nYW1lL2J1YmJsZS5qcy5qcyIsIm1hcHBpbmdzIjoiO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxNQUFNLEdBQUdBLENBQUEsS0FBTTtFQUNqQixNQUFNQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUM3Q0YsT0FBTyxDQUFDRyxTQUFTLEdBQUcsRUFBRTtFQUN0QkgsT0FBTyxDQUFDSSxLQUFLLENBQUNDLE1BQU0sR0FBRyxpQkFBaUI7RUFDeENMLE9BQU8sQ0FBQ0ksS0FBSyxDQUFDRSxZQUFZLEdBQUcsS0FBSztFQUNsQ04sT0FBTyxDQUFDSSxLQUFLLENBQUNHLE1BQU0sR0FBRyxNQUFNO0VBQzdCUCxPQUFPLENBQUNJLEtBQUssQ0FBQ0ksS0FBSyxHQUFHLE1BQU07RUFDNUJSLE9BQU8sQ0FBQ0ksS0FBSyxDQUFDSyxVQUFVLEdBQUcsT0FBTztFQUNsQyxPQUFPVCxPQUFPO0FBQ2xCLENBQUM7QUFFRCwrREFBZUQsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL0J1YmJsZVBvcC8uL3NyYy9tYWluL2dhbWUvYnViYmxlLmpzPzIyOWMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBjbGFzcyBCdWJibGUge1xyXG4vLyAgICAgY29uc3RydWN0b3IoKSB7XHJcbi8vICAgICAgICAgdGhpcy5lbGVtZW50ID0gXHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbmNvbnN0IEJ1YmJsZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgZWxlbWVudC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCBibGFja1wiO1xyXG4gICAgZWxlbWVudC5zdHlsZS5ib3JkZXJSYWRpdXMgPSAnNTAlJztcclxuICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJzI1cHgnO1xyXG4gICAgZWxlbWVudC5zdHlsZS53aWR0aCA9ICcyNXB4JztcclxuICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZCA9ICdibGFjayc7XHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1YmJsZTsiXSwibmFtZXMiOlsiQnViYmxlIiwiZWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsInN0eWxlIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwiaGVpZ2h0Iiwid2lkdGgiLCJiYWNrZ3JvdW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main/game/bubble.js\n");

/***/ }),

/***/ "./src/main/game/game.js":
/*!*******************************!*\
  !*** ./src/main/game/game.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bubble__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bubble */ \"./src/main/game/bubble.js\");\n\nconst Game = () => {\n  const parent = document.querySelector('body');\n  const bubbles = (0,_bubble__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  bubbles.addEventListener(\"click\", e => parent.removeChild(bubbles));\n  parent.appendChild(bubbles);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi9nYW1lL2dhbWUuanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBOEI7QUFFOUIsTUFBTUMsSUFBSSxHQUFHQSxDQUFBLEtBQU07RUFDZixNQUFNQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sQ0FBQztFQUM3QyxNQUFNQyxPQUFPLEdBQUdMLG1EQUFNLEVBQUU7RUFDeEJLLE9BQU8sQ0FBQ0MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFQyxDQUFDLElBQUlMLE1BQU0sQ0FBQ00sV0FBVyxDQUFDSCxPQUFPLENBQUMsQ0FBQztFQUNuRUgsTUFBTSxDQUFDTyxXQUFXLENBQUNKLE9BQU8sQ0FBQztBQUMvQixDQUFDO0FBRUQsK0RBQWVKLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9CdWJibGVQb3AvLi9zcmMvbWFpbi9nYW1lL2dhbWUuanM/OGJmMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnViYmxlIGZyb20gJy4vYnViYmxlJztcclxuXHJcbmNvbnN0IEdhbWUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbiAgICBjb25zdCBidWJibGVzID0gQnViYmxlKCk7XHJcbiAgICBidWJibGVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHBhcmVudC5yZW1vdmVDaGlsZChidWJibGVzKSk7XHJcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoYnViYmxlcyk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYW1lOyJdLCJuYW1lcyI6WyJCdWJibGUiLCJHYW1lIiwicGFyZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYnViYmxlcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicmVtb3ZlQ2hpbGQiLCJhcHBlbmRDaGlsZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main/game/game.js\n");

/***/ }),

/***/ "./src/main/main.js":
/*!**************************!*\
  !*** ./src/main/main.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game/game */ \"./src/main/game/game.js\");\n\nconst Main = () => {\n  (0,_game_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi9tYWluLmpzLmpzIiwibWFwcGluZ3MiOiI7O0FBQStCO0FBRS9CLE1BQU1DLElBQUksR0FBR0EsQ0FBQSxLQUFNO0VBQ2ZELHNEQUFJLEVBQUU7QUFDVixDQUFDO0FBRUQsK0RBQWVDLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9CdWJibGVQb3AvLi9zcmMvbWFpbi9tYWluLmpzPzE1NjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lL2dhbWUnO1xyXG5cclxuY29uc3QgTWFpbiA9ICgpID0+IHtcclxuICAgIEdhbWUoKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW47Il0sIm5hbWVzIjpbIkdhbWUiLCJNYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main/main.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9CdWJibGVQb3AvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;