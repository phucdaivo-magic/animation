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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n    margin: 0;\n}\n\n.point {\n    width: 2px;\n    height: 2px;\n    background: green;\n    position: absolute;\n    border-radius: 100px;\n    opacity: 0;\n}\n\n.point.active {\n    transform: scale(4);\n    background: red;\n    z-index: 1;\n}\n\n.character {\n    width: 9%;\n    /* height: 50px; */\n    /* background: red; */\n    position: absolute;\n    /* display: none; */ \n}\n\n.frame-size {\n    width: 100%;\n    height: 100vh;\n    background: red;\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: -1;\n}\n\n.character img {\n    width: 100%;\n    margin-top: -45%;\n    margin-left: -45%;\n}\n\n.context-menu {\n    position: fixed;\n    top: 0;\n    left: 0;\n    background: #fff;\n    border: 1px solid #ddd;\n    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);\n    border-radius: 2px;\n    display: none;\n}\n\n.context-menu-item {\n    padding: 5px 10px;\n    cursor: pointer;\n}\n\n.context-menu-item:hover {\n    background: rgba(0, 0, 0, 0.05);\n}\n\n.banner-tor {\n    width: 7%;\n    position: absolute;\n}\n\n.banner-tor:hover {\n    outline: 2px #ccc dashed;\n}\n\n.banner-tor:after {\n    content: '';\n    display: block;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n\n.banner-tor img {\n    width: 100%;\n}\n\n.banner-tor:hover .banner-resize {\n    display: block;\n}\n\n.banner-resize {\n    background: rgba(0, 0, 0, 0.3);\n    width: 6px;\n    height: 30px;\n    position: absolute;\n    top: calc(50% - 15px);\n    right: 0;\n    cursor: e-resize;\n    z-index: 1;\n    border-radius: 100px;\n    border: 1px solid rgba(255, 255, 255, 0.5);\n    display: none;\n}\n\n@keyframes hover {\n    0%,\n    100% {\n        transform: translateY(0);\n    }\n\n    50% {\n        transform: translateY(-10px);\n    }\n}\n\n.banner-ballon {\n    animation: hover 3s ease-in-out infinite;\n}\n\n.animation-editor {\n    max-width: 100%;\n    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);\n    margin: auto;\n    /* margin-top: 100px; */\n    position: relative;\n    overflow: hidden;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://animation/./src/style.css?./node_modules/css-loader/dist/cjs.js");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Banner)\n/* harmony export */ });\nclass Banner {\n    constructor({ left, top, width, plugin, id, widthOfPosition, $frame }) {\n        this.plugin = plugin;\n        this.$frame = $frame;\n        this.initState(\n            left,\n            top,\n            id || new Date().getTime(),\n            widthOfPosition || clientRect.width,\n            width\n        );\n        this.initDOM();\n        this.registerEvent();\n    }\n\n    initState(left, top, id, widthOfPosition, width) {\n        const clientRect = this.$frame.getBoundingClientRect();\n        this.id = id;\n        this.pageX = left;\n        this.pageY = top;\n        this.activeMove = false;\n        this.activeResize = false;\n        this.width = width;\n        this.widthOfPosition = widthOfPosition;\n        this.widthOfFrame = clientRect.width;\n        this.heightOfFrame = clientRect.height;\n    }\n\n    initDOM() {\n        this.$element = document.createElement(\"div\");\n        this.$element.appendChild(this.plugin.getTempate());\n        this.$element.appendChild(this.getResize());\n        this.$element.className = \"banner-tor\";\n        this.$element.style.left = `${this.pageX}%`;\n        this.$element.style.top = `${this.pageY}%`;\n        this.$element.style.width = `${this.width}%`;\n\n        this.$element.dataset.id = this.id;\n        this.$frame.appendChild(this.$element);\n\n    }\n\n    getResize() {\n        this.$resize = document.createElement(\"div\");\n        this.$resize.className = \"banner-resize\";\n\n        this.$resize.addEventListener(\"mousedown\", ({ clientX }) => {\n            this.activeMove = false;\n            this.activeResize = true;\n            this.clientX = clientX;\n            this.clientWidth = this.$element.offsetWidth;\n        });\n\n        document.addEventListener(\"mousemove\", (event) => {\n            if (this.activeResize) {\n                const { clientX } = event;\n                console.log(this.clientWidth)\n                const width = clientX - this.clientX + this.clientWidth;\n                this.$element.style.width = `${width}px`;\n            }\n        });\n\n        // resize\n        document.addEventListener(\"mouseup\", (event) => {\n            if (this.activeResize) {\n                const { offsetWidth } = this.$element;\n                const { width } = this.getSizeByFrame({ width: offsetWidth})\n                this.$element.style.width = `${width}%`;\n                this.width = width;\n                // Save\n                window._banner = window._banner || {};\n                window._banner[this.id] = {\n                    width,\n                    top: window._banner[this.id].top,\n                    left: window._banner[this.id].left,\n                    widthOfPosition: this.widthOfPosition,\n                    setting: {\n                        plugin: this.plugin.constructor.name,\n                    },\n                };\n\n                localStorage.setItem(\"_banner\", JSON.stringify(window._banner));\n            }\n        });\n\n        return this.$resize;\n    }\n\n    registerEvent() {\n        this.$element.addEventListener(\"click\", (event) => {\n            window._banner_remove = this.id;\n        });\n\n        document.addEventListener(\"keyup\", ({ code }) => {\n            if (code === \"Backspace\" && window._banner_remove) {\n                document.querySelector(`[data-id=\"${window._banner_remove}\"]`).remove();\n                window._banner = window._banner || {};\n                delete window._banner[window._banner_remove];\n                // Save\n                localStorage.setItem(\"_banner\", JSON.stringify(window._banner));\n                window._banner_remove = null;\n            }\n        });\n\n        this.$element.addEventListener(\"mousedown\", ({ clientX, clientY }) => {\n            this.activeMove = true;\n            this.pageX = clientX - this.$element.offsetLeft;\n            this.pageY = clientY - this.$element.offsetTop;\n        });\n\n        document.addEventListener(\"mousemove\", ({ clientX, clientY }) => {\n            if (this.activeMove && !this.activeResize) {\n                this.left = clientX - this.pageX;\n                this.top = clientY - this.pageY;\n\n                this.$element.style.left = `${this.left}px`;\n                this.$element.style.top = `${this.top}px`;\n            }\n        });\n\n        document.addEventListener(\"mouseup\", () => {\n            if (!this.activeResize && this.activeMove) {\n                const frameRect = this.$frame.getBoundingClientRect();\n                const $contentScroll = document.querySelector('html');\n\n                const { offsetLeft, offsetTop, offsetWidth } = this.$element;\n                const { scrollTop, scrollLeft } = $contentScroll;\n\n                frameRect.offsetTop = frameRect.top - this.$frame.offsetTop;\n                frameRect.offsetLeft = frameRect.left - this.$frame.offsetLeft;\n\n                const _width = offsetWidth / frameRect.width * 100;\n                const _top = (offsetTop - frameRect.offsetTop - scrollTop) / frameRect.height * 100;\n                const _left = (offsetLeft - frameRect.offsetLeft - scrollLeft) / frameRect.width * 100;\n                this.$element.style.left = `${_left}%`;\n                this.$element.style.top = `${_top}%`;\n\n                // Save\n                window._banner = window._banner || {};\n                window._banner[this.id] = {\n                    left: _left,\n                    top: _top,\n                    width: _width,\n                    widthOfPosition: frameRect.width,\n                    setting: {\n                        plugin: this.plugin.constructor.name,\n                    },\n                };\n\n                localStorage.setItem(\"_banner\", JSON.stringify(window._banner));\n\n            }\n            this.activeMove = false;\n            this.activeResize = false;\n        });\n    }\n\n    getSizeByFrame({ width, top, left }) {\n        const { offsetWidth, offsetheight } = this.$frame;\n        return {\n            width: (width / offsetWidth) * 100,\n            top: (top / offsetheight) * 100,\n            left: (left / offsetheight) * 100,\n        };\n    }\n\n    getPostion({ top, left }) {\n        const $contentScroll = document.querySelector('html');\n        const { scrollTop, scrollLeft } = $contentScroll;\n        return {\n            y: top + scrollTop,\n            x: left + scrollLeft\n        }\n    }\n}\n\n\n//# sourceURL=webpack://animation/./src/banner.js?");

/***/ }),

