/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/loadContact.js":
/*!****************************!*\
  !*** ./src/loadContact.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadContact": () => (/* binding */ loadContact)
/* harmony export */ });
const loadContact = () => {
    const container = document.querySelector(".mainBody");

    const location = document.createElement('div');
    location.textContent = "Come find us in Hierarch Square in downtown Novigrad.";
    location.id = "location";

    const hoursHeading = document.createElement('div');
    hoursHeading.textContent = "Hours";
    hoursHeading.id = "hoursHeading";
    const hours = document.createElement('div');
    hours.innerHTML = "Monday-Thursday: 11:00 - 4:00 pm <br> Friday-Sunday: 11:00 - 8:00 pm";
    hours.id = "hoursText";

    container.appendChild(location);
    container.appendChild(hoursHeading);
    container.appendChild(hours);

};



/***/ }),

/***/ "./src/loadHome.js":
/*!*************************!*\
  !*** ./src/loadHome.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadHome": () => (/* binding */ loadHome)
/* harmony export */ });
const loadHome = () => {
       // Create body & contents
       const body = document.querySelector(".mainBody");
   
       const header = document.createElement('div');
       header.textContent = "Dandelion's Tea Room";
       header.classList.add('heading');
   
       const text = document.createElement('div');
       text.innerHTML = "Seasonal blends, bewitching herbs, locally-sourced ingredients—we have a tea for every mood." + "<br>" + "Join us in the heart of Novigrad for a cup of warmth and solace.";
   
       body.appendChild(header);
       body.appendChild(text);
};



/***/ }),

/***/ "./src/loadMenu.js":
/*!*************************!*\
  !*** ./src/loadMenu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadMenu": () => (/* binding */ loadMenu)
/* harmony export */ });
const loadMenu = () => {

    const container = document.querySelector(".mainBody");
    const heading = document.createElement('div');
    heading.textContent = 'Current Teas';
    heading.id = "teaHeading";

    const headingBody = document.createElement('div');
    headingBody.textContent = "Each cup of tea costs 5 crowns.";

    const first = document.createElement('div');
    const firstHeading = document.createElement('div');
    firstHeading.classList.add('teaHeaders');
    firstHeading.textContent = "Lilac & Gooseberry";
    const firstBody = document.createElement('div');
    firstBody.textContent = "A sweet-smelling blend that evokes memories of years past.";

    first.appendChild(firstHeading);
    first.appendChild(firstBody);


    
    const second = document.createElement('div');
    const secondHeading = document.createElement('div');
    secondHeading.textContent = "Thunderbolt";
    secondHeading.classList.add('teaHeaders');
    const secondBody = document.createElement('div');
    secondBody.textContent = "A highly-caffeinated green tea to improve focus.";

    second.appendChild(secondHeading);
    second.appendChild(secondBody);


    const third = document.createElement('div');
    const thirdHeading = document.createElement('div');
    thirdHeading.textContent = "Herbs of the Woods";
    thirdHeading.classList.add('teaHeaders');
    const thirdBody = document.createElement('div');
    thirdBody.textContent = "A magical tea made from a trio of woodland herbs: mugwort, sage, and mint.";

    third.appendChild(thirdHeading);
    third.appendChild(thirdBody);

    const fourth = document.createElement('div');
    const fourthHeading = document.createElement('div');
    fourthHeading.textContent = "Cat Eyes";
    fourthHeading.classList.add('teaHeaders');
    const fourthBody = document.createElement('div');
    fourthBody.textContent = "A strong black tea infused with clementine and gold powder.";

    fourth.appendChild(fourthHeading);
    fourth.appendChild(fourthBody);


    container.appendChild(heading);
    container.appendChild(headingBody);
    container.appendChild(first);
    container.appendChild(second);
    container.appendChild(third);
    container.appendChild(fourth);

};



/***/ }),

/***/ "./src/loadPage.js":
/*!*************************!*\
  !*** ./src/loadPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadPage": () => (/* binding */ loadPage)
/* harmony export */ });
// Create initial page layout

