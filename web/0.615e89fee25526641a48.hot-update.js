webpackHotUpdate(0,{

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(39);

var _Main = __webpack_require__(81);

var _Main2 = _interopRequireDefault(_Main);

var _Home = __webpack_require__(49);

var _Home2 = _interopRequireDefault(_Home);

var _About = __webpack_require__(50);

var _About2 = _interopRequireDefault(_About);

var _Car = __webpack_require__(51);

var _Car2 = _interopRequireDefault(_Car);

var _reactRouter = __webpack_require__(52);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDom.render)(_react2.default.createElement(
  _reactRouter.Router,
  { history: _reactRouter.browserHistory },
  _react2.default.createElement(
    _reactRouter.Route,
    { component: _Main2.default },
    _react2.default.createElement(_reactRouter.Route, { path: '/', component: _Home2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/cars', component: _Car2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/about', component: _About2.default })
  )
), document.getElementById('app'));
// Import routing components
// Import custom components

/***/ })

})