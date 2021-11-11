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
    const container = document.querySelector(".body");

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
       const body = document.querySelector(".body");
   
       const header = document.createElement('div');
       header.textContent = "Dandelion's Tea Shop";
       header.classList.add('heading');
   
       const image = document.createElement('img');
       image.src = "../src/images/main.jpg";
       
       const text = document.createElement('div');
       text.innerHTML = "Seasonal blends, bewitching herbs, locally-sourced ingredients—we have a tea for every mood." + "<br>" + "Join us in the heart of Novigrad for a cup of nature and respite." + "<br>" + "Bring a book and a friend.";
   
       body.appendChild(header);
       body.appendChild(image);
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

    const container = document.querySelector(".body");
    const heading = document.createElement('div');
    heading.textContent = 'Teas';

    const headingBody = document.createElement('div');
    headingBody.textContent = "Each cup of tea costs 5 crowns.";

    const first = document.createElement('div');
    const firstHeading = document.createElement('div');
    firstHeading.textContent = "Lilac & Gooseberry";
    const firstBody = document.createElement('div');
    firstBody.textContent = "A sweet-smelling blend that invokes a memory of years past.";

    first.appendChild(firstHeading);
    first.appendChild(firstBody);


    
    const second = document.createElement('div');
    const secondHeading = document.createElement('div');
    secondHeading.textContent = "Thunderbolt";
    const secondBody = document.createElement('div');


    const third = document.createElement('div');

    const fourth = document.createElement('div');

    const fifth = document.createElement('div');

    container.appendChild(heading);
    container.appendChild(headingBody);
    container.appendChild(first);
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
    body.classList.add('body');

    
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

