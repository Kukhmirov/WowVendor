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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/dataCard.js":
/*!****************************!*\
  !*** ./src/js/dataCard.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const dataCard = [{
  img: './assets/image/none.png',
  genre: 'Action RPG',
  classGenre: '--actionRpg',
  name: 'Dragon Age 5',
  grade: '0',
  stars: [],
  description: '',
  lostPrice: '',
  price: ' ',
  sale: ''
}, {
  img: './assets/image/SaintsRow.png',
  genre: 'Action RPG',
  classGenre: '--actionRpg',
  name: 'Saints Row',
  grade: '0',
  description: 'Platinum Edition',
  lostPrice: '$1,299',
  stars: [],
  price: ' 699',
  sale: '-50%'
}, {
  img: './assets/image/paladins.png',
  genre: 'Multiplayer RPG',
  classGenre: '--multiplayerRpg',
  name: 'Paladins',
  grade: '1,820',
  stars: ['yellow', 'yellow', 'yellow', 'yellow'],
  description: 'Get the Captain Price Operator included with purchase',
  lostPrice: '',
  price: 'Free',
  sale: ''
}, {
  img: './assets/image/farCry6.png',
  genre: 'Action',
  classGenre: '--action',
  name: 'Far Cry 6',
  grade: '2,888',
  stars: ['yellow', 'yellow', 'yellow', 'yellow'],
  description: 'In-Game Content',
  lostPrice: '$1,299',
  price: ' $649',
  sale: '-50%'
}, {
  img: './assets/image/CallOfDutyWarzone.png',
  genre: 'Shooter',
  classGenre: '--shooter',
  name: 'Call of Duty: Warzone',
  grade: '18,982',
  stars: ['yellow', 'yellow', 'yellow'],
  description: 'Get the Captain Price Operator included with purchase',
  lostPrice: '$1,299',
  price: ' $649',
  sale: '-50%'
}, {
  img: './assets/image/WoW-Shadowlands.png',
  genre: 'Action',
  classGenre: '--action',
  name: 'World of Warcraft: Shadowlands',
  grade: '299',
  stars: ['yellow', 'yellow', 'yellow', 'half'],
  description: 'Includes access to World of Warcraft, Burning Crusade Classic, and WoW Classic!',
  lostPrice: '',
  price: 'Free',
  sale: ''
}, {
  img: './assets/image/fortnite.png',
  genre: 'Shooter',
  classGenre: '--shooter',
  name: 'Fortnite',
  grade: '9,199',
  stars: ['yellow', 'yellow', 'yellow', 'yellow', 'half'],
  description: 'Get the Captain Price Operator included with purchase',
  lostPrice: '$1,299',
  price: ' $649',
  sale: '-50%'
}, {
  img: './assets/image/HorizonForbiddeWest.png',
  genre: 'Action RPG',
  classGenre: '--actionRpg',
  name: 'Horizon: Forbidden West',
  grade: '9,199',
  stars: ['yellow', 'yellow', 'yellow', 'yellow', 'half'],
  description: 'Platinum Edition',
  lostPrice: '$1,299',
  price: ' $649',
  sale: ''
}, {
  img: './assets/image/nfsHeat.png',
  genre: 'Action',
  classGenre: '--action',
  name: 'Need for Speed: Heat',
  grade: '2,911',
  stars: ['yellow', 'yellow', 'yellow', 'yellow', 'half'],
  description: 'Includes access to World of Warcraft, Burning Crusade Classic, and WoW Classic!',
  lostPrice: '',
  price: ' $649',
  sale: ''
}, {
  img: './assets/image/SpiderManMilesMorales.png',
  genre: 'Action',
  classGenre: '--action',
  name: 'Spider-Man: Miles Morales',
  grade: '920',
  stars: ['yellow', 'yellow', 'yellow'],
  description: 'Get the Captain Price Operator included with purchase',
  lostPrice: '$1,299',
  price: ' $649',
  sale: '-50%'
}, {
  img: './assets/image/WitcherWildHunt.png',
  genre: 'Card Game',
  classGenre: '--card-game',
  name: 'Witcher 3: Wild Hunt',
  grade: '299,890',
  stars: ['yellow', 'yellow', 'yellow', 'yellow', 'yellow'],
  description: 'Will only be usable in the new Classic Format when it is released',
  lostPrice: '$1,299',
  price: ' $649',
  sale: ''
}, {
  img: './assets/image/GuardiansGalaxy.png',
  genre: 'Shooter',
  classGenre: '--shooter',
  name: 'Guardians of the Galaxy',
  grade: '29',
  stars: ['yellow', 'yellow', 'yellow'],
  description: 'In-Game Content',
  lostPrice: '$1,299',
  price: ' $649',
  sale: '-50%'
}, {
  img: './assets/image/CrashTeamRacing.png',
  genre: 'Shooter',
  classGenre: '--shooter',
  name: 'Fortnite',
  grade: '9,199',
  stars: ['yellow', 'yellow', 'yellow', 'yellow', 'half'],
  description: 'Get the Captain Price Operator included with purchase',
  lostPrice: '$1,299',
  price: ' $649',
  sale: '-50%'
}, {
  img: './assets/image/SpiderMan.png',
  genre: 'Multiplayer RPG',
  classGenre: '--multiplayerRpg',
  name: 'Spider-Man',
  grade: '9,199',
  stars: ['yellow', 'yellow', 'yellow', 'yellow', 'half'],
  description: 'Includes access to World of Warcraft, Burning Crusade Classic, and WoW Classic!',
  lostPrice: '',
  price: ' $649',
  sale: ''
}, {
  img: './assets/image/none.png',
  genre: 'Action RPG',
  classGenre: '--actionRpg',
  name: 'Dragon Age 5',
  grade: '0',
  stars: [],
  description: '',
  lostPrice: '',
  price: ' ',
  sale: ''
}];
/* harmony default export */ __webpack_exports__["default"] = (dataCard);

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tag */ "./src/js/modules/tag.js");
/* harmony import */ var _modules_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/card */ "./src/js/modules/card.js");
/* harmony import */ var _modules_question__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/question */ "./src/js/modules/question.js");



