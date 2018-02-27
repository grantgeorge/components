'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

var _Label = require('./Label');

var _Label2 = _interopRequireDefault(_Label);

var _Span = require('./Span1');

var _Span2 = _interopRequireDefault(_Span);

var _Span3 = require('./Span2');

var _Span4 = _interopRequireDefault(_Span3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BlissInput = function (_PureComponent) {
  _inherits(BlissInput, _PureComponent);

  function BlissInput(props) {
    _classCallCheck(this, BlissInput);

    var _this = _possibleConstructorReturn(this, (BlissInput.__proto__ || Object.getPrototypeOf(BlissInput)).call(this, props));

    _this.onFocus = function () {
      _this.setState({
        'isFocused': true
      });
    };

    _this.onBlur = function () {
      _this.setState({
        'isFocused': false
      });
    };

    _this.onChange = function (event) {
      if (event.target.value.length === 0) {
        _this.setState({
          'isEmpty': true
        });
      } else {
        _this.setState({
          'isEmpty': false
        });
      }
      _this.props.onChange(event);
    };

    _this.state = {
      'isFocused': false,
      'isEmpty': true
    };
    return _this;
  }

  _createClass(BlissInput, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Label2.default,
        { style: this.props.style, htmlFor: this.props.name },
        _react2.default.createElement(_Input2.default, {
          name: this.props.name,
          className: (0, _classnames2.default)({
            'is-focused': this.state.isFocused,
            'is-empty': this.state.isEmpty
          }),
          placeholder: this.props.placeholder,
          onFocus: this.onFocus,
          onBlur: this.onBlur,
          onChange: this.onChange,
          autoFocus: this.props.autoFocus,
          required: this.props.required,
          type: this.props.type || 'text',
          disabled: this.props.disabled
        }),
        _react2.default.createElement(
          _Span2.default,
          null,
          _react2.default.createElement(
            _Span4.default,
            null,
            this.props.label
          )
        )
      );
    }
  }]);

  return BlissInput;
}(_react.PureComponent);

BlissInput.defaultProps = {
  'onChange': function onChange() {},
  'type': 'text'
};
exports.default = BlissInput;