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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\r\n    margin: 0;\r\n}\r\n\r\n.point {\r\n    width: 3px;\r\n    height: 3px;\r\n    background: green;\r\n    position: absolute;\r\n    border-radius: 100px;\r\n}\r\n\r\n.point.active {\r\n    transform: scale(4);\r\n    background: red;\r\n    z-index: 1;\r\n}\r\n\r\n.character {\r\n    width: 1px;\r\n    height: 50px;\r\n    background: red;\r\n    position: absolute;\r\n    /* display: none; */\r\n}\r\n\r\n.frame-size {\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background: red;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: -1;\r\n}\r\n\r\n.character img {\r\n    width: 9vw;\r\n    margin-top: -4.5vw;\r\n    margin-left: -4.5vw;\r\n}\r\n\r\n.context-menu {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    background: #fff;\r\n    border: 1px solid #ddd;\r\n    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);\r\n    border-radius: 2px;\r\n    display: none;\r\n}\r\n\r\n.context-menu-item {\r\n    padding: 5px 10px;\r\n    cursor: pointer;\r\n}\r\n\r\n.context-menu-item:hover {\r\n    background: rgba(0, 0, 0, 0.05);\r\n}\r\n\r\n.banner-tor {\r\n    width: 7vw;\r\n    position: absolute;\r\n}\r\n\r\n.banner-tor:hover {\r\n    outline: 3px #ccc dotted;\r\n}\r\n\r\n.banner-tor:after {\r\n    content: '';\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n}\r\n\r\n.banner-tor img {\r\n    width: 100%;\r\n}\r\n\r\n.banner-tor:hover .banner-resize {\r\n    display: block;\r\n}\r\n\r\n.banner-resize {\r\n    background: rgba(0, 0, 0, 0.3);\r\n    width: 6px;\r\n    height: 30px;\r\n    position: absolute;\r\n    top: calc(50% - 15px);\r\n    right: 0;\r\n    cursor: e-resize;\r\n    z-index: 1;\r\n    border-radius: 100px;\r\n    border: 1px solid rgba(255, 255, 255, 0.5);\r\n    display: none;\r\n}\r\n\r\n@keyframes hover {\r\n    0%,\r\n    100% {\r\n        transform: translateY(0);\r\n    }\r\n\r\n    50% {\r\n        transform: translateY(-10px);\r\n    }\r\n}\r\n\r\n.banner-ballon {\r\n    animation: hover 3s ease-in-out infinite;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://animation/./src/style.css?./node_modules/css-loader/dist/cjs.js");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Banner)\n/* harmony export */ });\nconst { width, height } = document.querySelector('.frame-size').getBoundingClientRect()\r\nclass Banner {\r\n    constructor({\r\n        left,\r\n        top,\r\n        plugin,\r\n        id = new Date().getTime(),\r\n        widthSetting = 0,\r\n    }) {\r\n        this.plugin = plugin;\r\n        this.initState(left, top, id, widthSetting);\r\n        this.initDOM();\r\n        this.registerEvent();\r\n    }\r\n\r\n    initState(left, top, id, widthSetting) {\r\n        this.pageX = left;\r\n        this.pageY = top;\r\n        this.activeMove = false;\r\n        this.activeResize = false;\r\n        this.widthFrame = width;\r\n        this.widthSetting = widthSetting;\r\n        this.id = id;\r\n    }\r\n\r\n    initDOM() {\r\n        console.log(this.widthFrame, this.widthSetting);\r\n\r\n        this.$element = document.createElement('div');\r\n        this.$element.appendChild(this.plugin.getTempate());\r\n        this.$element.appendChild(this.getResize());\r\n        this.$element.className = 'banner-tor';\r\n        const k = this.widthFrame/ this.widthSetting;\r\n        this.$element.style.left = `${this.pageX * k}px`;\r\n        this.$element.style.top = `${this.pageY * k}px`;\r\n        this.$element.dataset.id = this.id;\r\n        document.body.appendChild(this.$element);\r\n    }\r\n\r\n    getResize() {\r\n        this.$resize = document.createElement('div');\r\n        this.$resize.className = 'banner-resize';\r\n\r\n        this.$resize.addEventListener('mousedown', () => {\r\n            this.activeMove = false;\r\n            this.activeResize = true;\r\n        });\r\n\r\n        document.addEventListener('mousemove', (event) => {\r\n            if (this.activeResize) {\r\n                const { clientX } = event;\r\n                const width = clientX - this.$element.offsetLeft;\r\n                this.$element.style.width = `${width}px`;\r\n            }\r\n        });\r\n\r\n        document.addEventListener(\"mouseup\", (event) => {\r\n            if (this.activeResize) {\r\n                const { clientX } = event;\r\n                const _width = clientX - this.$element.offsetLeft;\r\n                this.$element.style.width = `${_width / width * 100}vw`;\r\n            }\r\n        });\r\n\r\n        return this.$resize;\r\n    }\r\n\r\n    registerEvent() {\r\n        this.$element.addEventListener('mousedown', (event) => {\r\n            this.activeMove = true;\r\n            this.pageX = event.clientX - this.$element.offsetLeft;\r\n            this.pageY = event.clientY - this.$element.offsetTop;\r\n        });\r\n\r\n        document.addEventListener('mousemove', (event) => {\r\n            if (this.activeMove && !this.activeResize) {\r\n                const { clientX, clientY } = event;\r\n                this.left = clientX - this.pageX;\r\n                this.top = clientY - this.pageY;\r\n                this.$element.style.left = `${clientX - this.pageX}px`;\r\n                this.$element.style.top = `${clientY - this.pageY}px`;\r\n            }\r\n        });\r\n\r\n        document.addEventListener(\"mouseup\", () => {\r\n            if (!this.activeResize) {\r\n                this.$element.style.left = `${this.left / width * 100}vw`;\r\n                this.$element.style.top = `${this.top / width * 100}vw`;\r\n                window._banner = window._banner || {};\r\n                window._banner[this.id] = {\r\n                    left: this.left,\r\n                    top: this.top,\r\n                    width: this.widthFrame,\r\n                    setting: {\r\n                        plugin: this.plugin.constructor.name,\r\n                        widthSetting: this.width\r\n                    }\r\n                };\r\n\r\n                localStorage.setItem('_banner', JSON.stringify(window._banner));\r\n            }\r\n            this.activeMove = false;\r\n            this.activeResize = false;\r\n        });\r\n    }\r\n}\n\n//# sourceURL=webpack://animation/./src/banner.js?");

/***/ }),

