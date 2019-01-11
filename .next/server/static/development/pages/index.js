module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/InteractiveButtons.js":
/*!******************************************!*\
  !*** ./components/InteractiveButtons.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/md */ "react-icons/md");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var likes = _ref.likes,
      commentsNum = _ref.commentsNum;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "meta"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/",
    className: "heart"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_1__["MdFavoriteBorder"], null), likes), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_1__["MdModeComment"], null), commentsNum));
});

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'Caterpiller  : Training plateform' : _ref$title;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3091077485"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-3091077485"
  }, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    charSet: "utf-8",
    className: "jsx-3091077485"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    className: "jsx-3091077485"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3091077485" + " " + "app"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    className: "jsx-3091077485"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-3091077485"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: '/'
    }
  }, " Learn & Earn "))), children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("footer", {
    className: "jsx-3091077485"
  }, "Footer Layout")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2598683620",
    css: "@import url('https://fonts.googleapis.com/css?family=Oleo+Script');@import url('https://fonts.googleapis.com/css?family=Dancing+Script');@import url('https://fonts.googleapis.com/css?family=Changa:800');:root{--green:#65C5D9;--white:#F4F5F7;--light-gray:#EAEEEF;}@media screen{*,*:after,*:before{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;}}*{margin:0;padding:0;}html{font-size:62.5%;height:100%;}body{height:100%;font-family:sans-serif;background:#AD0044;color:#F7F7F7;font-size:1.4rem;}.app{width:80%;margin:auto;overflow:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hZ2Fycm8vbmV4dGpzRGVtby9jb21wb25lbnRzL0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQjJCLEFBRzhCLEFBSTZDLEFBQ0csQUFDSixBQUNFLEFBQW9FLEFBQ2pILEFBQ0osQUFNSixTQVJvSSxDQVNsSSxFQU5XLElBVFAsQUFPZSxHQURnSCxHQVVqSSxNQVRrQixFQUQyRCxFQUx0RSxHQVNKLENBT3JCLGlCQWZBLENBU2dCLEdBTHVHLFdBTXBHLFdBTndHLE1BTXZHIiwiZmlsZSI6Ii9ob21lL25hZ2Fycm8vbmV4dGpzRGVtby9jb21wb25lbnRzL0xheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuZXhwb3J0IGRlZmF1bHQgKHsgY2hpbGRyZW4sIHRpdGxlID0gJ0NhdGVycGlsbGVyICA6IFRyYWluaW5nIHBsYXRlZm9ybScgfSkgPT4gKFxuICAgIDxkaXY+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+eyB0aXRsZSB9PC90aXRsZT5cbiAgICAgICAgPG1ldGEgY2hhclNldD0ndXRmLTgnIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSdpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoJyAvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwXCI+XG4gICAgICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogJy8nIH19PiBMZWFybiAmIEVhcm4gPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgIHsgY2hpbGRyZW4gfVxuICAgICAgICAgICAgPGZvb3Rlcj5cbiAgICAgICAgICAgIEZvb3RlciBMYXlvdXRcbiAgICAgICAgICAgIDwvZm9vdGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgOnJvb3Qge1xuICAgICAgICAgICAgLS1ncmVlbjogICM2NUM1RDk7IFxuICAgICAgICAgICAgLS13aGl0ZTogI0Y0RjVGNztcbiAgICAgICAgICAgIC0tbGlnaHQtZ3JheTogI0VBRUVFRjtcbiAgICAgICAgfVxuICAgICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9sZW8rU2NyaXB0Jyk7XG4gICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9RGFuY2luZytTY3JpcHQnKTtcbiAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1DaGFuZ2E6ODAwJyk7XG4gICAgICAgIEBtZWRpYSBzY3JlZW4geyAqICwgKjphZnRlciwqOmJlZm9yZSB7IC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDsgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94OyAgYm94LXNpemluZzogYm9yZGVyLWJveDsgICAgfSB9KiB7bWFyZ2luOiAwOyBwYWRkaW5nOiAwO31cbiAgICAgICAgaHRtbCB7IGZvbnQtc2l6ZTogNjIuNSU7IGhlaWdodDogMTAwJTsgfSAvKmJhc2Ugc2l6ZWUqL1xuICAgICAgICBib2R5IHsgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgICAgICAgYmFja2dyb3VuZDogI0FEMDA0NDsgXG4gICAgICAgICAgY29sb3I6ICNGN0Y3Rjc7IFxuICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtOyB9IC8qID0xNHB4IGFsbCB0eXBlIHNpemVzIGFyZSByZWxhdGl2ZSB0byB0aGUgYmFzZSBzaXplKi9cbiAgICAgICAgLmFwcHtcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGhlYWRlcntcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgaGVhZGVyIGgxIGF7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ09sZW8gU2NyaXB0JywgY3Vyc2l2ZTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQ2hhbmdhJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVyZW07XG4gICAgICAgICAgICBjb2xvcjogI0FEMDA0NDtcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAjN0YwRDIzIDBweCAwIDQwcHg7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTIwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgaDJ7XG4gICAgICAgICAgICBmb250LXNpemU6IDMuNXJlbTtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0RhbmNpbmcgU2NyaXB0JywgY3Vyc2l2ZTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB9XG4gICAgICAgIGZvb3RlciB7XG4gICAgICAgICAgICBjbGVhcjogYm90aDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjAwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiA0cHggMDtcbiAgICAgICAgfVxuICAgICAgICAgIFxuICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbilcbiJdfQ== */\n/*@ sourceURL=/home/nagarro/nextjsDemo/components/Layout.js */"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "8598240",
    css: "header.jsx-3091077485{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;}header.jsx-3091077485 h1.jsx-3091077485 a.jsx-3091077485{font-family:'Oleo Script',cursive;font-family:'Changa',sans-serif;font-size:25rem;color:#AD0044;text-shadow:#7F0D23 0px 0 40px;-webkit-letter-spacing:-20px;-moz-letter-spacing:-20px;-ms-letter-spacing:-20px;letter-spacing:-20px;display:inline-block;-webkit-text-decoration:none;text-decoration:none;}h2.jsx-3091077485{font-size:3.5rem;color:white;text-shadow:none;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;font-weight:normal;font-family:'Dancing Script',cursive;position:absolute;top:50%;left:50%;}footer.jsx-3091077485{clear:both;display:inline-block;width:100%;margin-top:200px;text-align:center;padding:4px 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hZ2Fycm8vbmV4dGpzRGVtby9jb21wb25lbnRzL0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQ2dCLEFBRzBCLEFBTXNCLEFBVWxCLEFBV04sV0FDVSxNQVhULFlBQ0ssR0FXTixFQXRCc0IsU0F1QmhCLEdBWEssY0FZSixNQXZCRixRQVBPLElBK0JULElBdkJBLFVBd0JsQixJQXZCbUMsK0JBQ1Ysd0JBU0YsbUJBQ21CLEdBbkJuQixrQ0FvQkQsa0JBQ1YsR0FYYSxLQVlaLFNBQ2IsT0FaeUIsaUJBVkgsa0JBQ3RCLGVBVUEiLCJmaWxlIjoiL2hvbWUvbmFnYXJyby9uZXh0anNEZW1vL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5leHBvcnQgZGVmYXVsdCAoeyBjaGlsZHJlbiwgdGl0bGUgPSAnQ2F0ZXJwaWxsZXIgIDogVHJhaW5pbmcgcGxhdGVmb3JtJyB9KSA9PiAoXG4gICAgPGRpdj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57IHRpdGxlIH08L3RpdGxlPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PSd1dGYtOCcgLz5cbiAgICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J2luaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGgnIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHBcIj5cbiAgICAgICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICAgICAgPGgxPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiAnLycgfX0+IExlYXJuICYgRWFybiA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgeyBjaGlsZHJlbiB9XG4gICAgICAgICAgICA8Zm9vdGVyPlxuICAgICAgICAgICAgRm9vdGVyIExheW91dFxuICAgICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICA6cm9vdCB7XG4gICAgICAgICAgICAtLWdyZWVuOiAgIzY1QzVEOTsgXG4gICAgICAgICAgICAtLXdoaXRlOiAjRjRGNUY3O1xuICAgICAgICAgICAgLS1saWdodC1ncmF5OiAjRUFFRUVGO1xuICAgICAgICB9XG4gICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T2xlbytTY3JpcHQnKTtcbiAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1EYW5jaW5nK1NjcmlwdCcpO1xuICAgICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUNoYW5nYTo4MDAnKTtcbiAgICAgICAgQG1lZGlhIHNjcmVlbiB7ICogLCAqOmFmdGVyLCo6YmVmb3JlIHsgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94OyAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7ICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAgICB9IH0qIHttYXJnaW46IDA7IHBhZGRpbmc6IDA7fVxuICAgICAgICBodG1sIHsgZm9udC1zaXplOiA2Mi41JTsgaGVpZ2h0OiAxMDAlOyB9IC8qYmFzZSBzaXplZSovXG4gICAgICAgIGJvZHkgeyBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjQUQwMDQ0OyBcbiAgICAgICAgICBjb2xvcjogI0Y3RjdGNzsgXG4gICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07IH0gLyogPTE0cHggYWxsIHR5cGUgc2l6ZXMgYXJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHNpemUqL1xuICAgICAgICAuYXBwe1xuICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgaGVhZGVye1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuICAgICAgICBoZWFkZXIgaDEgYXtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT2xlbyBTY3JpcHQnLCBjdXJzaXZlO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdDaGFuZ2EnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNXJlbTtcbiAgICAgICAgICAgIGNvbG9yOiAjQUQwMDQ0O1xuICAgICAgICAgICAgdGV4dC1zaGFkb3c6ICM3RjBEMjMgMHB4IDAgNDBweDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMjBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBoMntcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMy41cmVtO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnLCBjdXJzaXZlO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIH1cbiAgICAgICAgZm9vdGVyIHtcbiAgICAgICAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMDBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDRweCAwO1xuICAgICAgICB9XG4gICAgICAgICAgXG4gICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuKVxuIl19 */\n/*@ sourceURL=/home/nagarro/nextjsDemo/components/Layout.js */"
  }));
});