/***/ "./src/charactor.js":
/*!**************************!*\
  !*** ./src/charactor.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Character)\n/* harmony export */ });\nclass Character {\n    constructor({ $frame }) {\n        this.initState({ $frame });\n        this.registerEvent();\n    }\n\n    initState({ $frame }) {\n        this.$frame = $frame;\n    }\n\n    registerEvent() {\n        document.addEventListener(\"scroll\", (e) => {\n            let { width , top: __top, height } = this.$frame.getBoundingClientRect();\n            const character = document.querySelector(\".character\");\n            console.log('height', height);\n            const postion = window.innerHeight - 100;\n            __top =  Number(__top - postion).toFixed();\n            let top = document.documentElement.scrollTop || document.body.scrollTop || 0;\n            let _top = Number(top - window.innerHeight + window.innerHeight + 100 + __top).toFixed(0);\n\n            console.log(-__top, window.all[-__top]);\n            const _state = window.all[-__top];\n\n            if (_state) {\n                character.style.left = _state.x + \"px\";\n                character.style.top = _state.y + \"px\";\n                character.querySelector('img').src = `https://www.goesser.at/wp-content/themes/sisu-theme/images/kampagnen/skiwm/fahrer_${_state.img}.png`\n            }\n        });\n    }\n}\n\n//# sourceURL=webpack://animation/./src/charactor.js?");

/***/ }),

