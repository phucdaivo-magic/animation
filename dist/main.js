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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n    margin: 0;\n}\n\n.point {\n    width: 3px;\n    height: 3px;\n    background: green;\n    position: absolute;\n    border-radius: 100px;\n}\n\n.point.active {\n    transform: scale(4);\n    background: red;\n    z-index: 1;\n}\n\n.character {\n    width: 1px;\n    height: 50px;\n    background: red;\n    position: absolute;\n    /* display: none; */\n}\n\n.frame-size {\n    width: 100vw;\n    height: 100vh;\n    background: red;\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: -1;\n}\n\n.character img {\n    width: 9vw;\n    margin-top: -4.5vw;\n    margin-left: -4.5vw;\n}\n\n.context-menu {\n    position: fixed;\n    top: 0;\n    left: 0;\n    background: #fff;\n    border: 1px solid #ddd;\n    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);\n    border-radius: 2px;\n    display: none;\n}\n\n.context-menu-item {\n    padding: 5px 10px;\n    cursor: pointer;\n}\n\n.context-menu-item:hover {\n    background: rgba(0, 0, 0, 0.05);\n}\n\n.banner-tor {\n    width: 7vw;\n    position: absolute;\n}\n\n.banner-tor:hover {\n    outline: 2px #ccc dashed;\n}\n\n.banner-tor:after {\n    content: '';\n    display: block;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n\n.banner-tor img {\n    width: 100%;\n}\n\n.banner-tor:hover .banner-resize {\n    display: block;\n}\n\n.banner-resize {\n    background: rgba(0, 0, 0, 0.3);\n    width: 6px;\n    height: 30px;\n    position: absolute;\n    top: calc(50% - 15px);\n    right: 0;\n    cursor: e-resize;\n    z-index: 1;\n    border-radius: 100px;\n    border: 1px solid rgba(255, 255, 255, 0.5);\n    display: none;\n}\n\n@keyframes hover {\n    0%,\n    100% {\n        transform: translateY(0);\n    }\n\n    50% {\n        transform: translateY(-10px);\n    }\n}\n\n.banner-ballon {\n    animation: hover 3s ease-in-out infinite;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://animation/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://animation/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://animation/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://animation/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://animation/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://animation/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://animation/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://animation/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://animation/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://animation/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/banner.js":
/*!***********************!*\
  !*** ./src/banner.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Banner)\n/* harmony export */ });\nconst clientRect = document\n    .querySelector(\".frame-size\")\n    .getBoundingClientRect();\nclass Banner {\n    constructor({ left, top, width, plugin, id, widthOfPosition }) {\n        this.plugin = plugin;\n        this.initState(\n            left,\n            top,\n            id || new Date().getTime(),\n            widthOfPosition || clientRect.width,\n            width\n        );\n        this.initDOM();\n        this.registerEvent();\n    }\n\n    initState(left, top, id, widthOfPosition, width) {\n        this.pageX = left;\n        this.pageY = top;\n        this.activeMove = false;\n        this.activeResize = false;\n        this.widthOfFrame = 500 || 0;\n        this.heightOfFrame = 2924 || 0;\n        this.widthOfPosition = widthOfPosition;\n        this.width = width;\n        this.id = id;\n    }\n\n    initDOM() {\n        this.$element = document.createElement(\"div\");\n        this.$element.appendChild(this.plugin.getTempate());\n        this.$element.appendChild(this.getResize());\n        this.$element.className = \"banner-tor\";\n        const k = this.widthOfFrame / this.widthOfPosition;\n        this.$element.style.left = `${this.pageX}%`;\n        this.$element.style.top = `${this.pageY}%`;\n        this.$element.style.width = `${this.width}%`;\n\n        this.$element.dataset.id = this.id;\n        document.querySelector(\".animation-editor\").appendChild(this.$element);\n    }\n\n    getResize() {\n        this.$resize = document.createElement(\"div\");\n        this.$resize.className = \"banner-resize\";\n\n        this.$resize.addEventListener(\"mousedown\", (event) => {\n            this.activeMove = false;\n            this.activeResize = true;\n            const { clientX } = event;\n            this.clientX = clientX;\n            this.clientWidth = this.$element.offsetWidth;\n        });\n\n        document.addEventListener(\"mousemove\", (event) => {\n\n            if (this.activeResize) {\n                const { clientX } = event;\n                console.log(this.clientWidth)\n                const width = clientX - this.clientX + this.clientWidth;\n                this.$element.style.width = `${width}px`;\n            }\n        });\n\n        document.addEventListener(\"mouseup\", (event) => {\n            if (this.activeResize) {\n                const { offsetLeft, offsetTop, offsetWidth } = this.$element;\n                console.log(offsetLeft);\n                const { width, top, left } = this.getSizeByFrame({ width: offsetWidth, top: offsetTop, left: offsetLeft })\n                this.$element.style.width = `${width}%`;\n                this.width = width;\n                // Save\n                window._banner = window._banner || {};\n                window._banner[this.id] = {\n                    width,\n                    top,\n                    left,\n                    widthOfPosition: this.widthOfPosition,\n                    setting: {\n                        plugin: this.plugin.constructor.name,\n                    },\n                };\n\n                localStorage.setItem(\"_banner\", JSON.stringify(window._banner));\n            }\n        });\n\n        return this.$resize;\n    }\n\n    registerEvent() {\n        this.$element.addEventListener(\"click\", (event) => {\n            window._banner_remove = this.id;\n        });\n\n        document.addEventListener(\"keyup\", ({ code }) => {\n            if (code === \"Backspace\" && window._banner_remove) {\n                document.querySelector(`[data-id=\"${window._banner_remove}\"]`).remove();\n                window._banner = window._banner || {};\n                delete window._banner[window._banner_remove];\n                // Save\n                localStorage.setItem(\"_banner\", JSON.stringify(window._banner));\n                window._banner_remove = null;\n            }\n        });\n\n        this.$element.addEventListener(\"mousedown\", (event) => {\n            this.activeMove = true;\n            this.pageX = event.clientX - this.$element.offsetLeft;\n            this.pageY = event.clientY - this.$element.offsetTop;\n        });\n\n        document.addEventListener(\"mousemove\", (event) => {\n            if (this.activeMove && !this.activeResize) {\n                const { clientX, clientY } = event;\n                this.left = clientX - this.pageX;\n                this.top = clientY - this.pageY;\n                this.$element.style.left = `${clientX - this.pageX}px`;\n                this.$element.style.top = `${clientY - this.pageY}px`;\n            }\n        });\n\n        document.addEventListener(\"mouseup\", () => {\n            if (!this.activeResize && this.activeMove) {\n                this.$element.style.left = `${(this.left / this.widthOfFrame) * 100}%`;\n                this.$element.style.top = `${(this.top / this.heightOfFrame) * 100}%`;\n                // Save\n                const { offsetLeft, offsetTop, offsetWidth } = this.$element;\n                const { width, top, left } = this.getSizeByFrame({ width: offsetWidth, top: offsetTop, left: offsetLeft });\n                window._banner = window._banner || {};\n                window._banner[this.id] = {\n                    left,\n                    top,\n                    width,\n                    widthOfPosition: this.widthOfFrame,\n                    setting: {\n                        plugin: this.plugin.constructor.name,\n                    },\n                };\n\n                localStorage.setItem(\"_banner\", JSON.stringify(window._banner));\n            }\n            this.activeMove = false;\n            this.activeResize = false;\n        });\n    }\n\n    getSizeByFrame({ width, top, left }) {\n        return {\n            width: (width / this.widthOfFrame) * 100,\n            top: (top / this.heightOfFrame) * 100,\n            left: (left / this.widthOfFrame) * 100,\n        };\n    }\n}\n\n\n//# sourceURL=webpack://animation/./src/banner.js?");

