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

/***/ "./src/img/icons/backblaze_logo.svg":
/*!******************************************!*\
  !*** ./src/img/icons/backblaze_logo.svg ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/backblaze_logo.svg\");\n\n//# sourceURL=webpack://storage_transfer_calc/./src/img/icons/backblaze_logo.svg?");

/***/ }),

/***/ "./src/img/icons/bunny_logo.svg":
/*!**************************************!*\
  !*** ./src/img/icons/bunny_logo.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/bunny_logo.svg\");\n\n//# sourceURL=webpack://storage_transfer_calc/./src/img/icons/bunny_logo.svg?");

/***/ }),

/***/ "./src/img/icons/scaleway_logo.svg":
/*!*****************************************!*\
  !*** ./src/img/icons/scaleway_logo.svg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/scaleway_logo.svg\");\n\n//# sourceURL=webpack://storage_transfer_calc/./src/img/icons/scaleway_logo.svg?");

/***/ }),

/***/ "./src/img/icons/vultr_logo.svg":
/*!**************************************!*\
  !*** ./src/img/icons/vultr_logo.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/vultr_logo.svg\");\n\n//# sourceURL=webpack://storage_transfer_calc/./src/img/icons/vultr_logo.svg?");

/***/ }),

/***/ "./src/style/main.css":
/*!****************************!*\
  !*** ./src/style/main.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://storage_transfer_calc/./src/style/main.css?");

/***/ }),

/***/ "./src/script/Classes/CostBar.js":
/*!***************************************!*\
  !*** ./src/script/Classes/CostBar.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CostBar\": () => (/* binding */ CostBar)\n/* harmony export */ });\nclass CostBar {\r\n  createCostBar(container) {\r\n    const costBars = `\r\n      <div>\r\n        <div id=\"backblaze-bar\" class=\"storage-calc__progress-bar\">\r\n          <p class=\"storage-calc__total-sum\"></p>\r\n        </div>\r\n      </div>\r\n      <div>\r\n        <div id=\"bunny-bar\" class=\"storage-calc__progress-bar\">\r\n          <p class=\"storage-calc__total-sum\"></p>\r\n        </div>\r\n      </div>\r\n      <div>\r\n        <div id=\"scaleway-bar\" class=\"storage-calc__progress-bar\">\r\n          <p class=\"storage-calc__total-sum\"></p>\r\n        </div>\r\n      </div>\r\n      <div>\r\n        <div id=\"vultr-bar\" class=\"storage-calc__progress-bar\">\r\n          <p class=\"storage-calc__total-sum\"></p>\r\n        </div>\r\n      </div>\r\n    `;\r\n\r\n    container.innerHTML = costBars;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://storage_transfer_calc/./src/script/Classes/CostBar.js?");

/***/ }),

