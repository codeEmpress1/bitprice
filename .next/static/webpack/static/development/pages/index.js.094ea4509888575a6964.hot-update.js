webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Prices.js":
/*!******************************!*\
  !*** ./components/Prices.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);







var _jsxFileName = "C:\\Users\\alimo\\Documents\\Project\\nxttutorial\\components\\Prices.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Prices = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Prices, _React$Component);

  var _super = _createSuper(Prices);

  function Prices() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Prices);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      currency: 'USD'
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Prices, [{
    key: "render",
    value: function render() {
      var list = '';

      if (this.state.currency === 'USD') {
        list = __jsx("li", {
          className: "list-group-item",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 8,
            columnNumber: 12
          }
        }, "Bitcoin rate for ", this.props.bpi.USD.description, ":", __jsx("span", {
          className: "badge badge-primary",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 17
          }
        }, this.props.bpi.USD.code), __jsx("strong", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 17
          }
        }, this.props.bpi.USD.rate));
      } else if (this.state.currency === 'GBP') {
        list = __jsx("li", {
          className: "list-group-item",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 12
          }
        }, "Bitcoin rate for ", this.props.bpi.USD.description, ":", __jsx("span", {
          className: "badge badge-primary",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 17
          }
        }, this.props.bpi.USD.code), __jsx("strong", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 17
          }
        }, this.props.bpi.USD.rate));
      } else if (this.state.currency === 'EUR') {
        list = __jsx("li", {
          className: "list-group-item",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 12
          }
        }, "Bitcoin rate for ", this.props.bpi.USD.description, ":", __jsx("span", {
          className: "badge badge-primary",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }
        }, this.props.bpi.USD.code), __jsx("strong", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }
        }, this.props.bpi.USD.rate));
      }

      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 9
        }
      }, __jsx("ul", {
        className: "list-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 13
        }
      }));
    }
  }]);

  return Prices;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Prices);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1ByaWNlcy5qcyJdLCJuYW1lcyI6WyJQcmljZXMiLCJjdXJyZW5jeSIsImxpc3QiLCJzdGF0ZSIsInByb3BzIiwiYnBpIiwiVVNEIiwiZGVzY3JpcHRpb24iLCJjb2RlIiwicmF0ZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFNQSxNOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNNO0FBQ0pDLGNBQVEsRUFBRTtBQUROLEs7Ozs7Ozs7NkJBR0M7QUFDYixVQUFJQyxJQUFJLEdBQUcsRUFBWDs7QUFDQSxVQUFJLEtBQUtDLEtBQUwsQ0FBV0YsUUFBWCxLQUF3QixLQUE1QixFQUFtQztBQUMvQkMsWUFBSSxHQUFHO0FBQUksbUJBQVMsRUFBQyxpQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQUN1QixLQUFLRSxLQUFMLENBQVdDLEdBQVgsQ0FBZUMsR0FBZixDQUFtQkMsV0FEMUMsT0FFSztBQUFNLG1CQUFTLEVBQUMscUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBdUMsS0FBS0gsS0FBTCxDQUFXQyxHQUFYLENBQWVDLEdBQWYsQ0FBbUJFLElBQTFELENBRkwsRUFHSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVMsS0FBS0osS0FBTCxDQUFXQyxHQUFYLENBQWVDLEdBQWYsQ0FBbUJHLElBQTVCLENBSEwsQ0FBUDtBQUtILE9BTkQsTUFNTyxJQUFJLEtBQUtOLEtBQUwsQ0FBV0YsUUFBWCxLQUF3QixLQUE1QixFQUFtQztBQUN0Q0MsWUFBSSxHQUFHO0FBQUksbUJBQVMsRUFBQyxpQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQUN1QixLQUFLRSxLQUFMLENBQVdDLEdBQVgsQ0FBZUMsR0FBZixDQUFtQkMsV0FEMUMsT0FFSztBQUFNLG1CQUFTLEVBQUMscUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBdUMsS0FBS0gsS0FBTCxDQUFXQyxHQUFYLENBQWVDLEdBQWYsQ0FBbUJFLElBQTFELENBRkwsRUFHSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVMsS0FBS0osS0FBTCxDQUFXQyxHQUFYLENBQWVDLEdBQWYsQ0FBbUJHLElBQTVCLENBSEwsQ0FBUDtBQUtILE9BTk0sTUFNQSxJQUFJLEtBQUtOLEtBQUwsQ0FBV0YsUUFBWCxLQUF3QixLQUE1QixFQUFtQztBQUN0Q0MsWUFBSSxHQUFHO0FBQUksbUJBQVMsRUFBQyxpQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQUNtQixLQUFLRSxLQUFMLENBQVdDLEdBQVgsQ0FBZUMsR0FBZixDQUFtQkMsV0FEdEMsT0FFQztBQUFNLG1CQUFTLEVBQUMscUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBdUMsS0FBS0gsS0FBTCxDQUFXQyxHQUFYLENBQWVDLEdBQWYsQ0FBbUJFLElBQTFELENBRkQsRUFHQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVMsS0FBS0osS0FBTCxDQUFXQyxHQUFYLENBQWVDLEdBQWYsQ0FBbUJHLElBQTVCLENBSEQsQ0FBUDtBQUtIOztBQUVPLGFBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUksaUJBQVMsRUFBQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFESixDQURBO0FBTUg7Ozs7RUFoQ2dCQyw0Q0FBSyxDQUFDQyxTOztBQW1DWlgscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjA5NGVhNDUwOTg4ODU3NWE2OTY0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQcmljZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgY3VycmVuY3k6ICdVU0QnXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbmxldCBsaXN0ID0gJyc7XHJcbmlmICh0aGlzLnN0YXRlLmN1cnJlbmN5ID09PSAnVVNEJykge1xyXG4gICAgbGlzdCA9IDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIEJpdGNvaW4gcmF0ZSBmb3Ige3RoaXMucHJvcHMuYnBpLlVTRC5kZXNjcmlwdGlvbn06XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1wcmltYXJ5XCI+e3RoaXMucHJvcHMuYnBpLlVTRC5jb2RlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmc+e3RoaXMucHJvcHMuYnBpLlVTRC5yYXRlfTwvc3Ryb25nPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG59IGVsc2UgaWYgKHRoaXMuc3RhdGUuY3VycmVuY3kgPT09ICdHQlAnKSB7XHJcbiAgICBsaXN0ID0gPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgQml0Y29pbiByYXRlIGZvciB7dGhpcy5wcm9wcy5icGkuVVNELmRlc2NyaXB0aW9ufTpcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXByaW1hcnlcIj57dGhpcy5wcm9wcy5icGkuVVNELmNvZGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz57dGhpcy5wcm9wcy5icGkuVVNELnJhdGV9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbn0gZWxzZSBpZiAodGhpcy5zdGF0ZS5jdXJyZW5jeSA9PT0gJ0VVUicpIHtcclxuICAgIGxpc3QgPSA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+XHJcbiAgICAgICAgICAgIEJpdGNvaW4gcmF0ZSBmb3Ige3RoaXMucHJvcHMuYnBpLlVTRC5kZXNjcmlwdGlvbn06XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXByaW1hcnlcIj57dGhpcy5wcm9wcy5icGkuVVNELmNvZGV9PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3Ryb25nPnt0aGlzLnByb3BzLmJwaS5VU0QucmF0ZX08L3N0cm9uZz5cclxuICAgICAgICA8L2xpPlxyXG59XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PilcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJpY2VzIl0sInNvdXJjZVJvb3QiOiIifQ==