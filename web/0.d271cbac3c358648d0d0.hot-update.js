webpackHotUpdate(0,{

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(7);

var _reactRouter = __webpack_require__(30);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // ./src/index.jsx

// Import routing components


var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'h1',
        null,
        'Home Page'
      );
    }
  }]);

  return Home;
}(_react.Component);

// More components


var Car = function (_Component2) {
  _inherits(Car, _Component2);

  function Car() {
    _classCallCheck(this, Car);

    return _possibleConstructorReturn(this, (Car.__proto__ || Object.getPrototypeOf(Car)).apply(this, arguments));
  }

  _createClass(Car, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'h1',
        null,
        'Cars page'
      );
    }
  }]);

  return Car;
}(_react.Component);

var About = function (_Component3) {
  _inherits(About, _Component3);

  function About() {
    _classCallCheck(this, About);

    return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));
  }

  _createClass(About, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'h1',
        null,
        'About page'
      );
    }
  }]);

  return About;
}(_react.Component);

(0, _reactDom.render)(_react2.default.createElement(
  _reactRouter.Router,
  null,
  _react2.default.createElement(_reactRouter.Route, { path: '/', component: Home }),
  _react2.default.createElement(_reactRouter.Route, { path: '/cars', component: Car }),
  _react2.default.createElement(_reactRouter.Route, { path: '/about', component: About })
), document.getElementById('app'));

/***/ })

})