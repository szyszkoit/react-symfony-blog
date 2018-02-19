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

var _CarDetails = __webpack_require__(82);

var _CarDetails2 = _interopRequireDefault(_CarDetails);

var _reactRouter = __webpack_require__(52);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Import routing components
// Import custom components
(0, _reactDom.render)(_react2.default.createElement(
  _reactRouter.Router,
  { history: _reactRouter.browserHistory },
  _react2.default.createElement(
    _reactRouter.Route,
    { component: _Main2.default, path: 'app' },
    _react2.default.createElement(_reactRouter.IndexRoute, { component: _Home2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/', component: _Home2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/cars', component: _Car2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/cars/:id', component: _CarDetails2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/about', component: _About2.default })
  )
), document.getElementById('app'));

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // ./src/car/car-detail.component.jsx


var CarDetail = function (_Component) {
  _inherits(CarDetail, _Component);

  function CarDetail() {
    _classCallCheck(this, CarDetail);

    return _possibleConstructorReturn(this, (CarDetail.__proto__ || Object.getPrototypeOf(CarDetail)).apply(this, arguments));
  }

  _createClass(CarDetail, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'h1',
        null,
        this.props.params.id
      );
    }
  }]);

  return CarDetail;
}(_react.Component);

exports.default = CarDetail;

/***/ })

})