/***/ "./src/editor.js":
/*!***********************!*\
  !*** ./src/editor.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Editor)\n/* harmony export */ });\n/* harmony import */ var _banner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./banner */ \"./src/banner.js\");\n\nclass Editor {\n    constructor({ plugins, $element }) {\n        this.initState(plugins, $element);\n        this.initContextMenu();\n        this.initBanner();\n    }\n\n    initState(plugins, $element) {\n        this.$element = $element;\n        const { width, height, top, left } = this.$element.getBoundingClientRect();\n        this.plugins = plugins;\n        this.frameWidth = width;\n        this.frameHeight = height;\n    }\n\n    initContextMenu() {\n        this.$contextMenu = document.createElement('div');\n        this.$contextMenu.className = 'context-menu';\n\n        Object.keys(this.plugins).forEach((plugin) => {\n            const $item = document.createElement('div');\n            $item.className = 'context-menu-item';\n            $item.innerText = plugin;\n            this.$contextMenu.appendChild($item);\n\n            $item.addEventListener('click', ({ pageX, pageY }) => {\n                const { width, height, top, left } = this.$element.getBoundingClientRect();\n                const { x, y } = this.getPostion({ top, left });\n                const banner = new _banner__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n                    left: (pageX - x) / width * 100,\n                    top: (pageY - y) / height * 100,\n                    plugin: new this.plugins[plugin](),\n                    $frame: this.$element\n                });\n            });\n        });\n\n        this.$element.addEventListener(\"contextmenu\", (event) => {\n            event.preventDefault();\n            const { clientX, clientY } = event;\n            this.$contextMenu.style.top = `${clientY}px`;\n            this.$contextMenu.style.left = `${clientX}px`;\n            this.$contextMenu.style.display = 'block';\n        });\n\n        document.addEventListener('click', () => {\n            this.$contextMenu.style.display = 'none';\n        });\n\n        document.body.appendChild(this.$contextMenu);\n    }\n\n    getPostion({ top, left }) {\n        const $contentScroll = document.querySelector('html');\n        const { scrollTop, scrollLeft } = $contentScroll;\n        return {\n            y: top + scrollTop,\n            x: left + scrollLeft\n        }\n    }\n\n    initBanner() {\n        window._banner = JSON.parse(localStorage.getItem('_banner') || '{}');\n        Object.keys(window._banner).forEach((key) => {\n            const item = window._banner[key];\n            const banner = new _banner__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n                id: key,\n                left: item.left,\n                top: item.top,\n                width: item.width,\n                widthOfPosition: item.widthOfPosition,\n                plugin: new this.plugins[item.setting.plugin](),\n                $frame: this.$element,\n            })\n        });\n    }\n}\n\n\n\n//# sourceURL=webpack://animation/./src/editor.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor */ \"./src/editor.js\");\n/* harmony import */ var _plugins_ballon_banner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugins/ballon-banner */ \"./src/plugins/ballon-banner.js\");\n/* harmony import */ var _plugins_finish_banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plugins/finish-banner */ \"./src/plugins/finish-banner.js\");\n/* harmony import */ var _plugins_home_banner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plugins/home-banner */ \"./src/plugins/home-banner.js\");\n/* harmony import */ var _plugins_image_banner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./plugins/image-banner */ \"./src/plugins/image-banner.js\");\n/* harmony import */ var _plugins_link_banner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plugins/link-banner */ \"./src/plugins/link-banner.js\");\n/* harmony import */ var _plugins_goal_banner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plugins/goal-banner */ \"./src/plugins/goal-banner.js\");\n/* harmony import */ var _plugins_house_banner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./plugins/house-banner */ \"./src/plugins/house-banner.js\");\n/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./matrix */ \"./src/matrix.js\");\n/* harmony import */ var _charactor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./charactor */ \"./src/charactor.js\");\n\n\n\n\n\n\n\n\n\n\n\nconst runBannerEditor = () => {\n    const editor = new _editor__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n        $element: document.querySelector('.animation-editor'),\n        plugins: {\n            BallonBanner: _plugins_ballon_banner__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n            LinkBanner: _plugins_link_banner__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n            ImageBanner: _plugins_image_banner__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n            HomeBanner: _plugins_home_banner__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n            FinishBanner: _plugins_finish_banner__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n            HouseBanner: _plugins_house_banner__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n            GoalBanner: _plugins_goal_banner__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n        }\n    });\n}\nconst runMapEditor = () => {\n    const matrix = new _matrix__WEBPACK_IMPORTED_MODULE_8__[\"default\"]({\n        $frame: document.querySelector('.matrix-editor')\n    });\n    // matrix.registerEvent();\n}\n\nconst runAnimation = () => {\n    const character = new _charactor__WEBPACK_IMPORTED_MODULE_9__[\"default\"]({\n        $frame: document.querySelector('.matrix-editor'),\n    });\n}\n\nrunBannerEditor();\nrunMapEditor();\nrunAnimation();\n\n\n\n//# sourceURL=webpack://animation/./src/index.js?");