/***/ }),

/***/ "./components/Photo.js":
/*!*****************************!*\
  !*** ./components/Photo.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _InteractiveButtons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InteractiveButtons */ "./components/InteractiveButtons.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "photoComponent"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      flex: '1 0 auto'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: '/photo',
      query: {
        id: props.id
      }
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/art/".concat(props.data.image),
    alt: ""
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "meta"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "tagline"
  }, props.data.tagline), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InteractiveButtons__WEBPACK_IMPORTED_MODULE_1__["default"], {
    likes: props.data.likes,
    commentsNum: props.data.comments.length
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", null, "\n                .photoComponent {\n                    display: flex;\n                    flex-direction: column;\n                    width: 29.3333333333%;\n                    float: left;\n                    margin: 2% 2% 20px 2%;\n                    font-size: 1.6rem;\n                    //height: 400px;\n                    background: var(--white);\n                    color: #AD0044;\n                    box-shadow: -12px 16px 75px -27px rgba(0,0,0,1);\n                    margin-bottom: -50px;\n                    margin-top: 100px;\n                    overflow: auto;\n                }\n                img{\n                    width: 80%;\n                    margin: 10%;\n                }\n                .tagline{\n                    margin-bottom: 10px; // kind of hack\n                }\n            "));
});

/***/ }),

/***/ "./data/data.js":
/*!**********************!*\
  !*** ./data/data.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return [{
    id: 1,
    tagline: 'You\'re looking at me punk?',
    image: 'Photo.png',
    likes: 4,
    comments: [{
      user: 'rex2018L',
      body: 'Hey this is dope! xxx'
    }, {
      user: 'rex2018L',
      body: 'Hey this is dope! xxx'
    }]
  }];
});

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Photo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Photo */ "./components/Photo.js");
/* harmony import */ var _data_data_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/data.js */ "./data/data.js");

var _jsxFileName = "/home/nagarro/nextjsDemo/pages/index.js";


function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var Index = function Index(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, props.images.map(function (image, key) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Photo__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: key,
      data: image,
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    });
  }));
};

Index.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _objectDestructuringEmpty(_ref);

            return _context.abrupt("return", {
              images: Object(_data_data_js__WEBPACK_IMPORTED_MODULE_4__["default"])() // return { images: [ { }, { } ] }

            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons/md":
/*!*********************************!*\
  !*** external "react-icons/md" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/md");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map