/***/ }),

/***/ "./src/editor.js":
/*!***********************!*\
  !*** ./src/editor.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Editor)\n/* harmony export */ });\n/* harmony import */ var _banner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./banner */ \"./src/banner.js\");\n\nclass Editor {\n    constructor(plugins) {\n        this.initState(plugins);\n        this.initContextMenu();\n        this.initBanner();\n    }\n\n    initState(plugins) {\n        const { width, height } = document.querySelector('.frame-size').getBoundingClientRect()\n        this.plugins = plugins;\n        this.frameWidth = width;\n        this.frameHeight = height;\n    }\n\n    initContextMenu() {\n        this.$contextMenu = document.createElement('div');\n        this.$contextMenu.className = 'context-menu';\n        Object.keys(this.plugins).forEach((plugin) => {\n            const $item = document.createElement('div');\n            $item.className = 'context-menu-item';\n            $item.innerText = plugin;\n            this.$contextMenu.appendChild($item);\n\n            $item.addEventListener('click', (e) => {\n                const { pageX, pageY, target } = e;\n                console.log(pageX- (this.frameWidth - 500) / 2);\n                const banner = new _banner__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n                    left: pageX - (this.frameWidth - 500) / 2 / 500 * 100,\n                    top: 0,\n                    plugin: new this.plugins[plugin](),\n                });\n            });\n        });\n\n        document.addEventListener(\"contextmenu\", (event) => {\n            event.preventDefault();\n            const { clientX, clientY } = event;\n            this.$contextMenu.style.top = `${clientY}px`;\n            this.$contextMenu.style.left = `${clientX}px`;\n            this.$contextMenu.style.display = 'block';\n        });\n\n        document.addEventListener('click', () => {\n            this.$contextMenu.style.display = 'none';\n        });\n\n        document.body.appendChild(this.$contextMenu);\n    }\n\n    initBanner() {\n        window._banner = JSON.parse(localStorage.getItem('_banner') || '{}');\n        Object.keys(window._banner).forEach((key) => {\n            const item = window._banner[key];\n            const banner = new _banner__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n                id: key,\n                left: item.left,\n                top: item.top,\n                width: item.width,\n                widthOfPosition: item.widthOfPosition,\n                plugin: new this.plugins[item.setting.plugin](),\n            })\n        });\n    }\n}\n\n\n\n//# sourceURL=webpack://animation/./src/editor.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor */ \"./src/editor.js\");\n/* harmony import */ var _plugins_ballon_banner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugins/ballon-banner */ \"./src/plugins/ballon-banner.js\");\n/* harmony import */ var _plugins_finish_banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plugins/finish-banner */ \"./src/plugins/finish-banner.js\");\n/* harmony import */ var _plugins_home_banner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plugins/home-banner */ \"./src/plugins/home-banner.js\");\n/* harmony import */ var _plugins_image_banner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./plugins/image-banner */ \"./src/plugins/image-banner.js\");\n/* harmony import */ var _plugins_link_banner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plugins/link-banner */ \"./src/plugins/link-banner.js\");\n/* harmony import */ var _plugins_goal_banner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plugins/goal-banner */ \"./src/plugins/goal-banner.js\");\n/* harmony import */ var _plugins_house_banner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./plugins/house-banner */ \"./src/plugins/house-banner.js\");\n\n\n\n\n\n\n\n\n\nconst editor = new _editor__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    BallonBanner: _plugins_ballon_banner__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    LinkBanner: _plugins_link_banner__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    ImageBanner: _plugins_image_banner__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    HomeBanner: _plugins_home_banner__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    FinishBanner: _plugins_finish_banner__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    HouseBanner: _plugins_house_banner__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n    GoalBanner: _plugins_goal_banner__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n\n});\n\n//# sourceURL=webpack://animation/./src/index.js?");

