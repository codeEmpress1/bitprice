webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Prices.js":
/*!******************************!*\
  !*** ./components/Prices.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);








var _jsxFileName = "C:\\Users\\alimo\\Documents\\Project\\nxttutorial\\components\\Prices.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Prices = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Prices, _React$Component);

  var _super = _createSuper(Prices);

  function Prices() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Prices);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "state", {
      currency: 'USD'
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Prices, [{
    key: "render",
    value: function render() {
      var _this2 = this,
          _s = $RefreshSig$();

      var list = '';

      var Prices = function Prices() {
        _s();

        var _useState = useState('USD'),
            _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
            currency = _useState2[0],
            setCurrency = _useState2[1];

        if (currency === 'USD') {
          list = __jsx("li", {
            className: "list-group-item",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 12,
              columnNumber: 16
            }
          }, "Bitcoin rate for ", _this2.props.bpi.USD.description, ":", __jsx("span", {
            className: "badge badge-primary",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 14,
              columnNumber: 21
            }
          }, _this2.props.bpi.USD.code), __jsx("strong", {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 21
            }
          }, _this2.props.bpi.USD.rate));
        } else if (currency === 'GBP') {
          list = __jsx("li", {
            className: "list-group-item",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 16
            }
          }, "Bitcoin rate for ", _this2.props.bpi.GBP.description, ":", __jsx("span", {
            className: "badge badge-primary",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 21
            }
          }, _this2.props.bpi.GBP.code), __jsx("strong", {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 21
            }
          }, _this2.props.bpi.GBP.rate));
        } else if (_this2.state.currency === 'EUR') {
          list = __jsx("li", {
            className: "list-group-item",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 16
            }
          }, "Bitcoin rate for ", _this2.props.bpi.EUR.description, ":", __jsx("span", {
            className: "badge badge-primary",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 21
            }
          }, _this2.props.bpi.EUR.code), __jsx("strong", {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 21
            }
          }, _this2.props.bpi.EUR.rate));
        }

        return __jsx("div", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }
        }, __jsx("ul", {
          className: "list-group",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 17
          }
        }, list), __jsx("br", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 17
          }
        }), __jsx("select", {
          onChange: function onChange(e) {
            return _this2.setState({
              currency: e.target.value
            });
          },
          className: "form-control",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 17
          }
        }, __jsx("option", {
          value: "USD",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 21
          }
        }, "USD"), __jsx("option", {
          value: "GBP",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 21
          }
        }, "GBP"), __jsx("option", {
          value: "EUR",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 21
          }
        }, "EUR")));
      };

      _s(Prices, "IMt9glJKuY0gCtznVFnjeGsjS3E=");
    }
  }]);

  return Prices;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1ByaWNlcy5qcyJdLCJuYW1lcyI6WyJQcmljZXMiLCJjdXJyZW5jeSIsImxpc3QiLCJ1c2VTdGF0ZSIsInNldEN1cnJlbmN5IiwicHJvcHMiLCJicGkiLCJVU0QiLCJkZXNjcmlwdGlvbiIsImNvZGUiLCJyYXRlIiwiR0JQIiwic3RhdGUiLCJFVVIiLCJlIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQU1BLE07Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ007QUFDSkMsY0FBUSxFQUFFO0FBRE4sSzs7Ozs7Ozs2QkFHQztBQUFBO0FBQUE7O0FBQ2IsVUFBSUMsSUFBSSxHQUFHLEVBQVg7O0FBRUEsVUFBTUYsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLHdCQUNnQkcsUUFBUSxDQUFDLEtBQUQsQ0FEeEI7QUFBQTtBQUFBLFlBQ1ZGLFFBRFU7QUFBQSxZQUNBRyxXQURBOztBQUdqQixZQUFJSCxRQUFRLEtBQUssS0FBakIsRUFBd0I7QUFDcEJDLGNBQUksR0FBRztBQUFJLHFCQUFTLEVBQUMsaUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FDdUIsTUFBSSxDQUFDRyxLQUFMLENBQVdDLEdBQVgsQ0FBZUMsR0FBZixDQUFtQkMsV0FEMUMsT0FFSztBQUFNLHFCQUFTLEVBQUMscUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBdUMsTUFBSSxDQUFDSCxLQUFMLENBQVdDLEdBQVgsQ0FBZUMsR0FBZixDQUFtQkUsSUFBMUQsQ0FGTCxFQUdLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUyxNQUFJLENBQUNKLEtBQUwsQ0FBV0MsR0FBWCxDQUFlQyxHQUFmLENBQW1CRyxJQUE1QixDQUhMLENBQVA7QUFLSCxTQU5ELE1BTU8sSUFBSVQsUUFBUSxLQUFLLEtBQWpCLEVBQXdCO0FBQzNCQyxjQUFJLEdBQUc7QUFBSSxxQkFBUyxFQUFDLGlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBQ3VCLE1BQUksQ0FBQ0csS0FBTCxDQUFXQyxHQUFYLENBQWVLLEdBQWYsQ0FBbUJILFdBRDFDLE9BRUs7QUFBTSxxQkFBUyxFQUFDLHFCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQXVDLE1BQUksQ0FBQ0gsS0FBTCxDQUFXQyxHQUFYLENBQWVLLEdBQWYsQ0FBbUJGLElBQTFELENBRkwsRUFHSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVMsTUFBSSxDQUFDSixLQUFMLENBQVdDLEdBQVgsQ0FBZUssR0FBZixDQUFtQkQsSUFBNUIsQ0FITCxDQUFQO0FBS0gsU0FOTSxNQU1BLElBQUksTUFBSSxDQUFDRSxLQUFMLENBQVdYLFFBQVgsS0FBd0IsS0FBNUIsRUFBbUM7QUFDdENDLGNBQUksR0FBRztBQUFJLHFCQUFTLEVBQUMsaUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FDdUIsTUFBSSxDQUFDRyxLQUFMLENBQVdDLEdBQVgsQ0FBZU8sR0FBZixDQUFtQkwsV0FEMUMsT0FFSztBQUFNLHFCQUFTLEVBQUMscUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBdUMsTUFBSSxDQUFDSCxLQUFMLENBQVdDLEdBQVgsQ0FBZU8sR0FBZixDQUFtQkosSUFBMUQsQ0FGTCxFQUdLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUyxNQUFJLENBQUNKLEtBQUwsQ0FBV0MsR0FBWCxDQUFlTyxHQUFmLENBQW1CSCxJQUE1QixDQUhMLENBQVA7QUFLSDs7QUFFTyxlQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDSTtBQUFJLG1CQUFTLEVBQUMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0tSLElBREwsQ0FESixFQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFKSixFQUtJO0FBQVEsa0JBQVEsRUFBRSxrQkFBQVksQ0FBQztBQUFBLG1CQUFJLE1BQUksQ0FBQ0MsUUFBTCxDQUFjO0FBQUNkLHNCQUFRLEVBQUVhLENBQUMsQ0FBQ0UsTUFBRixDQUFTQztBQUFwQixhQUFkLENBQUo7QUFBQSxXQUFuQjtBQUFrRSxtQkFBUyxFQUFDLGNBQTVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDSTtBQUFRLGVBQUssRUFBQyxLQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosRUFFSTtBQUFRLGVBQUssRUFBQyxLQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosRUFHSTtBQUFRLGVBQUssRUFBQyxLQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEosQ0FMSixDQURBO0FBWUgsT0FuQ1Q7O0FBSGEsU0FHUGpCLE1BSE87QUF1Q1I7Ozs7RUEzQ2dCa0IsNENBQUssQ0FBQ0MsUzs7QUErQ1puQixxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuZWNkZWQzZTdjNDk3OTUxMWRmMjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFByaWNlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICBjdXJyZW5jeTogJ1VTRCdcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxubGV0IGxpc3QgPSAnJztcclxuXHJcbmNvbnN0IFByaWNlcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtjdXJyZW5jeSwgc2V0Q3VycmVuY3ldID0gIHVzZVN0YXRlKCdVU0QnKVxyXG5cclxuICAgIGlmIChjdXJyZW5jeSA9PT0gJ1VTRCcpIHtcclxuICAgICAgICBsaXN0ID0gPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEJpdGNvaW4gcmF0ZSBmb3Ige3RoaXMucHJvcHMuYnBpLlVTRC5kZXNjcmlwdGlvbn06XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtcHJpbWFyeVwiPnt0aGlzLnByb3BzLmJwaS5VU0QuY29kZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57dGhpcy5wcm9wcy5icGkuVVNELnJhdGV9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgfSBlbHNlIGlmIChjdXJyZW5jeSA9PT0gJ0dCUCcpIHtcclxuICAgICAgICBsaXN0ID0gPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEJpdGNvaW4gcmF0ZSBmb3Ige3RoaXMucHJvcHMuYnBpLkdCUC5kZXNjcmlwdGlvbn06XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtcHJpbWFyeVwiPnt0aGlzLnByb3BzLmJwaS5HQlAuY29kZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57dGhpcy5wcm9wcy5icGkuR0JQLnJhdGV9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmN1cnJlbmN5ID09PSAnRVVSJykge1xyXG4gICAgICAgIGxpc3QgPSA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgQml0Y29pbiByYXRlIGZvciB7dGhpcy5wcm9wcy5icGkuRVVSLmRlc2NyaXB0aW9ufTpcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1wcmltYXJ5XCI+e3RoaXMucHJvcHMuYnBpLkVVUi5jb2RlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPnt0aGlzLnByb3BzLmJwaS5FVVIucmF0ZX08L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2xpc3R9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3Qgb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7Y3VycmVuY3k6IGUudGFyZ2V0LnZhbHVlfSl9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJVU0RcIj5VU0Q8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiR0JQXCI+R0JQPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkVVUlwiPkVVUjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcmljZXMiXSwic291cmNlUm9vdCI6IiJ9