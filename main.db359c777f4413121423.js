/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sections_navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sections/navbar */ \"./src/sections/navbar.js\");\n/* harmony import */ var _sections_banner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sections/banner */ \"./src/sections/banner.js\");\n/* harmony import */ var _sections_hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sections/hero */ \"./src/sections/hero.js\");\n/* harmony import */ var _sections_about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sections/about */ \"./src/sections/about.js\");\n/* harmony import */ var _sections_contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sections/contact */ \"./src/sections/contact.js\");\n/* harmony import */ var _sections_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sections/menu */ \"./src/sections/menu.js\");\n/* harmony import */ var _sections_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sections/footer */ \"./src/sections/footer.js\");\n/* harmony import */ var _sections_testimonials__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sections/testimonials */ \"./src/sections/testimonials.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_sections_navbar__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_sections_hero__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_sections_contact__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n;(0,_sections_banner__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_sections_about__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n;(0,_sections_menu__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\r\n;(0,_sections_testimonials__WEBPACK_IMPORTED_MODULE_7__[\"default\"])()\r\n;(0,_sections_footer__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()\r\n\n\n//# sourceURL=webpack://restaurant-page-/./src/index.js?");

/***/ }),

/***/ "./src/sections/about.js":
/*!*******************************!*\
  !*** ./src/sections/about.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst about = function() {\r\n    const aboutPage = document.createElement('div')\r\nconst aboutH2 = document.createElement('h2')\r\nconst aboutPara = document.createElement('p')\r\n\r\naboutH2.innerHTML = `<span>Our &nbsp;</span>Story`\r\naboutPara.innerHTML = 'Our vegan restaurant is all about celebrating plant-based cuisine in a modern, vibrant setting. We aim to create a welcoming space where people can come together to enjoy delicious, healthy and cruelty-free food.'\r\n\r\naboutPage.appendChild(aboutH2)\r\naboutPage.appendChild(aboutPara)\r\naboutPage.classList = ' about'\r\ncontent.appendChild(aboutPage)\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (about);\n\n//# sourceURL=webpack://restaurant-page-/./src/sections/about.js?");

/***/ }),

/***/ "./src/sections/banner.js":
/*!********************************!*\
  !*** ./src/sections/banner.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_banner_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/banner.png */ \"./src/images/banner.png\");\n\r\n\r\nconst banner = function() {\r\n    const divImg = document.createElement('div')\r\nconst banner = document.createElement('img')\r\n\r\nbanner.src = banner;\r\n\r\ndivImg.classList = \" bannerImg\"\r\n\r\ndivImg.appendChild(banner)\r\ncontent.appendChild(divImg)\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (banner);\n\n//# sourceURL=webpack://restaurant-page-/./src/sections/banner.js?");

/***/ }),

/***/ "./src/sections/contact.js":
/*!*********************************!*\
  !*** ./src/sections/contact.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst contact = function() {\r\n  const contactSection = document.createElement('div')\r\ncontactSection.classList = ' contacts'\r\n\r\nlet contact = [\"Locate Us\", \"Open Hours\", \"Reservation\"];\r\nlet avail = [\"Angeles City, Pampanga\", \"Mon to Fri 9:00AM - 9PM\", \"greenoasis@gmail.com\"]\r\nfor(let i = 0; i < contact.length; i += 1) {\r\n  let div = document.createElement(\"div\")\r\n    let h2 = document.createElement(\"h2\");\r\n    let para = document.createElement('p')\r\n    h2.className = \"contact\";\r\n    h2.innerHTML = contact[i];\r\n    para.innerHTML= avail[i];\r\n    div.appendChild(h2)\r\n    div.appendChild(para)\r\n    contactSection.appendChild(div);\r\n}\r\n    content.appendChild(contactSection)\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);\n\n//# sourceURL=webpack://restaurant-page-/./src/sections/contact.js?");

/***/ }),

/***/ "./src/sections/footer.js":
/*!********************************!*\
  !*** ./src/sections/footer.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst footer = function() {\r\n    const footerPage = document.createElement('div')\r\nfooterPage.innerHTML = `<p>© 2023 ALL RIGHTS RESERVED</p>`\r\n\r\nfooterPage.classList = 'footer'\r\ncontent.appendChild(footerPage)\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footer);\n\n//# sourceURL=webpack://restaurant-page-/./src/sections/footer.js?");

/***/ }),