/***/ "./src/script/Classes/GeneralLayout.js":
/*!*********************************************!*\
  !*** ./src/script/Classes/GeneralLayout.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GeneralLayout\": () => (/* binding */ GeneralLayout)\n/* harmony export */ });\n/* harmony import */ var _configs_calculateConfigs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configs/calculateConfigs */ \"./src/script/configs/calculateConfigs.js\");\n\r\n\r\nclass GeneralLayout {\r\n  constructor(options) {\r\n    const {\r\n      storageControl,\r\n      transferControl,\r\n      appContainer,\r\n      providersInfo,\r\n      costBar,\r\n    } = options;\r\n    this.storageControl = storageControl;\r\n    this.transferControl = transferControl;\r\n    this.appContainer = appContainer;\r\n    this.providersInfo = providersInfo;\r\n    this.costBar = costBar;\r\n    this.storageValue = 100;\r\n    this.transferValue = 400;\r\n  }\r\n\r\n  renderControls() {\r\n    const controlsContainer = document.createElement(\"div\");\r\n    const storageContainer = document.createElement(\"div\");\r\n    const transferContainer = document.createElement(\"div\");\r\n\r\n    controlsContainer.classList.add(\"storage-calc__controls-container\");\r\n    storageContainer.classList.add(\"storage-calc__controls-input-container\");\r\n    transferContainer.classList.add(\"storage-calc__controls-input-container\");\r\n\r\n    this.storageControl.createControlInput(storageContainer);\r\n    this.transferControl.createControlInput(transferContainer);\r\n\r\n    controlsContainer.append(storageContainer, transferContainer);\r\n    this.appContainer.append(controlsContainer);\r\n  }\r\n\r\n  renderProvidersInfo() {\r\n    this.providerFlexContainer = document.createElement(\"div\");\r\n    const providersContainer = document.createElement(\"div\");\r\n    const backblazeContainer = document.createElement(\"div\");\r\n    const bunnyContainer = document.createElement(\"div\");\r\n    const scalewayContainer = document.createElement(\"div\");\r\n    const vultrContainer = document.createElement(\"div\");\r\n\r\n    this.providerFlexContainer.classList.add(\"storage-calc__providers-flex\");\r\n    providersContainer.classList.add(\"storage-calc__providers\");\r\n\r\n    this.providersInfo.createProvider(\r\n      this.providersInfo.backblaze,\r\n      backblazeContainer\r\n    );\r\n    this.providersInfo.createProvider(this.providersInfo.bunny, bunnyContainer);\r\n    this.providersInfo.createProvider(\r\n      this.providersInfo.scaleway,\r\n      scalewayContainer\r\n    );\r\n    this.providersInfo.createProvider(this.providersInfo.vultr, vultrContainer);\r\n    providersContainer.append(\r\n      backblazeContainer,\r\n      bunnyContainer,\r\n      scalewayContainer,\r\n      vultrContainer\r\n    );\r\n    this.providerFlexContainer.append(providersContainer);\r\n    this.appContainer.append(this.providerFlexContainer);\r\n  }\r\n\r\n  renderCostBar() {\r\n    const costBarContainer = document.createElement(\"div\");\r\n    const startPointArea = document.createElement(\"div\");\r\n    startPointArea.classList.add(\"storage-calc__cost-startpoint\");\r\n\r\n    costBarContainer.classList.add(\"storage-calc__cost\");\r\n    this.costBar.createCostBar(costBarContainer);\r\n    this.providerFlexContainer.append(startPointArea, costBarContainer);\r\n  }\r\n\r\n  //for Backblaze and Vultr\r\n  calculateMain = ({ minPayment, storagePrice, transferPrice }) => {\r\n    const totalCost =\r\n      +this.storageValue * storagePrice + +this.transferValue * transferPrice;\r\n    if (totalCost < minPayment && totalCost > 0) {\r\n      return minPayment;\r\n    } else {\r\n      return totalCost;\r\n    }\r\n  };\r\n\r\n  calculateBunny = ({\r\n    maxPayment,\r\n    storagePrice: { hdd, ssd },\r\n    transferPrice,\r\n  }) => {\r\n    let checkedBunny = document.querySelector('input[name=\"Bunny\"]:checked');\r\n    let selectedBunny = checkedBunny.previousElementSibling.textContent;\r\n    let storagePrice = selectedBunny === \"HDD\" ? hdd : ssd;\r\n\r\n    const totalCost =\r\n      +this.storageValue * storagePrice + +this.transferValue * transferPrice;\r\n\r\n    if (totalCost > maxPayment) {\r\n      return maxPayment;\r\n    } else {\r\n      return totalCost;\r\n    }\r\n  };\r\n\r\n  calculateScaleway = ({\r\n    saleSpace,\r\n    storagePrice: { multi, single },\r\n    transferPrice,\r\n  }) => {\r\n    let checkedScaleway = document.querySelector(\r\n      'input[name=\"Scaleway\"]:checked'\r\n    );\r\n    let selectedScaleway = checkedScaleway.previousElementSibling.textContent;\r\n    let storagePrice = selectedScaleway === \"Multi\" ? multi : single;\r\n\r\n    const totalCost = () => {\r\n      let transferCost = (+this.transferValue - saleSpace) * transferPrice;\r\n      let storageCost = (+this.storageValue - saleSpace) * storagePrice;\r\n      let total = 0;\r\n      if (transferCost > 0) total += transferCost;\r\n      if (storageCost > 0) total += storageCost;\r\n      return total;\r\n    };\r\n    return totalCost();\r\n  };\r\n\r\n  getCurrentBarWith = (currentCost) => {\r\n    //max cost bar $74 max barWith 100%\r\n    return Math.round((100 / 74) * currentCost);\r\n  };\r\n\r\n  getCheapestProvider = (providers) => {\r\n    providers.forEach((item) => (item.bar.style.background = \"#696666\"));\r\n    let cheapest = providers.reduce((cheapest, current) => {\r\n      if (current.value < cheapest.value) {\r\n        return current;\r\n      } else if (current.value === cheapest.value) {\r\n        return [cheapest, current];\r\n      } else {\r\n        return cheapest;\r\n      }\r\n    });\r\n    if (Array.isArray(cheapest)) {\r\n      cheapest.forEach((item) => (item.bar.style.background = \"#6743ee\"));\r\n    } else {\r\n      cheapest.bar.style.background = \"#6743ee\";\r\n    }\r\n  };\r\n\r\n  calculateProvidersCost() {\r\n    const backblazeBar = document.getElementById(\"backblaze-bar\");\r\n    const bunnyBar = document.getElementById(\"bunny-bar\");\r\n    const scalewayBar = document.getElementById(\"scaleway-bar\");\r\n    const vultrBar = document.getElementById(\"vultr-bar\");\r\n    const elementsForListener = [\r\n      document.getElementById(\"Bunny1\"),\r\n      document.getElementById(\"Bunny2\"),\r\n      document.getElementById(\"Scaleway1\"),\r\n      document.getElementById(\"Scaleway2\"),\r\n      document.getElementById(\"storage-text\"),\r\n      document.getElementById(\"transfer-text\"),\r\n      document.getElementById(\"storage\"),\r\n      document.getElementById(\"transfer\"),\r\n    ];\r\n\r\n    const handleChangeControl = (event) => {\r\n      if (event) {\r\n        const {\r\n          target: { id, value },\r\n        } = event;\r\n        const storageInput = elementsForListener.slice(4, 5);\r\n        const transferInput = elementsForListener.slice(5, 6);\r\n        const storageControlInput = elementsForListener.slice(6, 7);\r\n        const transferControlInput = elementsForListener.slice(7);\r\n\r\n        if (value > 1000 || value < 0) {\r\n          storageInput[0].value = this.storageValue;\r\n          transferInput[0].value = this.transferValue;\r\n          return;\r\n        }\r\n        //in a real project, it would be necessary to show the user a modal window\r\n        //or a tooltip about exceeding the minimum or maximum value\r\n        if (id === \"storage\" || id === \"storage-text\")\r\n          this.storageValue = value;\r\n        if (id === \"transfer\" || id === \"transfer-text\")\r\n          this.transferValue = value;\r\n\r\n        switch (id) {\r\n          case \"storage\":\r\n            storageInput[0].value = value;\r\n            break;\r\n          case \"transfer\":\r\n            transferInput[0].value = value;\r\n            break;\r\n          case \"storage-text\":\r\n            if (value > 0) {\r\n              storageControlInput[0].value = value;\r\n            } else {\r\n              storageControlInput[0].value = 0;\r\n            }\r\n            break;\r\n          case \"transfer-text\":\r\n            if (value > 0) {\r\n              transferControlInput[0].value = value;\r\n            } else {\r\n              transferControlInput[0].value = 0;\r\n            }\r\n            break;\r\n          default:\r\n            break;\r\n        }\r\n      }\r\n      let backblazeValue =\r\n        Math.round(this.calculateMain(_configs_calculateConfigs__WEBPACK_IMPORTED_MODULE_0__.calculateConfigs.backblaze) * 100) / 100;\r\n      backblazeBar.childNodes[1].innerText = `${backblazeValue}$`;\r\n      backblazeBar.style.width = `${this.getCurrentBarWith(backblazeValue)}%`;\r\n\r\n      let vultrValue =\r\n        Math.round(this.calculateMain(_configs_calculateConfigs__WEBPACK_IMPORTED_MODULE_0__.calculateConfigs.vultr) * 100) / 100;\r\n      vultrBar.childNodes[1].innerText = `${vultrValue}$`;\r\n      vultrBar.style.width = `${this.getCurrentBarWith(vultrValue)}%`;\r\n\r\n      let bunnyValue =\r\n        Math.round(this.calculateBunny(_configs_calculateConfigs__WEBPACK_IMPORTED_MODULE_0__.calculateConfigs.bunny) * 100) / 100;\r\n      bunnyBar.childNodes[1].innerText = `${bunnyValue}$`;\r\n      bunnyBar.style.width = `${this.getCurrentBarWith(bunnyValue)}%`;\r\n\r\n      let scalewayValue =\r\n        Math.round(this.calculateScaleway(_configs_calculateConfigs__WEBPACK_IMPORTED_MODULE_0__.calculateConfigs.scaleway) * 100) /\r\n        100;\r\n      scalewayBar.childNodes[1].innerText = `${scalewayValue}$`;\r\n      scalewayBar.style.width = `${this.getCurrentBarWith(scalewayValue)}%`;\r\n\r\n      this.getCheapestProvider([\r\n        { bar: backblazeBar, value: backblazeValue },\r\n        { bar: vultrBar, value: vultrValue },\r\n        { bar: bunnyBar, value: bunnyValue },\r\n        { bar: scalewayBar, value: scalewayValue },\r\n      ]);\r\n    };\r\n    handleChangeControl();\r\n\r\n    elementsForListener.forEach((item) =>\r\n      item.addEventListener(\"input\", handleChangeControl)\r\n    );\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://storage_transfer_calc/./src/script/Classes/GeneralLayout.js?");