const loadPage = () => {
    const container = document.querySelector('#content');
    
    // Create navigation bar (make separate module for this?)
    const nav = document.createElement('div');
    nav.classList.add('navigation');

    const linkOne = document.createElement('a');
    linkOne.id = "homeLink";
    linkOne.textContent = "Home";
    linkOne.href = "#home";

    const linkTwo = document.createElement('a');
    linkTwo.id = "menuLink";
    linkTwo.textContent = "Menu";
    linkTwo.href = '#menu';

    const linkThree = document.createElement('a');
    linkThree.id = "contactLink";
    linkThree.textContent = "Contact";
    linkThree.href = '#contact';

    nav.appendChild(linkOne);
    nav.appendChild(linkTwo);
    nav.appendChild(linkThree);

    // Create body & contents
    const body = document.createElement('div');
    body.classList.add('mainBody');

    
    container.appendChild(nav);
    container.appendChild(body);
};



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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loadPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadPage */ "./src/loadPage.js");
/* harmony import */ var _loadMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadMenu */ "./src/loadMenu.js");
/* harmony import */ var _loadHome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadHome */ "./src/loadHome.js");
/* harmony import */ var _loadContact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadContact */ "./src/loadContact.js");






(0,_loadPage__WEBPACK_IMPORTED_MODULE_0__.loadPage)();
(0,_loadHome__WEBPACK_IMPORTED_MODULE_2__.loadHome)();

const menuButton = document.querySelector("#menuLink");
const homeButton = document.querySelector("#homeLink");
const contactButton = document.querySelector("#contactLink");

const body = document.querySelector(".mainBody");


menuButton.addEventListener('click', () => {
    while (body.firstChild) {
        body.removeChild(body.firstChild);
    }
    (0,_loadMenu__WEBPACK_IMPORTED_MODULE_1__.loadMenu)();
});

homeButton.addEventListener('click', () => {
    while (body.firstChild) {
        body.removeChild(body.firstChild);
    }
    (0,_loadHome__WEBPACK_IMPORTED_MODULE_2__.loadHome)();
});

