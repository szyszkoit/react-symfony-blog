webpackHotUpdate(0,{

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(39);

var _Login = __webpack_require__(83);

var _Login2 = _interopRequireDefault(_Login);

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

var data = [{
  id: 1,
  name: 'Honda Accord Crosstour',
  year: '2010',
  model: 'Accord Crosstour',
  make: 'Honda',
  media: 'http://media.ed.edmunds-media.com/honda/accord-crosstour/2010/oem/2010_honda_accord-crosstour_4dr-hatchback_ex-l_fq_oem_4_500.jpg',
  price: '$16,811'

}, {
  id: 2,
  name: 'Mercedes-Benz AMG GT Coupe',
  year: '2016',
  model: 'AMG',
  make: 'Mercedes Benz',
  media: 'http://media.ed.edmunds-media.com/mercedes-benz/amg-gt/2016/oem/2016_mercedes-benz_amg-gt_coupe_s_fq_oem_1_717.jpg',
  price: '$138,157'

}, {
  id: 3,
  name: 'BMW X6 SUV',
  year: '2016',
  model: 'X6',
  make: 'BMW',
  media: 'http://media.ed.edmunds-media.com/bmw/x6/2016/oem/2016_bmw_x6_4dr-suv_xdrive50i_fq_oem_1_717.jpg',
  price: '$68,999'
}, {
  id: 4,
  name: 'Ford Edge SUV',
  year: '2016',
  model: 'Edge',
  make: 'Ford',
  media: 'http://media.ed.edmunds-media.com/ford/edge/2016/oem/2016_ford_edge_4dr-suv_sport_fq_oem_6_717.jpg',
  price: '$36,275'
}, {
  id: 5,
  name: 'Dodge Viper Coupe',
  year: '2017',
  model: 'Viper',
  make: 'Dodge',
  media: 'http://media.ed.edmunds-media.com/dodge/viper/2017/oem/2017_dodge_viper_coupe_acr_fq_oem_3_717.jpg',
  price: '$123,890'
}];
// Import routing components
// Import custom components


(0, _reactDom.render)(_react2.default.createElement(
  _reactRouter.Router,
  { history: _reactRouter.browserHistory },
  _react2.default.createElement(
    _reactRouter.Route,
    { component: _Main2.default, path: 'app' },
    _react2.default.createElement(_reactRouter.IndexRoute, { component: _Home2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/', component: _Login2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/cars', component: _Car2.default, data: data }),
    _react2.default.createElement(_reactRouter.Route, { path: '/cars/:id', component: _CarDetails2.default, data: data }),
    _react2.default.createElement(_reactRouter.Route, { path: '/about', component: _About2.default })
  )
), document.getElementById('app'));

/***/ }),

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

  function Login(props) {
    _classCallCheck(this, Login);

    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

    _this.state = { value: '' };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(Login, [{
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState({ value: event.target.value });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'form',
        { onSubmit: this.handleSubmit },
        _react2.default.createElement(
          'label',
          null,
          'Name:',
          _react2.default.createElement('input', { type: 'text', value: this.state.value, onChange: this.handleChange })
        ),
        _react2.default.createElement('input', { type: 'submit', value: 'Submit' })
      );
    }
  }]);

  return Login;
}(_react2.default.Component);

exports.default = Login;

/***/ })

})