/***/ }),

/***/ "./src/script/Classes/Input.js":
/*!*************************************!*\
  !*** ./src/script/Classes/Input.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Input\": () => (/* binding */ Input)\n/* harmony export */ });\nclass Input {\r\n  constructor(options) {\r\n    const {\r\n      id,\r\n      name,\r\n      type = \"range\",\r\n      minValue,\r\n      maxValue,\r\n      startValue,\r\n      label,\r\n      step,\r\n    } = options;\r\n    this.id = id;\r\n    this.name = name;\r\n    this.type = type;\r\n    this.minValue = minValue;\r\n    this.maxValue = maxValue;\r\n    if (startValue) this.startValue = startValue;\r\n    if (label) this.label = label;\r\n    this.step = step;\r\n  }\r\n\r\n  createControlInput(container) {\r\n    const inputHtml = `\r\n      <label for=${this.id}>\r\n      ${this.label}\r\n        <input\r\n          class=\"storage-calc__controls-gigabytes\"\r\n          placeholder=\"enter GB\"\r\n          id=\"${this.id}-text\"\r\n          type=\"number\"\r\n          min=${this.minValue}\r\n          max=${this.maxValue}\r\n          value=\"${this.startValue}\"\r\n        />\r\n        GB\r\n      </label>\r\n      <input\r\n        class=\"storage-calc__controls-input\"\r\n        id=${this.id}\r\n        name=${this.name}\r\n        type=${this.type}\r\n        min=${this.minValue}\r\n        max=${this.maxValue}\r\n        step=${this.step}\r\n        value=\"${this.startValue}\";\r\n      />\r\n    `;\r\n    container.innerHTML = inputHtml;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://storage_transfer_calc/./src/script/Classes/Input.js?");

/***/ }),

