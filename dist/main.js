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

eval("__webpack_require__.r(__webpack_exports__);\n// export default class Bubble {\n//     constructor() {\n//         this.element = \n//     }\n// }\n\nconst Bubble = function (name) {\n  let offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;\n  let speed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 250;\n  let bottomOfPage = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : window.innerHeight + 'px';\n  const element = document.createElement(\"div\");\n  element.innerHTML = \"\";\n  element.style.border = \"1px solid black\";\n  element.style.borderRadius = '50%';\n  element.style.height = '25px';\n  element.style.width = '25px';\n  element.style.background = 'black';\n  element.addEventListener(\"click\", e => {\n    // parent.removeChild(element); //remove element from body not the page\n    element.remove(); // remove element from the root decreasing elements on page\n  });\n\n  element.className = 'test';\n  element.style.position = 'relative';\n  element.style.top = bottomOfPage;\n  setInterval(() => {\n    element.style.top = element.offsetTop - 8 - offset + \"px\"; // default = 8\n    if (parseInt(element.style.top.split('px')[0]) <= 0) element.remove();\n  }, speed);\n  return element;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bubble);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi9nYW1lL2J1YmJsZS5qcy5qcyIsIm1hcHBpbmdzIjoiO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxNQUFNLEdBQUcsU0FBQUEsQ0FBQ0MsSUFBSSxFQUF3RTtFQUFBLElBQXRFQyxNQUFNLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLENBQUM7RUFBQSxJQUFFRyxLQUFLLEdBQUFILFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLEdBQUc7RUFBQSxJQUFFSSxZQUFZLEdBQUFKLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHSyxNQUFNLENBQUNDLFdBQVcsR0FBRyxJQUFJO0VBQ25GLE1BQU1DLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQzdDRixPQUFPLENBQUNHLFNBQVMsR0FBRyxFQUFFO0VBQ3RCSCxPQUFPLENBQUNJLEtBQUssQ0FBQ0MsTUFBTSxHQUFHLGlCQUFpQjtFQUN4Q0wsT0FBTyxDQUFDSSxLQUFLLENBQUNFLFlBQVksR0FBRyxLQUFLO0VBQ2xDTixPQUFPLENBQUNJLEtBQUssQ0FBQ0csTUFBTSxHQUFHLE1BQU07RUFDN0JQLE9BQU8sQ0FBQ0ksS0FBSyxDQUFDSSxLQUFLLEdBQUcsTUFBTTtFQUM1QlIsT0FBTyxDQUFDSSxLQUFLLENBQUNLLFVBQVUsR0FBRyxPQUFPO0VBQ2xDVCxPQUFPLENBQUNVLGdCQUFnQixDQUFDLE9BQU8sRUFBRUMsQ0FBQyxJQUFJO0lBQ25DO0lBQ0FYLE9BQU8sQ0FBQ1ksTUFBTSxFQUFFLENBQUM7RUFDckIsQ0FBQyxDQUFDOztFQUNGWixPQUFPLENBQUNhLFNBQVMsR0FBRyxNQUFNO0VBQzFCYixPQUFPLENBQUNJLEtBQUssQ0FBQ1UsUUFBUSxHQUFHLFVBQVU7RUFDbkNkLE9BQU8sQ0FBQ0ksS0FBSyxDQUFDVyxHQUFHLEdBQUdsQixZQUFZO0VBQ2hDbUIsV0FBVyxDQUFDLE1BQU07SUFDZGhCLE9BQU8sQ0FBQ0ksS0FBSyxDQUFDVyxHQUFHLEdBQUdmLE9BQU8sQ0FBQ2lCLFNBQVMsR0FBRyxDQUFDLEdBQUd6QixNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQzFELElBQUcwQixRQUFRLENBQUNsQixPQUFPLENBQUNJLEtBQUssQ0FBQ1csR0FBRyxDQUFDSSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUVuQixPQUFPLENBQUNZLE1BQU0sRUFBRTtFQUN4RSxDQUFDLEVBQUVoQixLQUFLLENBQUM7RUFDVCxPQUFPSSxPQUFPO0FBQ2xCLENBQUM7QUFFRCwrREFBZVYsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL0J1YmJsZVBvcC8uL3NyYy9tYWluL2dhbWUvYnViYmxlLmpzPzIyOWMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBjbGFzcyBCdWJibGUge1xyXG4vLyAgICAgY29uc3RydWN0b3IoKSB7XHJcbi8vICAgICAgICAgdGhpcy5lbGVtZW50ID0gXHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbmNvbnN0IEJ1YmJsZSA9IChuYW1lLCBvZmZzZXQgPSAxLCBzcGVlZCA9IDI1MCwgYm90dG9tT2ZQYWdlID0gd2luZG93LmlubmVySGVpZ2h0ICsgJ3B4JykgPT4ge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBlbGVtZW50LnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIGJsYWNrXCI7XHJcbiAgICBlbGVtZW50LnN0eWxlLmJvcmRlclJhZGl1cyA9ICc1MCUnO1xyXG4gICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnMjVweCc7XHJcbiAgICBlbGVtZW50LnN0eWxlLndpZHRoID0gJzI1cHgnO1xyXG4gICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID0gJ2JsYWNrJztcclxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xyXG4gICAgICAgIC8vIHBhcmVudC5yZW1vdmVDaGlsZChlbGVtZW50KTsgLy9yZW1vdmUgZWxlbWVudCBmcm9tIGJvZHkgbm90IHRoZSBwYWdlXHJcbiAgICAgICAgZWxlbWVudC5yZW1vdmUoKTsvLyByZW1vdmUgZWxlbWVudCBmcm9tIHRoZSByb290IGRlY3JlYXNpbmcgZWxlbWVudHMgb24gcGFnZVxyXG4gICAgfSk7XHJcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9ICd0ZXN0JztcclxuICAgIGVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xyXG4gICAgZWxlbWVudC5zdHlsZS50b3AgPSBib3R0b21PZlBhZ2U7XHJcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS50b3AgPSBlbGVtZW50Lm9mZnNldFRvcCAtIDggLSBvZmZzZXQgKyBcInB4XCI7Ly8gZGVmYXVsdCA9IDhcclxuICAgICAgICBpZihwYXJzZUludChlbGVtZW50LnN0eWxlLnRvcC5zcGxpdCgncHgnKVswXSkgPD0gMCkgZWxlbWVudC5yZW1vdmUoKTtcclxuICAgIH0sIHNwZWVkKTtcclxuICAgIHJldHVybiBlbGVtZW50O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnViYmxlOyJdLCJuYW1lcyI6WyJCdWJibGUiLCJuYW1lIiwib2Zmc2V0IiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwic3BlZWQiLCJib3R0b21PZlBhZ2UiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJzdHlsZSIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsImhlaWdodCIsIndpZHRoIiwiYmFja2dyb3VuZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicmVtb3ZlIiwiY2xhc3NOYW1lIiwicG9zaXRpb24iLCJ0b3AiLCJzZXRJbnRlcnZhbCIsIm9mZnNldFRvcCIsInBhcnNlSW50Iiwic3BsaXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main/game/bubble.js\n");