/***/ }),

/***/ "./src/plugins/Plugin.js":
/*!*******************************!*\
  !*** ./src/plugins/Plugin.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PluginBanner)\n/* harmony export */ });\nclass PluginBanner {\n\n}\n\n//# sourceURL=webpack://animation/./src/plugins/Plugin.js?");

/***/ }),

/***/ "./src/plugins/ballon-banner.js":
/*!**************************************!*\
  !*** ./src/plugins/ballon-banner.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BallonBanner)\n/* harmony export */ });\n/* harmony import */ var _Plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Plugin */ \"./src/plugins/Plugin.js\");\n\n\nclass BallonBanner extends _Plugin__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    getTempate() {\n        const $img = document.createElement('img');\n        $img.className = 'banner-ballon';\n        $img.src = 'https://www.goesser.at/wp-content/themes/sisu-theme/images/kampagnen/skiwm/ballon.png';\n        return $img;\n    }\n}\n\n//# sourceURL=webpack://animation/./src/plugins/ballon-banner.js?");

/***/ }),

/***/ "./src/plugins/finish-banner.js":
/*!**************************************!*\
  !*** ./src/plugins/finish-banner.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FinishBanner)\n/* harmony export */ });\n/* harmony import */ var _Plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Plugin */ \"./src/plugins/Plugin.js\");\n\n\nclass FinishBanner extends _Plugin__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    getTempate() {\n        const $img = document.createElement('img');\n        $img.className = '';\n        $img.src = 'https://www.goesser.at/wp-content/themes/sisu-theme/images/kampagnen/skiwm/zieltor.png';\n        return $img;\n    }\n}\n\n//# sourceURL=webpack://animation/./src/plugins/finish-banner.js?");