/***/ "./src/script/Classes/ProvidersInfo.js":
/*!*********************************************!*\
  !*** ./src/script/Classes/ProvidersInfo.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProvidersInfo\": () => (/* binding */ ProvidersInfo)\n/* harmony export */ });\nclass ProvidersInfo {\r\n  constructor(options) {\r\n    const { backblaze, bunny, scaleway, vultr } = options;\r\n    this.backblaze = backblaze;\r\n    this.bunny = bunny;\r\n    this.scaleway = scaleway;\r\n    this.vultr = vultr;\r\n  }\r\n\r\n  createProvider({ title, logo, isRadio, radio1, radio2 }, container) {\r\n    const titleProv = `<p class=\"storage-calc__providers-title\">${title}</p>`;\r\n    const radioInputHtml = `\r\n    <div class=\"storage-calc__providers-radio-flex\">\r\n      <div>\r\n        <label class=\"storage-calc__providers-label\" for=${title}1>${radio1}</label>\r\n        <input class=\"storage-calc__providers-input\" id=${title}1 name=${title} checked=\"true\" type=\"radio\" />\r\n      </div>\r\n      <div>\r\n        <label class=\"storage-calc__providers-label\" for=${title}2>${radio2}</label>\r\n        <input class=\"storage-calc__providers-input\" id=${title}2 name=${title} type=\"radio\" />\r\n      </div>\r\n    </div>\r\n    `;\r\n    const providerInfoHtml = `\r\n      ${isRadio ? `<div>${titleProv}${radioInputHtml}</div>` : `${titleProv}`}\r\n      <div class=\"storage-calc__providers-logo-container\">\r\n        <img class=\"storage-calc__providers-logo\" src=${logo} alt=\"provider_icon\">\r\n      <div/>\r\n    `;\r\n\r\n    container.innerHTML = providerInfoHtml;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://storage_transfer_calc/./src/script/Classes/ProvidersInfo.js?");

/***/ }),