contactButton.addEventListener('click', () => {
    while (body.firstChild) {
        body.removeChild(body.firstChild);
    }
    (0,_loadContact__WEBPACK_IMPORTED_MODULE_3__.loadContact)();
});




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3REE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDbkNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOdUM7QUFDRDtBQUNBO0FBQ007OztBQUc1QyxtREFBUTtBQUNSLG1EQUFROztBQUVSO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG1EQUFRO0FBQ1osQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksbURBQVE7QUFDWixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx5REFBVztBQUNmLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbG9hZENvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2xvYWRIb21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9sb2FkTWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbG9hZFBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGxvYWRDb250YWN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbkJvZHlcIik7XG5cbiAgICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxvY2F0aW9uLnRleHRDb250ZW50ID0gXCJDb21lIGZpbmQgdXMgaW4gSGllcmFyY2ggU3F1YXJlIGluIGRvd250b3duIE5vdmlncmFkLlwiO1xuICAgIGxvY2F0aW9uLmlkID0gXCJsb2NhdGlvblwiO1xuXG4gICAgY29uc3QgaG91cnNIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG91cnNIZWFkaW5nLnRleHRDb250ZW50ID0gXCJIb3Vyc1wiO1xuICAgIGhvdXJzSGVhZGluZy5pZCA9IFwiaG91cnNIZWFkaW5nXCI7XG4gICAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob3Vycy5pbm5lckhUTUwgPSBcIk1vbmRheS1UaHVyc2RheTogMTE6MDAgLSA0OjAwIHBtIDxicj4gRnJpZGF5LVN1bmRheTogMTE6MDAgLSA4OjAwIHBtXCI7XG4gICAgaG91cnMuaWQgPSBcImhvdXJzVGV4dFwiO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxvY2F0aW9uKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaG91cnNIZWFkaW5nKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaG91cnMpO1xuXG59O1xuXG5leHBvcnQgeyBsb2FkQ29udGFjdCB9OyIsImNvbnN0IGxvYWRIb21lID0gKCkgPT4ge1xuICAgICAgIC8vIENyZWF0ZSBib2R5ICYgY29udGVudHNcbiAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluQm9keVwiKTtcbiAgIFxuICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiRGFuZGVsaW9uJ3MgVGVhIFJvb21cIjtcbiAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGluZycpO1xuICAgXG4gICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgIHRleHQuaW5uZXJIVE1MID0gXCJTZWFzb25hbCBibGVuZHMsIGJld2l0Y2hpbmcgaGVyYnMsIGxvY2FsbHktc291cmNlZCBpbmdyZWRpZW50c+KAlHdlIGhhdmUgYSB0ZWEgZm9yIGV2ZXJ5IG1vb2QuXCIgKyBcIjxicj5cIiArIFwiSm9pbiB1cyBpbiB0aGUgaGVhcnQgb2YgTm92aWdyYWQgZm9yIGEgY3VwIG9mIHdhcm10aCBhbmQgc29sYWNlLlwiO1xuICAgXG4gICAgICAgYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQodGV4dCk7XG59O1xuXG5leHBvcnQgeyBsb2FkSG9tZSB9OyIsImNvbnN0IGxvYWRNZW51ID0gKCkgPT4ge1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluQm9keVwiKTtcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdDdXJyZW50IFRlYXMnO1xuICAgIGhlYWRpbmcuaWQgPSBcInRlYUhlYWRpbmdcIjtcblxuICAgIGNvbnN0IGhlYWRpbmdCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGluZ0JvZHkudGV4dENvbnRlbnQgPSBcIkVhY2ggY3VwIG9mIHRlYSBjb3N0cyA1IGNyb3ducy5cIjtcblxuICAgIGNvbnN0IGZpcnN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZmlyc3RIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZmlyc3RIZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ3RlYUhlYWRlcnMnKTtcbiAgICBmaXJzdEhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkxpbGFjICYgR29vc2ViZXJyeVwiO1xuICAgIGNvbnN0IGZpcnN0Qm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZpcnN0Qm9keS50ZXh0Q29udGVudCA9IFwiQSBzd2VldC1zbWVsbGluZyBibGVuZCB0aGF0IGV2b2tlcyBtZW1vcmllcyBvZiB5ZWFycyBwYXN0LlwiO1xuXG4gICAgZmlyc3QuYXBwZW5kQ2hpbGQoZmlyc3RIZWFkaW5nKTtcbiAgICBmaXJzdC5hcHBlbmRDaGlsZChmaXJzdEJvZHkpO1xuXG5cbiAgICBcbiAgICBjb25zdCBzZWNvbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBzZWNvbmRIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2Vjb25kSGVhZGluZy50ZXh0Q29udGVudCA9IFwiVGh1bmRlcmJvbHRcIjtcbiAgICBzZWNvbmRIZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ3RlYUhlYWRlcnMnKTtcbiAgICBjb25zdCBzZWNvbmRCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2Vjb25kQm9keS50ZXh0Q29udGVudCA9IFwiQSBoaWdobHktY2FmZmVpbmF0ZWQgZ3JlZW4gdGVhIHRvIGltcHJvdmUgZm9jdXMuXCI7XG5cbiAgICBzZWNvbmQuYXBwZW5kQ2hpbGQoc2Vjb25kSGVhZGluZyk7XG4gICAgc2Vjb25kLmFwcGVuZENoaWxkKHNlY29uZEJvZHkpO1xuXG5cbiAgICBjb25zdCB0aGlyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRoaXJkSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXJkSGVhZGluZy50ZXh0Q29udGVudCA9IFwiSGVyYnMgb2YgdGhlIFdvb2RzXCI7XG4gICAgdGhpcmRIZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ3RlYUhlYWRlcnMnKTtcbiAgICBjb25zdCB0aGlyZEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlyZEJvZHkudGV4dENvbnRlbnQgPSBcIkEgbWFnaWNhbCB0ZWEgbWFkZSBmcm9tIGEgdHJpbyBvZiB3b29kbGFuZCBoZXJiczogbXVnd29ydCwgc2FnZSwgYW5kIG1pbnQuXCI7XG5cbiAgICB0aGlyZC5hcHBlbmRDaGlsZCh0aGlyZEhlYWRpbmcpO1xuICAgIHRoaXJkLmFwcGVuZENoaWxkKHRoaXJkQm9keSk7XG5cbiAgICBjb25zdCBmb3VydGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBmb3VydGhIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm91cnRoSGVhZGluZy50ZXh0Q29udGVudCA9IFwiQ2F0IEV5ZXNcIjtcbiAgICBmb3VydGhIZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ3RlYUhlYWRlcnMnKTtcbiAgICBjb25zdCBmb3VydGhCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm91cnRoQm9keS50ZXh0Q29udGVudCA9IFwiQSBzdHJvbmcgYmxhY2sgdGVhIGluZnVzZWQgd2l0aCBjbGVtZW50aW5lIGFuZCBnb2xkIHBvd2Rlci5cIjtcblxuICAgIGZvdXJ0aC5hcHBlbmRDaGlsZChmb3VydGhIZWFkaW5nKTtcbiAgICBmb3VydGguYXBwZW5kQ2hpbGQoZm91cnRoQm9keSk7XG5cblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGluZ0JvZHkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmaXJzdCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNlY29uZCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXJkKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm91cnRoKTtcblxufTtcblxuZXhwb3J0IHsgbG9hZE1lbnUgfTsiLCIvLyBDcmVhdGUgaW5pdGlhbCBwYWdlIGxheW91dFxuXG5jb25zdCBsb2FkUGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIFxuICAgIC8vIENyZWF0ZSBuYXZpZ2F0aW9uIGJhciAobWFrZSBzZXBhcmF0ZSBtb2R1bGUgZm9yIHRoaXM/KVxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hdi5jbGFzc0xpc3QuYWRkKCduYXZpZ2F0aW9uJyk7XG5cbiAgICBjb25zdCBsaW5rT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGxpbmtPbmUuaWQgPSBcImhvbWVMaW5rXCI7XG4gICAgbGlua09uZS50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuICAgIGxpbmtPbmUuaHJlZiA9IFwiI2hvbWVcIjtcblxuICAgIGNvbnN0IGxpbmtUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgbGlua1R3by5pZCA9IFwibWVudUxpbmtcIjtcbiAgICBsaW5rVHdvLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gICAgbGlua1R3by5ocmVmID0gJyNtZW51JztcblxuICAgIGNvbnN0IGxpbmtUaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBsaW5rVGhyZWUuaWQgPSBcImNvbnRhY3RMaW5rXCI7XG4gICAgbGlua1RocmVlLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG4gICAgbGlua1RocmVlLmhyZWYgPSAnI2NvbnRhY3QnO1xuXG4gICAgbmF2LmFwcGVuZENoaWxkKGxpbmtPbmUpO1xuICAgIG5hdi5hcHBlbmRDaGlsZChsaW5rVHdvKTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQobGlua1RocmVlKTtcblxuICAgIC8vIENyZWF0ZSBib2R5ICYgY29udGVudHNcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYm9keS5jbGFzc0xpc3QuYWRkKCdtYWluQm9keScpO1xuXG4gICAgXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5hdik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJvZHkpO1xufTtcblxuZXhwb3J0IHsgbG9hZFBhZ2UgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGxvYWRQYWdlIH0gZnJvbSAgJy4vbG9hZFBhZ2UnO1xuaW1wb3J0IHsgbG9hZE1lbnUgfSBmcm9tICcuL2xvYWRNZW51JztcbmltcG9ydCB7IGxvYWRIb21lIH0gZnJvbSAnLi9sb2FkSG9tZSc7XG5pbXBvcnQgeyBsb2FkQ29udGFjdCB9IGZyb20gJy4vbG9hZENvbnRhY3QnO1xuXG5cbmxvYWRQYWdlKCk7XG5sb2FkSG9tZSgpO1xuXG5jb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51TGlua1wiKTtcbmNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hvbWVMaW5rXCIpO1xuY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdExpbmtcIik7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5Cb2R5XCIpO1xuXG5cbm1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgd2hpbGUgKGJvZHkuZmlyc3RDaGlsZCkge1xuICAgICAgICBib2R5LnJlbW92ZUNoaWxkKGJvZHkuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIGxvYWRNZW51KCk7XG59KTtcblxuaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB3aGlsZSAoYm9keS5maXJzdENoaWxkKSB7XG4gICAgICAgIGJvZHkucmVtb3ZlQ2hpbGQoYm9keS5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgbG9hZEhvbWUoKTtcbn0pO1xuXG5jb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHdoaWxlIChib2R5LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgYm9keS5yZW1vdmVDaGlsZChib2R5LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBsb2FkQ29udGFjdCgpO1xufSk7XG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=