/***/ "./src/editor.js":
/*!***********************!*\
  !*** ./src/editor.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Editor)\n/* harmony export */ });\n/* harmony import */ var _banner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./banner */ \"./src/banner.js\");\n\r\nclass Editor {\r\n    constructor(plugins) {\r\n        this.initState(plugins);\r\n        this.initContextMenu();\r\n        this.initBanner();\r\n    }\r\n\r\n    initState(plugins) {\r\n        const { width, height } = document.querySelector('.frame-size').getBoundingClientRect()\r\n        this.plugins = plugins;\r\n        this.frameWidth = width;\r\n        this.frameHeight = height;\r\n    }\r\n\r\n    initPlugin() {\r\n        this.createContextMenu();\r\n    }\r\n\r\n    initContextMenu() {\r\n        this.$contextMenu = document.createElement('div');\r\n        this.$contextMenu.className = 'context-menu';\r\n        Object.keys(this.plugins).forEach((plugin) => {\r\n            const $item = document.createElement('div');\r\n            $item.className = 'context-menu-item';\r\n            $item.innerText = plugin;\r\n            this.$contextMenu.appendChild($item);\r\n\r\n            $item.addEventListener('click', (e) => {\r\n                const { pageX, pageY, target } = e;\r\n                const banner = new _banner__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\r\n                    left: pageX,\r\n                    top: pageY,\r\n                    plugin: new this.plugins[plugin]()\r\n                });\r\n            });\r\n        });\r\n\r\n        document.addEventListener(\"contextmenu\", (event) => {\r\n            event.preventDefault();\r\n            const { clientX, clientY } = event;\r\n            this.$contextMenu.style.top = `${clientY}px`;\r\n            this.$contextMenu.style.left = `${clientX}px`;\r\n            this.$contextMenu.style.display = 'block';\r\n        });\r\n\r\n        document.addEventListener('click', () => {\r\n            this.$contextMenu.style.display = 'none';\r\n        });\r\n\r\n        document.body.appendChild(this.$contextMenu);\r\n    }\r\n\r\n    initBanner() {\r\n        window._banner = JSON.parse(localStorage.getItem('_banner') || '{}');\r\n        Object.keys(window._banner).forEach((key) => {\r\n            const item = window._banner[key];\r\n            const banner = new _banner__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\r\n                left: item.left,\r\n                top: item.top,\r\n                plugin: new this.plugins[item.setting.plugin](),\r\n                widthSetting: item.width\r\n            })\r\n        });\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://animation/./src/editor.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor */ \"./src/editor.js\");\n/* harmony import */ var _plugins_ballon_banner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugins/ballon-banner */ \"./src/plugins/ballon-banner.js\");\n/* harmony import */ var _plugins_finish_banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plugins/finish-banner */ \"./src/plugins/finish-banner.js\");\n/* harmony import */ var _plugins_home_banner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plugins/home-banner */ \"./src/plugins/home-banner.js\");\n/* harmony import */ var _plugins_image_banner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./plugins/image-banner */ \"./src/plugins/image-banner.js\");\n/* harmony import */ var _plugins_link_banner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plugins/link-banner */ \"./src/plugins/link-banner.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst editor = new _editor__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\r\n    BallonBanner: _plugins_ballon_banner__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\r\n    LinkBanner: _plugins_link_banner__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\r\n    ImageBanner: _plugins_image_banner__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\r\n    HomeBanner: _plugins_home_banner__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\r\n    FinishBanner: _plugins_finish_banner__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\r\n});\n\n//# sourceURL=webpack://animation/./src/index.js?");