/***/ "./src/sections/hero.js":
/*!******************************!*\
  !*** ./src/sections/hero.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_hero_image_1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/hero-image-1.png */ \"./src/images/hero-image-1.png\");\n/* harmony import */ var _images_hero_image_2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/hero-image-2.png */ \"./src/images/hero-image-2.png\");\n/* harmony import */ var _images_hero_image_3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/hero-image-3.png */ \"./src/images/hero-image-3.png\");\n\r\n\r\n\r\n\r\nconst hero = function() {\r\n    const hero = document.createElement('div')\r\nconst tagline = document.createElement('div')\r\nconst h1 = document.createElement('h1')\r\nconst para = document.createElement('p')\r\n\r\nconst restoImg = document.createElement('div')\r\nconst img1 = document.createElement('img')\r\nconst img2 = document.createElement('img')\r\nconst img3 = document.createElement('img')\r\n\r\nconst menuBtn = document.createElement('button')\r\n\r\nmenuBtn.addEventListener('click', btn)\r\n\r\nh1.innerHTML = 'Welcome to the Green Oasis'\r\npara.innerHTML = 'Where every dish is a celebration of life.'\r\n\r\nimg1.src = _images_hero_image_1_png__WEBPACK_IMPORTED_MODULE_0__;\r\nimg2.src = _images_hero_image_2_png__WEBPACK_IMPORTED_MODULE_1__;\r\nimg3.src = _images_hero_image_3_png__WEBPACK_IMPORTED_MODULE_2__;\r\n\r\nmenuBtn.innerHTML = 'MENU'\r\n\r\ntagline.appendChild(h1)\r\ntagline.appendChild(para)\r\n\r\nrestoImg.appendChild(img1)\r\nrestoImg.appendChild(img2)\r\nrestoImg.appendChild(img3)\r\n\r\nhero.appendChild(tagline)\r\nhero.appendChild(restoImg)\r\nhero.appendChild(menuBtn)\r\n\r\ncontent.appendChild(hero)\r\n\r\nhero.classList = ' hero-section'\r\nrestoImg.classList = ' resto-img'\r\n\r\nmenuBtn.classList = 'menu-btn'\r\n\r\nfunction btn() {\r\n    window.scrollTo(0, 1550);\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hero);\n\n//# sourceURL=webpack://restaurant-page-/./src/sections/hero.js?");

/***/ }),

