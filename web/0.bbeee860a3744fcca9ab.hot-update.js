webpackHotUpdate(0,{

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
    key: 'handleRedirect',
    value: function handleRedirect() {
      browserHistory.push('/cars');
    }
  }, {
    key: 'render',
    value: function render() {
      // Car array
      var cars = this.props.route.data;
      // Car Id from param
      var id = this.props.params.id;
      // Filter car with ID
      var car = cars.filter(function (car) {
        if (car.id == id) {
          return car;
        }
      });

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          null,
          car[0].name
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-sm-6 col-md-4' },
            _react2.default.createElement(
              'div',
              { className: 'thumbnail' },
              _react2.default.createElement('img', { src: car[0].media, alt: car[0].name })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-sm-6 col-md-4' },
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Model'
                ),
                ': ',
                car[0].model
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Make'
                ),
                ': ',
                car[0].make
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Year'
                ),
                ': ',
                car[0].year
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Price'
                ),
                ': ',
                car[0].price
              )
            )
          )
        )
      );
    }
  }]);

  return CarDetail;
}(_react.Component);

exports.default = CarDetail;

/***/ })

})