/***/ }),

/***/ "./src/plugins/Plugin.js":
/*!*******************************!*\
  !*** ./src/plugins/Plugin.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PluginBanner)\n/* harmony export */ });\nclass PluginBanner {\r\n\r\n}\n\n//# sourceURL=webpack://animation/./src/plugins/Plugin.js?");

/***/ }),

/***/ "./src/plugins/ballon-banner.js":
/*!**************************************!*\
  !*** ./src/plugins/ballon-banner.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BallonBanner)\n/* harmony export */ });\n/* harmony import */ var _Plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Plugin */ \"./src/plugins/Plugin.js\");\n\r\n\r\nclass BallonBanner extends _Plugin__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    getTempate() {\r\n        const $img = document.createElement('img');\r\n        $img.className = 'banner-ballon';\r\n        $img.src = 'https://www.goesser.at/wp-content/themes/sisu-theme/images/kampagnen/skiwm/ballon.png';\r\n        return $img;\r\n    }\r\n}\n\n//# sourceURL=webpack://animation/./src/plugins/ballon-banner.js?");

/***/ }),

/***/ "./src/plugins/finish-banner.js":
/*!**************************************!*\
  !*** ./src/plugins/finish-banner.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FinishBanner)\n/* harmony export */ });\n/* harmony import */ var _Plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Plugin */ \"./src/plugins/Plugin.js\");\n\r\n\r\nclass FinishBanner extends _Plugin__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    getTempate() {\r\n        const $img = document.createElement('img');\r\n        $img.className = '';\r\n        $img.src = 'https://www.goesser.at/wp-content/themes/sisu-theme/images/kampagnen/skiwm/zieltor.png';\r\n        return $img;\r\n    }\r\n}\n\n//# sourceURL=webpack://animation/./src/plugins/finish-banner.js?");

/***/ }),

/***/ "./src/plugins/home-banner.js":
/*!************************************!*\
  !*** ./src/plugins/home-banner.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HomeBanner)\n/* harmony export */ });\n/* harmony import */ var _Plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Plugin */ \"./src/plugins/Plugin.js\");\n\r\n\r\nclass HomeBanner extends _Plugin__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    getTempate() {\r\n        const $img = document.createElement('img');\r\n        $img.src = 'https://www.goesser.at/wp-content/themes/sisu-theme/images/kampagnen/skiwm/starthaus.png';\r\n        return $img;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://animation/./src/plugins/home-banner.js?");

/***/ }),

/***/ "./src/plugins/image-banner.js":
/*!*************************************!*\
  !*** ./src/plugins/image-banner.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ImageBanner)\n/* harmony export */ });\n/* harmony import */ var _Plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Plugin */ \"./src/plugins/Plugin.js\");\n\r\n\r\nclass ImageBanner extends _Plugin__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    getTempate() {\r\n        const $img = document.createElement('img');\r\n        $img.src = 'https://www.goesser.at/wp-content/themes/sisu-theme/images/kampagnen/skiwm/tor.png';\r\n        return $img;\r\n    }\r\n}\n\n//# sourceURL=webpack://animation/./src/plugins/image-banner.js?");

/***/ }),

/***/ "./src/plugins/link-banner.js":
/*!************************************!*\
  !*** ./src/plugins/link-banner.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LinkBanner)\n/* harmony export */ });\n/* harmony import */ var _Plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Plugin */ \"./src/plugins/Plugin.js\");\n\r\n\r\nclass LinkBanner extends _Plugin__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    getTempate() {\r\n        const $a = document.createElement('a');\r\n        $a.innerText = 'This is Link';\r\n        $a.href = 'https://abc.com'\r\n        return $a;\r\n    }\r\n}\n\n//# sourceURL=webpack://animation/./src/plugins/link-banner.js?");

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