/***/ "./src/sections/menu.js":
/*!******************************!*\
  !*** ./src/sections/menu.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_appetizers_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/appetizers.png */ \"./src/images/appetizers.png\");\n/* harmony import */ var _images_entrees_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/entrees.png */ \"./src/images/entrees.png\");\n/* harmony import */ var _images_salads_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/salads.png */ \"./src/images/salads.png\");\n\r\n\r\n\r\n\r\nconst menu = function() {\r\n  const menuPage = document.createElement('div')\r\n  menuPage.innerHTML = `<h2> <span>Our &nbsp;</span>Menu </h2>\r\n  \r\n  <div class=\"appetizers\">\r\n      <h3>Appetizers</h3>\r\n      <img id=\"appetizers\" src=\"../src/images/appetizers.png\" alt=\"\">\r\n  \r\n      <div>\r\n        <h4>Avocado Toast</h4>\r\n        <p>\r\n          whole grain toast with smashed avocado, cherry tomatoes, red onion, and microgreens.\r\n        </p>\r\n        <p>\r\n          ₱ 100\r\n        </p>\r\n      </div>\r\n  \r\n      <div>\r\n        <h4>Buffalo Cauliflower Wings</h4>\r\n        <p>\r\n          crispy fried cauliflower florets with a spicy buffalo sauce and vegan ranch dressing.\r\n        </p>\r\n        <p>\r\n          ₱ 100\r\n        </p>\r\n      </div>\r\n  \r\n      <div>\r\n        <h4>Spring Rolls</h4>\r\n        <p>\r\n          rice paper rolls stuffed with vegetables, tofu, and herbs, served with a peanut dipping sauce.\r\n        </p>\r\n        <p>\r\n          ₱ 100\r\n        </p>\r\n      </div>\r\n  \r\n      <div>\r\n        <h4>Roasted Red Pepper Hummus</h4>\r\n        <p>\r\n          roasted red pepper hummus made from chickpeas, tahini, lemon juice, and roasted red peppers.\r\n        </p>\r\n        <p>\r\n          ₱ 100\r\n        </p>\r\n      </div>\r\n  </div>\r\n  \r\n  <div class=\"entrees\">\r\n      <h3>Entrees</h3>\r\n      <img id=\"entrees\" src=\"../src/images/entrees.png\" alt=\"\">\r\n  \r\n      <div>\r\n        <h4>Beyond Burger</h4>\r\n        <p>\r\n          a plant-based burger patty served on a whole grain bun with lettuce, tomato, onion, pickles, and vegan mayo.\r\n        </p>\r\n        <p>\r\n          ₱ 100\r\n        </p>\r\n      </div>\r\n  \r\n      <div>\r\n        <h4>Cashew Cream Fettuccine</h4>\r\n        <p>\r\n          fettuccine pasta with a creamy cashew sauce, roasted garlic, and sautéed mushrooms.\r\n        </p>\r\n        <p>\r\n          ₱ 100\r\n        </p>\r\n      </div>\r\n  \r\n      <div>\r\n        <h4>Jackfruit Tacos</h4>\r\n        <p>\r\n          soft corn tortillas filled with seasoned jackfruit, avocado, red cabbage slaw, and chipotle aioli.\r\n        </p>\r\n        <p>\r\n          ₱ 100\r\n        </p>\r\n      </div>\r\n  \r\n      <div>\r\n        <h4>Vegan Mushroom Stroganoff</h4>\r\n        <p>\r\n          a creamy and flavorful mushroom sauce made with cashew cream, Dijon mustard, and fresh herbs\r\n        </p>\r\n        <p>\r\n          ₱ 100\r\n        </p>\r\n      </div>\r\n  </div>\r\n  \r\n  <div class=\"salads\">\r\n      <h3>Salads</h3>\r\n      <img id=\"salads\" src=\"../src/images/salads.png\" >\r\n  \r\n      <div>\r\n        <h4>Kale Caesar Salad</h4>\r\n        <p>\r\n          a plant-based burger patty served on a whole grain bun with lettuce, tomato, onion, pickles, and vegan mayo.\r\n        </p>\r\n        <p>\r\n          ₱ 100\r\n        </p>\r\n      </div>\r\n  \r\n      <div>\r\n        <h4>Cashew Cream Fettuccine</h4>\r\n        <p>\r\n          kale, romaine, and radicchio tossed in a vegan Caesar dressing with croutons and vegan parmesan.\r\n        </p>\r\n        <p>\r\n          ₱ 100\r\n        </p>\r\n      </div>\r\n  \r\n      <div>\r\n        <h4>Thai Peanut Salad</h4>\r\n        <p>\r\n          mixed greens with cucumber, carrots, red bell pepper, crispy tofu, and a spicy peanut dressing.\r\n        </p>\r\n        <p>\r\n          ₱ 100\r\n        </p>\r\n      </div>\r\n  \r\n      <div>\r\n        <h4>Grilled Peach & Arugula Salad</h4>\r\n        <p>\r\n          a perfect combination of sweet and bitter flavors in a healthy and refreshing dish.\r\n        </p>\r\n        <p>\r\n          ₱ 100\r\n        </p>\r\n      </div>\r\n  </div>\r\n  \r\n  <div class=\"desserts-01\">\r\n    <h3>Desserts</h3>\r\n    <div class=\"desserts\">\r\n      <div>\r\n        <img id=\"desserts src=\"../src/images/dessert-1.png\" alt=\"\">\r\n        <h4>Chocolate Avocado Mousse</h4>\r\n        <p>a creamy chocolate mousse made with avocado, coconut milk, and maple syrup.</p>\r\n        <p>₱ 100</p>\r\n      </div>\r\n  \r\n      <div>\r\n        <img src=\"./src/images/dessert-2.png\" alt=\"\">\r\n        <h4>Vegan Cheesecake</h4>\r\n        <p>a rich and creamy cheesecake made with cashews, coconut milk, and a graham cracker crust.</p>\r\n        <p>₱ 100</p>\r\n      </div>\r\n  \r\n      <div>\r\n        <img src=\"./src/images/dessert-3.png\" alt=\"\">\r\n        <h4>Berry Parfait</h4>\r\n        <p>layers of coconut yogurt, fresh berries, and granola, topped with a drizzle of agave nectar.</p>\r\n        <p>₱ 100</p>\r\n      </div>\r\n    </div>\r\n  \r\n  \r\n  </div>`\r\n  menuPage.classList = ' menu'\r\n  content.appendChild(menuPage)\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://restaurant-page-/./src/sections/menu.js?");

/***/ }),