/***/ }),

/***/ "./src/matrix.js":
/*!***********************!*\
  !*** ./src/matrix.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Matrix)\n/* harmony export */ });\n/* harmony import */ var _vertor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vertor */ \"./src/vertor.js\");\n\nwindow.all = {}\nclass Matrix {\n    constructor({ $frame }) {\n        this.initState($frame);\n        setTimeout(() => {\n            this.initData();\n        }, 100);\n        \n    }\n\n    initState($frame) {\n        this.$frame = $frame;\n        this.pointFirst = null;\n        this.pointLast = null;\n        this.listPoint = [];\n    }\n\n    initData() {\n        const _all = JSON.parse(localStorage.getItem('SKILING')) || [];\n        const a = JSON.parse(`[{\"pointFirst\":{\"x\":662,\"y\":785},\"pointLast\":{\"x\":597,\"y\":896},\"width\":1600.833251953125},{\"pointFirst\":{\"x\":597,\"y\":896},\"pointLast\":{\"x\":614,\"y\":963},\"width\":1600.833251953125},{\"pointFirst\":{\"x\":614,\"y\":963},\"pointLast\":{\"x\":718,\"y\":1048},\"width\":1600.833251953125},{\"pointFirst\":{\"x\":718,\"y\":1048},\"pointLast\":{\"x\":817,\"y\":1086},\"width\":1600.833251953125},{\"pointFirst\":{\"x\":817,\"y\":1086},\"pointLast\":{\"x\":1225,\"y\":1231},\"width\":1600.833251953125},{\"pointFirst\":{\"x\":1225,\"y\":1231},\"pointLast\":{\"x\":1336,\"y\":1297},\"width\":1600.833251953125},{\"pointFirst\":{\"x\":1336,\"y\":1297},\"pointLast\":{\"x\":1362,\"y\":1396},\"width\":1600.833251953125},{\"pointFirst\":{\"x\":1362,\"y\":1396},\"pointLast\":{\"x\":1303,\"y\":1492},\"width\":1600.833251953125},{\"pointFirst\":{\"x\":1303,\"y\":1492},\"pointLast\":{\"x\":828,\"y\":1685},\"width\":1600.833251953125},{\"pointFirst\":{\"x\":828,\"y\":1685},\"pointLast\":{\"x\":709,\"y\":1773},\"width\":1600.833251953125},{\"pointFirst\":{\"x\":709,\"y\":1773},\"pointLast\":{\"x\":743,\"y\":1916},\"width\":1600.833251953125},{\"pointFirst\":{\"x\":743,\"y\":1916},\"pointLast\":{\"x\":918,\"y\":1995},\"width\":1600.833251953125},{\"pointFirst\":{\"x\":918,\"y\":1995},\"pointLast\":{\"x\":1365,\"y\":2186},\"width\":1600.833251953125},{\"pointFirst\":{\"x\":1365,\"y\":2186},\"pointLast\":{\"x\":1417,\"y\":2320},\"width\":1600.833251953125},{\"pointFirst\":{\"x\":1417,\"y\":2320},\"pointLast\":{\"x\":1423,\"y\":2496},\"width\":1600.833251953125},{\"pointFirst\":{\"x\":1423,\"y\":2496},\"pointLast\":{\"x\":1290,\"y\":2648},\"width\":1600.833251953125},{\"pointFirst\":{\"x\":1290,\"y\":2648},\"pointLast\":{\"x\":907,\"y\":2815},\"width\":1600.833251953125},{\"pointFirst\":{\"x\":907,\"y\":2815},\"pointLast\":{\"x\":384,\"y\":2958},\"width\":1600.833251953125},{\"pointFirst\":{\"x\":384,\"y\":2958},\"pointLast\":{\"x\":306,\"y\":3136},\"width\":1600.833251953125},{\"pointFirst\":{\"x\":306,\"y\":3136},\"pointLast\":{\"x\":343,\"y\":3307},\"width\":1600.833251953125},{\"pointFirst\":{\"x\":343,\"y\":3307},\"pointLast\":{\"x\":561,\"y\":3426},\"width\":1600.833251953125},{\"pointFirst\":{\"x\":561,\"y\":3426},\"pointLast\":{\"x\":933,\"y\":3522},\"width\":1600.833251953125},{\"pointFirst\":{\"x\":933,\"y\":3522},\"pointLast\":{\"x\":1140,\"y\":3665},\"width\":1600.833251953125},{\"pointFirst\":{\"x\":1140,\"y\":3665},\"pointLast\":{\"x\":1086,\"y\":3859},\"width\":1600.833251953125},{\"pointFirst\":{\"x\":1086,\"y\":3859},\"pointLast\":{\"x\":920,\"y\":3970},\"width\":1600.833251953125},{\"pointFirst\":{\"x\":920,\"y\":3970},\"pointLast\":{\"x\":588,\"y\":4062},\"width\":1600.833251953125},{\"pointFirst\":{\"x\":588,\"y\":4062},\"pointLast\":{\"x\":346,\"y\":4210},\"width\":1600.833251953125},{\"pointFirst\":{\"x\":346,\"y\":4210},\"pointLast\":{\"x\":260,\"y\":4378},\"width\":1600.833251953125},{\"pointFirst\":{\"x\":260,\"y\":4378},\"pointLast\":{\"x\":262,\"y\":4607},\"width\":1600.833251953125},{\"pointFirst\":{\"x\":262,\"y\":4607},\"pointLast\":{\"x\":317,\"y\":4731},\"width\":1600.833251953125},{\"pointFirst\":{\"x\":317,\"y\":4731},\"pointLast\":{\"x\":450,\"y\":4868},\"width\":1600.833251953125},{\"pointFirst\":{\"x\":450,\"y\":4868},\"pointLast\":{\"x\":594,\"y\":4943},\"width\":1600.833251953125},{\"pointFirst\":{\"x\":594,\"y\":4943},\"pointLast\":{\"x\":875,\"y\":5037},\"width\":1600.833251953125},{\"pointFirst\":{\"x\":875,\"y\":5037},\"pointLast\":{\"x\":1042,\"y\":5131},\"width\":1600.833251953125},{\"pointFirst\":{\"x\":1042,\"y\":5131},\"pointLast\":{\"x\":1209,\"y\":5313},\"width\":1600.833251953125},{\"pointFirst\":{\"x\":1209,\"y\":5313},\"pointLast\":{\"x\":1209,\"y\":5580},\"width\":1600.833251953125},{\"pointFirst\":{\"x\":1209,\"y\":5580},\"pointLast\":{\"x\":1083,\"y\":5699},\"width\":1600.833251953125},{\"pointFirst\":{\"x\":1083,\"y\":5699},\"pointLast\":{\"x\":837,\"y\":5877},\"width\":1600.833251953125},{\"pointFirst\":{\"x\":837,\"y\":5877},\"pointLast\":{\"x\":648,\"y\":5981},\"width\":1600.833251953125},{\"pointFirst\":{\"x\":648,\"y\":5981},\"pointLast\":{\"x\":486,\"y\":6140},\"width\":1600.833251953125},{\"pointFirst\":{\"x\":486,\"y\":6140},\"pointLast\":{\"x\":492,\"y\":6252},\"width\":1600.833251953125},{\"pointFirst\":{\"x\":492,\"y\":6252},\"pointLast\":{\"x\":593,\"y\":6351},\"width\":1600.833251953125},{\"pointFirst\":{\"x\":593,\"y\":6351},\"pointLast\":{\"x\":798,\"y\":6413},\"width\":1600.833251953125},{\"pointFirst\":{\"x\":798,\"y\":6413},\"pointLast\":{\"x\":1121,\"y\":6527},\"width\":1600.833251953125},{\"pointFirst\":{\"x\":1121,\"y\":6527},\"pointLast\":{\"x\":1192,\"y\":6608},\"width\":1600.833251953125},{\"pointFirst\":{\"x\":1192,\"y\":6608},\"pointLast\":{\"x\":1168,\"y\":6697},\"width\":1600.833251953125},{\"pointFirst\":{\"x\":1168,\"y\":6697},\"pointLast\":{\"x\":793,\"y\":6826},\"width\":1600.833251953125},{\"pointFirst\":{\"x\":793,\"y\":6826},\"pointLast\":{\"x\":551,\"y\":6920},\"width\":1600.833251953125},{\"pointFirst\":{\"x\":551,\"y\":6920},\"pointLast\":{\"x\":499,\"y\":7062},\"width\":1600.833251953125},{\"pointFirst\":{\"x\":499,\"y\":7062},\"pointLast\":{\"x\":548,\"y\":7142},\"width\":1600.833251953125},{\"pointFirst\":{\"x\":548,\"y\":7142},\"pointLast\":{\"x\":879,\"y\":7239},\"width\":1600.833251953125},{\"pointFirst\":{\"x\":879,\"y\":7239},\"pointLast\":{\"x\":1141,\"y\":7342},\"width\":1600.833251953125},{\"pointFirst\":{\"x\":1141,\"y\":7342},\"pointLast\":{\"x\":1185,\"y\":7427},\"width\":1600.833251953125},{\"pointFirst\":{\"x\":1185,\"y\":7427},\"pointLast\":{\"x\":1188,\"y\":7517},\"width\":1600.833251953125},{\"pointFirst\":{\"x\":1188,\"y\":7517},\"pointLast\":{\"x\":858,\"y\":7630},\"width\":1600.833251953125},{\"pointFirst\":{\"x\":858,\"y\":7630},\"pointLast\":{\"x\":595,\"y\":7740},\"width\":1600.833251953125},{\"pointFirst\":{\"x\":595,\"y\":7740},\"pointLast\":{\"x\":544,\"y\":7798},\"width\":1600.833251953125},{\"pointFirst\":{\"x\":544,\"y\":7798},\"pointLast\":{\"x\":543,\"y\":7950},\"width\":1600.833251953125},{\"pointFirst\":{\"x\":543,\"y\":7950},\"pointLast\":{\"x\":674,\"y\":8057},\"width\":1600.833251953125},{\"pointFirst\":{\"x\":674,\"y\":8057},\"pointLast\":{\"x\":818,\"y\":8215},\"width\":1600.833251953125},{\"pointFirst\":{\"x\":818,\"y\":8215},\"pointLast\":{\"x\":898,\"y\":8521},\"width\":1600.833251953125},{\"pointFirst\":{\"x\":898,\"y\":8521},\"pointLast\":{\"x\":894,\"y\":8938},\"width\":1600.833251953125}]`);\n        const { width } = this.$frame.getBoundingClientRect();\n\n        for (const { pointFirst, pointLast, width: widthOfSetting } of _all) {\n            const vertor = new _vertor__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({ $frame: this.$frame });\n            const k = width / widthOfSetting;\n            const getNumber = (y) => Number((y * k).toFixed());\n\n            pointFirst.x = Number((pointFirst.x * k).toFixed());\n            pointFirst.y = getNumber(pointFirst.y);\n\n            pointLast.x = Number((pointLast.x * k).toFixed());\n            pointLast.y = getNumber(pointLast.y);\n\n            vertor.setPoint(pointFirst);\n            vertor.setPoint(pointLast);\n        }\n    }\n\n    registerEvent() {\n        document.addEventListener(\"mouseup\", ({ offsetX, offsetY }) => {\n            const { width } = this.$frame.getBoundingClientRect();\n            const x = offsetX;\n            const y = offsetY;\n            if (this.pointFirst) {\n                this.pointLast = { x, y };\n                const vertor = new _vertor__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({ $frame: this.$frame });\n                vertor.setPoint(this.pointFirst);\n                vertor.setPoint(this.pointLast);\n                this.listPoint.push({\n                    pointFirst: this.pointFirst,\n                    pointLast: this.pointLast,\n                    width\n                });\n                // reset\n                this.pointFirst = this.pointLast;\n                this.pointLast = null;\n                localStorage.setItem('SKILING', JSON.stringify(this.listPoint));\n            } else {\n                this.pointFirst = { x, y };\n            }\n        });\n    }\n}\n\n//# sourceURL=webpack://animation/./src/matrix.js?");

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

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   drawPoint: () => (/* binding */ drawPoint)\n/* harmony export */ });\n\n\nconst drawPoint = (x, y, img, $frame) => {\n    const imgs = document.createElement('img');\n    imgs.src = `https://www.goesser.at/wp-content/themes/sisu-theme/images/kampagnen/skiwm/fahrer_${img}.png`\n    imgs.style.width = '60px';\n    const div = document.createElement(\"div\");\n    div.className = \"point\";\n    div.style.left = x + \"px\";\n    div.style.top = y + \"px\";\n    div.setAttribute(\"data-y\", y);\n    $frame.appendChild(div);\n    // div.appendChild(imgs)\n};\n\n//# sourceURL=webpack://animation/./src/utils.js?");

/***/ }),