/***/ }),

/***/ "./src/main/game/game.js":
/*!*******************************!*\
  !*** ./src/main/game/game.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bubble__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bubble */ \"./src/main/game/bubble.js\");\n\nconst Game = () => {\n  const parent = document.querySelector('body');\n  const bubbles = (0,_bubble__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  parent.appendChild(bubbles);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi9nYW1lL2dhbWUuanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBOEI7QUFFOUIsTUFBTUMsSUFBSSxHQUFHQSxDQUFBLEtBQU07RUFDZixNQUFNQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sQ0FBQztFQUM3QyxNQUFNQyxPQUFPLEdBQUdMLG1EQUFNLEVBQUU7RUFDeEJFLE1BQU0sQ0FBQ0ksV0FBVyxDQUFDRCxPQUFPLENBQUM7QUFDL0IsQ0FBQztBQUVELCtEQUFlSixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQnViYmxlUG9wLy4vc3JjL21haW4vZ2FtZS9nYW1lLmpzPzhiZjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJ1YmJsZSBmcm9tICcuL2J1YmJsZSc7XHJcblxyXG5jb25zdCBHYW1lID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgY29uc3QgYnViYmxlcyA9IEJ1YmJsZSgpO1xyXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGJ1YmJsZXMpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FtZTsiXSwibmFtZXMiOlsiQnViYmxlIiwiR2FtZSIsInBhcmVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImJ1YmJsZXMiLCJhcHBlbmRDaGlsZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main/game/game.js\n");

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