/***/ "./src/sections/navbar.js":
/*!********************************!*\
  !*** ./src/sections/navbar.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst header = function(){\r\n  const content = document.querySelector(\"#content\");\r\n      const header = document.createElement(\"header\");\r\n      const navBar = document.createElement(\"div\");\r\n      const logo = document.createElement(\"div\");\r\n      const links = document.createElement(\"ul\");\r\n      const home = document.createElement(\"li\");\r\n      const menu = document.createElement(\"li\");\r\n      const about = document.createElement(\"li\");\r\n    \r\n      logo.innerHTML = \"Green Oasis\";\r\n      home.innerHTML = \"HOME\";\r\n      menu.innerHTML = \"MENU\";\r\n      about.innerHTML = \"ABOUT\";\r\n    \r\n      links.appendChild(home);\r\n      links.appendChild(menu);\r\n      links.appendChild(about);\r\n    \r\n      navBar.appendChild(logo);\r\n      navBar.appendChild(links);\r\n      header.appendChild(navBar);\r\n    \r\n      navBar.classList = \" nav-bar\";\r\n      logo.classList = \" logo\";\r\n      home.id = \" home\";\r\n      menu.id = \" menu\";\r\n      about.id = \" about\";\r\n    \r\n      content.appendChild(header);\r\n    \r\n      home.addEventListener(\"click\", homeBtn);\r\n      menu.addEventListener(\"click\", menuBtn);\r\n      about.addEventListener(\"click\", aboutBtn);\r\n      logo.addEventListener(\"click\", homeBtn);\r\n    \r\n      function homeBtn() {\r\n        window.scrollTo(0, 0);\r\n      }\r\n    \r\n      function menuBtn() {\r\n        window.scrollTo(0, 1400);\r\n      }\r\n    \r\n      function aboutBtn() {\r\n        window.scrollTo(0, 750);\r\n      }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);\n\n//# sourceURL=webpack://restaurant-page-/./src/sections/navbar.js?");

/***/ }),

/***/ "./src/sections/testimonials.js":
/*!**************************************!*\
  !*** ./src/sections/testimonials.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst testimonials = function(){\r\n  const testimonialsPage = document.createElement('div')\r\n  testimonialsPage.innerHTML = `\r\n  <div class=\"content\">\r\n    <h2>What Are Customers Say About <span>Us</span></h2>\r\n    <p>We take pride in providing our customers with not only delicious food, but also a warm and welcoming atmosphere. But don't just take our word for it - here's what some of our happy customers have to say:</p>\r\n  </div>\r\n  \r\n  <div class=\"quote\">\r\n    <img src=\"../src/images/quote-icon.png\" alt=\"\">\r\n    <p>\r\n      I never thought vegan food could be so flavorful and satisfying! This restaurant has truly opened my eyes to the possibilities of plant-based cuisine.\r\n    </p>\r\n    \r\n    <div class=\"info\">\r\n      <img src=\"../src/images/pfp.png\" alt=\"\">\r\n      <div class=\"name\">\r\n        <p>Wheein</p>\r\n      <p>Korean Idol</p>\r\n      </div>\r\n      \r\n    </div>\r\n  \r\n  </div> \r\n  `\r\n  testimonialsPage.classList = \" testimonials\"\r\n  \r\n  content.appendChild(testimonialsPage)\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (testimonials);\n\n//# sourceURL=webpack://restaurant-page-/./src/sections/testimonials.js?");

/***/ }),

/***/ "./src/images/appetizers.png":
/*!***********************************!*\
  !*** ./src/images/appetizers.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0205081ec184bb3c55c7.png\";\n\n//# sourceURL=webpack://restaurant-page-/./src/images/appetizers.png?");

/***/ }),

/***/ "./src/images/banner.png":
/*!*******************************!*\
  !*** ./src/images/banner.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fcbd0a279145ea6dffbd.png\";\n\n//# sourceURL=webpack://restaurant-page-/./src/images/banner.png?");

/***/ }),

/***/ "./src/images/entrees.png":
/*!********************************!*\
  !*** ./src/images/entrees.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1229e0db816c1c4a5269.png\";\n\n//# sourceURL=webpack://restaurant-page-/./src/images/entrees.png?");

/***/ }),

/***/ "./src/images/hero-image-1.png":
/*!*************************************!*\
  !*** ./src/images/hero-image-1.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9fedfc8585e917acfbec.png\";\n\n//# sourceURL=webpack://restaurant-page-/./src/images/hero-image-1.png?");

/***/ }),

/***/ "./src/images/hero-image-2.png":
/*!*************************************!*\
  !*** ./src/images/hero-image-2.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5c95c8c173c7ab9a8c0c.png\";\n\n//# sourceURL=webpack://restaurant-page-/./src/images/hero-image-2.png?");

/***/ }),

/***/ "./src/images/hero-image-3.png":
/*!*************************************!*\
  !*** ./src/images/hero-image-3.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d590d306132246efc033.png\";\n\n//# sourceURL=webpack://restaurant-page-/./src/images/hero-image-3.png?");

/***/ }),

/***/ "./src/images/salads.png":
/*!*******************************!*\
  !*** ./src/images/salads.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d3defd2a23828b54c4be.png\";\n\n//# sourceURL=webpack://restaurant-page-/./src/images/salads.png?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;