/***/ "./src/script/configs/calculateConfigs.js":
/*!************************************************!*\
  !*** ./src/script/configs/calculateConfigs.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"calculateConfigs\": () => (/* binding */ calculateConfigs)\n/* harmony export */ });\nconst calculateConfigs = {\r\n  backblaze: {\r\n    minPayment: 7,\r\n    storagePrice: 0.005,\r\n    transferPrice: 0.01,\r\n  },\r\n  bunny: {\r\n    maxPayment: 10,\r\n    storagePrice: {\r\n      hdd: 0.01,\r\n      ssd: 0.02,\r\n    },\r\n    transferPrice: 0.01,\r\n  },\r\n  scaleway: {\r\n    saleSpace: 75,\r\n    storagePrice: {\r\n      multi: 0.06,\r\n      single: 0.03,\r\n    },\r\n    transferPrice: 0.02,\r\n  },\r\n  vultr: {\r\n    minPayment: 5,\r\n    storagePrice: 0.01,\r\n    transferPrice: 0.01,\r\n  },\r\n};\r\n\n\n//# sourceURL=webpack://storage_transfer_calc/./src/script/configs/calculateConfigs.js?");

/***/ }),

/***/ "./src/script/configs/inputsConfigs.js":
/*!*********************************************!*\
  !*** ./src/script/configs/inputsConfigs.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"inputsControlConfig\": () => (/* binding */ inputsControlConfig)\n/* harmony export */ });\nconst inputsControlConfig = {\r\n  storage: {\r\n    id: \"storage\",\r\n    name: \"storage-input\",\r\n    label: \"Storage: \",\r\n    maxValue: \"1000\",\r\n    startValue: \"100\",\r\n    step: \"1\",\r\n  },\r\n  transfer: {\r\n    id: \"transfer\",\r\n    name: \"transfer-input\",\r\n    label: \"Transfer:\",\r\n    maxValue: \"1000\",\r\n    startValue: \"400\",\r\n    step: \"1\",\r\n  },\r\n};\r\n\n\n//# sourceURL=webpack://storage_transfer_calc/./src/script/configs/inputsConfigs.js?");

/***/ }),