const body = document.querySelector(".body");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDakJBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDbkNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOdUM7QUFDRDtBQUNBO0FBQ007OztBQUc1QyxtREFBUTtBQUNSLG1EQUFROztBQUVSO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG1EQUFRO0FBQ1osQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksbURBQVE7QUFDWixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx5REFBVztBQUNmLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbG9hZENvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2xvYWRIb21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9sb2FkTWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbG9hZFBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGxvYWRDb250YWN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9keVwiKTtcblxuICAgIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbG9jYXRpb24udGV4dENvbnRlbnQgPSBcIkNvbWUgZmluZCB1cyBpbiBIaWVyYXJjaCBTcXVhcmUgaW4gZG93bnRvd24gTm92aWdyYWQuXCI7XG4gICAgbG9jYXRpb24uaWQgPSBcImxvY2F0aW9uXCI7XG5cbiAgICBjb25zdCBob3Vyc0hlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob3Vyc0hlYWRpbmcudGV4dENvbnRlbnQgPSBcIkhvdXJzXCI7XG4gICAgaG91cnNIZWFkaW5nLmlkID0gXCJob3Vyc0hlYWRpbmdcIjtcbiAgICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvdXJzLmlubmVySFRNTCA9IFwiTW9uZGF5LVRodXJzZGF5OiAxMTowMCAtIDQ6MDAgcG0gPGJyPiBGcmlkYXktU3VuZGF5OiAxMTowMCAtIDg6MDAgcG1cIjtcbiAgICBob3Vycy5pZCA9IFwiaG91cnNUZXh0XCI7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobG9jYXRpb24pO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChob3Vyc0hlYWRpbmcpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChob3Vycyk7XG5cbn07XG5cbmV4cG9ydCB7IGxvYWRDb250YWN0IH07IiwiY29uc3QgbG9hZEhvbWUgPSAoKSA9PiB7XG4gICAgICAgLy8gQ3JlYXRlIGJvZHkgJiBjb250ZW50c1xuICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvZHlcIik7XG4gICBcbiAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkRhbmRlbGlvbidzIFRlYSBTaG9wXCI7XG4gICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRpbmcnKTtcbiAgIFxuICAgICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgaW1hZ2Uuc3JjID0gXCIuLi9zcmMvaW1hZ2VzL21haW4uanBnXCI7XG4gICAgICAgXG4gICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgIHRleHQuaW5uZXJIVE1MID0gXCJTZWFzb25hbCBibGVuZHMsIGJld2l0Y2hpbmcgaGVyYnMsIGxvY2FsbHktc291cmNlZCBpbmdyZWRpZW50c+KAlHdlIGhhdmUgYSB0ZWEgZm9yIGV2ZXJ5IG1vb2QuXCIgKyBcIjxicj5cIiArIFwiSm9pbiB1cyBpbiB0aGUgaGVhcnQgb2YgTm92aWdyYWQgZm9yIGEgY3VwIG9mIG5hdHVyZSBhbmQgcmVzcGl0ZS5cIiArIFwiPGJyPlwiICsgXCJCcmluZyBhIGJvb2sgYW5kIGEgZnJpZW5kLlwiO1xuICAgXG4gICAgICAgYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQodGV4dCk7XG59O1xuXG5leHBvcnQgeyBsb2FkSG9tZSB9OyIsImNvbnN0IGxvYWRNZW51ID0gKCkgPT4ge1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2R5XCIpO1xuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ1RlYXMnO1xuXG4gICAgY29uc3QgaGVhZGluZ0JvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkaW5nQm9keS50ZXh0Q29udGVudCA9IFwiRWFjaCBjdXAgb2YgdGVhIGNvc3RzIDUgY3Jvd25zLlwiO1xuXG4gICAgY29uc3QgZmlyc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBmaXJzdEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmaXJzdEhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkxpbGFjICYgR29vc2ViZXJyeVwiO1xuICAgIGNvbnN0IGZpcnN0Qm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZpcnN0Qm9keS50ZXh0Q29udGVudCA9IFwiQSBzd2VldC1zbWVsbGluZyBibGVuZCB0aGF0IGludm9rZXMgYSBtZW1vcnkgb2YgeWVhcnMgcGFzdC5cIjtcblxuICAgIGZpcnN0LmFwcGVuZENoaWxkKGZpcnN0SGVhZGluZyk7XG4gICAgZmlyc3QuYXBwZW5kQ2hpbGQoZmlyc3RCb2R5KTtcblxuXG4gICAgXG4gICAgY29uc3Qgc2Vjb25kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qgc2Vjb25kSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNlY29uZEhlYWRpbmcudGV4dENvbnRlbnQgPSBcIlRodW5kZXJib2x0XCI7XG4gICAgY29uc3Qgc2Vjb25kQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5cbiAgICBjb25zdCB0aGlyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3QgZm91cnRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCBmaWZ0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkaW5nQm9keSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZpcnN0KTtcbn07XG5cbmV4cG9ydCB7IGxvYWRNZW51IH07IiwiLy8gQ3JlYXRlIGluaXRpYWwgcGFnZSBsYXlvdXRcblxuY29uc3QgbG9hZFBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBcbiAgICAvLyBDcmVhdGUgbmF2aWdhdGlvbiBiYXIgKG1ha2Ugc2VwYXJhdGUgbW9kdWxlIGZvciB0aGlzPylcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYXYuY2xhc3NMaXN0LmFkZCgnbmF2aWdhdGlvbicpO1xuXG4gICAgY29uc3QgbGlua09uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBsaW5rT25lLmlkID0gXCJob21lTGlua1wiO1xuICAgIGxpbmtPbmUudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgICBsaW5rT25lLmhyZWYgPSBcIiNob21lXCI7XG5cbiAgICBjb25zdCBsaW5rVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGxpbmtUd28uaWQgPSBcIm1lbnVMaW5rXCI7XG4gICAgbGlua1R3by50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICAgIGxpbmtUd28uaHJlZiA9ICcjbWVudSc7XG5cbiAgICBjb25zdCBsaW5rVGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgbGlua1RocmVlLmlkID0gXCJjb250YWN0TGlua1wiO1xuICAgIGxpbmtUaHJlZS50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xuICAgIGxpbmtUaHJlZS5ocmVmID0gJyNjb250YWN0JztcblxuICAgIG5hdi5hcHBlbmRDaGlsZChsaW5rT25lKTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQobGlua1R3byk7XG4gICAgbmF2LmFwcGVuZENoaWxkKGxpbmtUaHJlZSk7XG5cbiAgICAvLyBDcmVhdGUgYm9keSAmIGNvbnRlbnRzXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnYm9keScpO1xuXG4gICAgXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5hdik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJvZHkpO1xufTtcblxuZXhwb3J0IHsgbG9hZFBhZ2UgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGxvYWRQYWdlIH0gZnJvbSAgJy4vbG9hZFBhZ2UnO1xuaW1wb3J0IHsgbG9hZE1lbnUgfSBmcm9tICcuL2xvYWRNZW51JztcbmltcG9ydCB7IGxvYWRIb21lIH0gZnJvbSAnLi9sb2FkSG9tZSc7XG5pbXBvcnQgeyBsb2FkQ29udGFjdCB9IGZyb20gJy4vbG9hZENvbnRhY3QnO1xuXG5cbmxvYWRQYWdlKCk7XG5sb2FkSG9tZSgpO1xuXG5jb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51TGlua1wiKTtcbmNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hvbWVMaW5rXCIpO1xuY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdExpbmtcIik7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvZHlcIik7XG5cblxubWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB3aGlsZSAoYm9keS5maXJzdENoaWxkKSB7XG4gICAgICAgIGJvZHkucmVtb3ZlQ2hpbGQoYm9keS5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgbG9hZE1lbnUoKTtcbn0pO1xuXG5ob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHdoaWxlIChib2R5LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgYm9keS5yZW1vdmVDaGlsZChib2R5LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBsb2FkSG9tZSgpO1xufSk7XG5cbmNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgd2hpbGUgKGJvZHkuZmlyc3RDaGlsZCkge1xuICAgICAgICBib2R5LnJlbW92ZUNoaWxkKGJvZHkuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIGxvYWRDb250YWN0KCk7XG59KTtcblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==