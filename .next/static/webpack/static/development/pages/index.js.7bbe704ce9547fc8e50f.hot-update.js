webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Photo.js":
/*!*****************************!*\
  !*** ./components/Photo.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _InteractiveButtons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InteractiveButtons */ "./components/InteractiveButtons.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
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
    commentsNum: props.data.comments.count
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", null, "\n                .photoComponent {\n                    display: flex;\n                    flex-direction: column;\n                    width: 29.3333333333%;\n                    float: left;\n                    margin: 2% 2% 20px 2%;\n                    font-size: 1.6rem;\n                    //height: 400px;\n                    background: var(--white);\n                    color: #AD0044;\n                    box-shadow: -12px 16px 75px -27px rgba(0,0,0,1);\n                    margin-bottom: -50px;\n                    margin-top: 100px;\n                    overflow: auto;\n                }\n                img{\n                    width: 80%;\n                    margin: 10%;\n                }\n                .tagline{\n                    margin-bottom: 10px; // kind of hack\n                }\n            "));
});

/***/ })

})
//# sourceMappingURL=index.js.7bbe704ce9547fc8e50f.hot-update.js.map