/***/ "./src/script/configs/providersConfigs.js":
/*!************************************************!*\
  !*** ./src/script/configs/providersConfigs.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"providersConfig\": () => (/* binding */ providersConfig)\n/* harmony export */ });\n/* harmony import */ var _img_icons_backblaze_logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../img/icons/backblaze_logo.svg */ \"./src/img/icons/backblaze_logo.svg\");\n/* harmony import */ var _img_icons_bunny_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/icons/bunny_logo.svg */ \"./src/img/icons/bunny_logo.svg\");\n/* harmony import */ var _img_icons_scaleway_logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../img/icons/scaleway_logo.svg */ \"./src/img/icons/scaleway_logo.svg\");\n/* harmony import */ var _img_icons_vultr_logo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../img/icons/vultr_logo.svg */ \"./src/img/icons/vultr_logo.svg\");\n\r\n\r\n\r\n\r\n\r\nconst providersConfig = {\r\n  backblaze: {\r\n    title: \"Backblaze\",\r\n    logo: _img_icons_backblaze_logo_svg__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\r\n    isRadio: false,\r\n  },\r\n  bunny: {\r\n    title: \"Bunny\",\r\n    logo: _img_icons_bunny_logo_svg__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\r\n    isRadio: true,\r\n    radio1: \"HDD\",\r\n    radio2: \"SSD\",\r\n  },\r\n  scaleway: {\r\n    title: \"Scaleway\",\r\n    logo: _img_icons_scaleway_logo_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\r\n    isRadio: true,\r\n    radio1: \"Multi\",\r\n    radio2: \"Single\",\r\n  },\r\n  vultr: {\r\n    title: \"Vultr\",\r\n    logo: _img_icons_vultr_logo_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\r\n    isRadio: false,\r\n  },\r\n};\r\n\n\n//# sourceURL=webpack://storage_transfer_calc/./src/script/configs/providersConfigs.js?");

/***/ }),

/***/ "./src/script/index.js":
/*!*****************************!*\
  !*** ./src/script/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/main.css */ \"./src/style/main.css\");\n/* harmony import */ var _Classes_GeneralLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Classes/GeneralLayout */ \"./src/script/Classes/GeneralLayout.js\");\n/* harmony import */ var _Classes_ProvidersInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Classes/ProvidersInfo */ \"./src/script/Classes/ProvidersInfo.js\");\n/* harmony import */ var _Classes_CostBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Classes/CostBar */ \"./src/script/Classes/CostBar.js\");\n/* harmony import */ var _Classes_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Classes/Input */ \"./src/script/Classes/Input.js\");\n/* harmony import */ var _configs_inputsConfigs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./configs/inputsConfigs */ \"./src/script/configs/inputsConfigs.js\");\n/* harmony import */ var _configs_providersConfigs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./configs/providersConfigs */ \"./src/script/configs/providersConfigs.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst renderApp = () => {\r\n  const appContainer = document.getElementById(\"app-container\");\r\n\r\n  const appLayout = new _Classes_GeneralLayout__WEBPACK_IMPORTED_MODULE_1__.GeneralLayout({\r\n    storageControl: new _Classes_Input__WEBPACK_IMPORTED_MODULE_4__.Input(_configs_inputsConfigs__WEBPACK_IMPORTED_MODULE_5__.inputsControlConfig.storage),\r\n    transferControl: new _Classes_Input__WEBPACK_IMPORTED_MODULE_4__.Input(_configs_inputsConfigs__WEBPACK_IMPORTED_MODULE_5__.inputsControlConfig.transfer),\r\n    providersInfo: new _Classes_ProvidersInfo__WEBPACK_IMPORTED_MODULE_2__.ProvidersInfo(_configs_providersConfigs__WEBPACK_IMPORTED_MODULE_6__.providersConfig),\r\n    costBar: new _Classes_CostBar__WEBPACK_IMPORTED_MODULE_3__.CostBar(),\r\n    appContainer,\r\n  });\r\n  appLayout.renderControls();\r\n  appLayout.renderProvidersInfo();\r\n  appLayout.renderCostBar();\r\n  appLayout.calculateProvidersCost();\r\n};\r\n\r\nrenderApp();\r\n\n\n//# sourceURL=webpack://storage_transfer_calc/./src/script/index.js?");

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
/******/ 				scriptUrl = document.currentScript.src
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script/index.js");
/******/ 	
/******/ })()
;