/***/ "./src/vertor.js":
/*!***********************!*\
  !*** ./src/vertor.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Vertor)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\n\nclass Vertor {\n    constructor({ $frame }) {\n        this.A = null;\n        this.B = null;\n        this.data = {};\n        this.$frame = $frame;\n    }\n\n    setPoint(point) {\n        if (this.A) {\n            this.B = point;\n            this.setPosition();\n        } else {\n            this.A = point;\n        }\n    }\n\n    setPosition() {\n        const { width } = this.$frame.getBoundingClientRect();\n        for (let y = this.A.y; y <= this.B.y; y += 1) {\n            this.data[y] = this.getX(y);\n            const angle = this.calculateAngleWithOY(this.A.x, this.A.y, this.B.x, this.B.y);\n            (0,_utils__WEBPACK_IMPORTED_MODULE_0__.drawPoint)(this.data[y], y, this.getImage(-angle), this.$frame);\n\n            window.all[y] = {\n                w: width,\n                x: this.data[y],\n                y,\n                a: -angle,\n                img: this.getImage(-angle)\n            }\n        }\n    }\n\n    getImage(angle) {\n        let images = {\n            '-15_1': 3,\n            '-60_-15': 2,\n            '-90_-60': 1,\n            '-120_-90': 5,\n            '-165_-120': 4,\n            '-180_-165': 3,\n        }\n\n        for (const key in images) {\n            const [start, end] = key.split('_');\n            if (Number(start) <= angle && angle < Number(end)) {\n                return images[key];\n            }\n        }\n    }\n\n    getX(y) {\n        const tmp = (this.B.x - this.A.x) / (this.B.y - this.A.y);\n        return tmp * y + (this.A.x - tmp * this.A.y);\n    }\n\n    calculateAngleWithOY(x1, y1, x2, y2) {\n        if (x1 === x2) {\n            return 0;\n        }\n\n        let slope = (y2 - y1) / (x2 - x1);\n        let theta = Math.atan(slope) * (180 / Math.PI);\n        let alpha = 90 - theta;\n\n        return Math.abs(alpha);\n    }\n}\n\n//# sourceURL=webpack://animation/./src/vertor.js?");

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