window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  Object(_modules_tag__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_modules_card__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_modules_question__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

/***/ }),

/***/ "./src/js/modules/card.js":
/*!********************************!*\
  !*** ./src/js/modules/card.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dataCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dataCard */ "./src/js/dataCard.js");


function addCard() {
  const parentWindow = document.querySelector('.choice__box'),
        addCardBtn = document.querySelector('.button--card-add');

  function addCard() {
    let newCard = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 14;
    let index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    let i;
    let count = index;

    for (i = count; i <= newCard; ++i) {
      console.log(1);
      const element = document.createElement('div');
      const priceBox = _dataCard__WEBPACK_IMPORTED_MODULE_0__["default"][i].sale ? `<div class="card__sale">${_dataCard__WEBPACK_IMPORTED_MODULE_0__["default"][i].sale}</div>` : '<div/>';
      element.classList.add('card');
      element.innerHTML = `
                <div class="card__image">
                    <img src="${_dataCard__WEBPACK_IMPORTED_MODULE_0__["default"][i].img}">
                </div>
                <div class="card__tag card__tag${_dataCard__WEBPACK_IMPORTED_MODULE_0__["default"][i].classGenre}"><span></span>${_dataCard__WEBPACK_IMPORTED_MODULE_0__["default"][i].genre}</div>
                <div class="card__name">${_dataCard__WEBPACK_IMPORTED_MODULE_0__["default"][i].name}</div>
                <div class="card__grade">
                    <span class=${_dataCard__WEBPACK_IMPORTED_MODULE_0__["default"][i].stars[0]}></span>
                    <span class=${_dataCard__WEBPACK_IMPORTED_MODULE_0__["default"][i].stars[1]}></span>
                    <span class=${_dataCard__WEBPACK_IMPORTED_MODULE_0__["default"][i].stars[2]}></span>
                    <span class=${_dataCard__WEBPACK_IMPORTED_MODULE_0__["default"][i].stars[3]}></span>
                    <span class=${_dataCard__WEBPACK_IMPORTED_MODULE_0__["default"][i].stars[4]}></span>
                    ${_dataCard__WEBPACK_IMPORTED_MODULE_0__["default"][i].grade}
                </div>
                <div class="card__description">${_dataCard__WEBPACK_IMPORTED_MODULE_0__["default"][i].description}</div>
                <div class="card__price">
                    <span><strike>${_dataCard__WEBPACK_IMPORTED_MODULE_0__["default"][i].lostPrice}</strike>${_dataCard__WEBPACK_IMPORTED_MODULE_0__["default"][i].price}</span>
                    ${priceBox}
                </div>
                `;
      parentWindow.appendChild(element);
    }

    ;
  }

  addCardBtn.addEventListener('click', e => {
    e.preventDefault();
    const test = document.querySelectorAll('.card');
    test.forEach(item => {
      item.remove(item);
    });
    const newCard = 14;
    const index = 0;
    addCard(newCard, index);
  });
  addCard();
}

;
/* harmony default export */ __webpack_exports__["default"] = (addCard);

/***/ }),

/***/ "./src/js/modules/question.js":
/*!************************************!*\
  !*** ./src/js/modules/question.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function question() {
  const button = document.querySelectorAll('.questions__open'),
        description = document.querySelectorAll('.descr');
  button.forEach((item, index) => {
    item.addEventListener('click', e => {
      e.preventDefault();

      switch (index) {
        case 0:
          description[index].classList.toggle('close');
          button[index].classList.toggle('questions__open--close');
          break;

        case 1:
          description[index].classList.toggle('close');
          button[index].classList.toggle('questions__open--close');
          break;

        case 2:
          description[index].classList.toggle('close');
          button[index].classList.toggle('questions__open--close');
          break;

        case 3:
          description[index].classList.toggle('close');
          button[index].classList.toggle('questions__open--close');
          break;
      }

      console.log();
    });
  });
}

;
/* harmony default export */ __webpack_exports__["default"] = (question);

/***/ }),

/***/ "./src/js/modules/tag.js":
/*!*******************************!*\
  !*** ./src/js/modules/tag.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function tag() {
  const tagArr = [{
    name: 'Strategy'
  }, {
    name: 'RPG'
  }, {
    name: 'Action'
  }, {
    name: 'Shooter'
  }, {
    name: 'Clear all'
  }];
  const tag = document.querySelector('.box');
  tagArr.forEach(item => {
    const element = document.createElement('div');
    element.classList.add('tag-box__item');
    element.innerHTML = `
                ${item.name} <span>x</span>
            `;
    tag.appendChild(element);
  });
}

;
/* harmony default export */ __webpack_exports__["default"] = (tag);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map