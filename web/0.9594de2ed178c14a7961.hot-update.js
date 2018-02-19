webpackHotUpdate(0,{

/***/ 83:
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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // ./components/Home.jsx


var Login = function (_React$Component) {
  _inherits(Login, _React$Component);

  function Login() {
    _classCallCheck(this, Login);

    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this));

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(Login, [{
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();
      var data = new FormData(event.target);
      var username = data.get('username');
      var email = data.get('email');
      var birthdate = data.get('birthdate');
      console.log(username, email, birthdate);
      fetch('/api/form-submit-url', {
        method: 'POST',
        body: data
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'form',
        { onSubmit: this.handleSubmit },
        _react2.default.createElement(
          'label',
          { htmlFor: 'username' },
          'Enter username'
        ),
        _react2.default.createElement('input', { id: 'username', name: 'username', type: 'text' }),
        _react2.default.createElement(
          'label',
          { htmlFor: 'email' },
          'Enter your email'
        ),
        _react2.default.createElement('input', { id: 'email', name: 'email', type: 'email' }),
        _react2.default.createElement(
          'label',
          { htmlFor: 'birthdate' },
          'Enter your birth date'
        ),
        _react2.default.createElement('input', { id: 'birthdate', name: 'birthdate', type: 'text' }),
        _react2.default.createElement(
          'button',
          null,
          'Send data!'
        )
      );
    }
  }]);

  return Login;
}(_react2.default.Component);

exports.default = Login;

/***/ })

})