/***/ }),

/***/ "./src/plugins/goal-banner.js":
/*!************************************!*\
  !*** ./src/plugins/goal-banner.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GoalBanner)\n/* harmony export */ });\n/* harmony import */ var _Plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Plugin */ \"./src/plugins/Plugin.js\");\n\n\nclass GoalBanner extends _Plugin__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    getTempate() {\n        const $img = document.createElement('img');\n        $img.className = '';\n        let step = 1;\n        $img.src = `https://www.goesser.at/wp-content/themes/sisu-theme/images/kampagnen/skiwm/puplikum${step}.png?v=1`;\n        setInterval(() => {\n            step++;\n            if(step > 2) {\n                step = 1;   \n            }\n            $img.src = `https://www.goesser.at/wp-content/themes/sisu-theme/images/kampagnen/skiwm/puplikum${step}.png?v=1`;\n             \n        }, 500);\n        return $img;\n    }\n}\n\n//# sourceURL=webpack://animation/./src/plugins/goal-banner.js?");

/***/ }),

/***/ "./src/plugins/home-banner.js":
/*!************************************!*\
  !*** ./src/plugins/home-banner.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HomeBanner)\n/* harmony export */ });\n/* harmony import */ var _Plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Plugin */ \"./src/plugins/Plugin.js\");\n\n\nclass HomeBanner extends _Plugin__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    getTempate() {\n        const $img = document.createElement('img');\n        $img.src = 'https://www.goesser.at/wp-content/themes/sisu-theme/images/kampagnen/skiwm/starthaus.png';\n        return $img;\n    }\n}\n\n\n//# sourceURL=webpack://animation/./src/plugins/home-banner.js?");

/***/ }),

/***/ "./src/plugins/house-banner.js":
/*!*************************************!*\
  !*** ./src/plugins/house-banner.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HouseBanner)\n/* harmony export */ });\n/* harmony import */ var _Plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Plugin */ \"./src/plugins/Plugin.js\");\n\n\nclass HouseBanner extends _Plugin__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    getTempate() {\n        const $img = document.createElement('img');\n        $img.className = '';\n        let step = 1;\n        $img.src = `https://www.goesser.at/wp-content/themes/sisu-theme/images/kampagnen/skiwm/huette${step}.png?v=1`;\n        setInterval(() => {\n            step++;\n            $img.src = `https://www.goesser.at/wp-content/themes/sisu-theme/images/kampagnen/skiwm/huette${step}.png?v=1`;\n            if(step > 5) {\n                step = 1;   \n            }\n        }, 500);\n        return $img;\n    }\n}\n\n//# sourceURL=webpack://animation/./src/plugins/house-banner.js?");

/***/ }),

/***/ "./src/plugins/image-banner.js":
/*!*************************************!*\
  !*** ./src/plugins/image-banner.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ImageBanner)\n/* harmony export */ });\n/* harmony import */ var _Plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Plugin */ \"./src/plugins/Plugin.js\");\n\n\nclass ImageBanner extends _Plugin__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    getTempate() {\n        const $img = document.createElement('img');\n        $img.src = 'https://www.goesser.at/wp-content/themes/sisu-theme/images/kampagnen/skiwm/tor.png';\n        return $img;\n    }\n}\n\n//# sourceURL=webpack://animation/./src/plugins/image-banner.js?");

/***/ }),

/***/ "./src/plugins/link-banner.js":
/*!************************************!*\
  !*** ./src/plugins/link-banner.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LinkBanner)\n/* harmony export */ });\n/* harmony import */ var _Plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Plugin */ \"./src/plugins/Plugin.js\");\n\n\nclass LinkBanner extends _Plugin__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    getTempate() {\n        const $a = document.createElement('a');\n        $a.innerText = 'This is Link';\n        $a.href = 'https://abc.com'\n        return $a;\n    }\n}\n\n//# sourceURL=webpack://animation/./src/plugins/link-banner.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/style.css");
/******/ 	
/******/ })()
;