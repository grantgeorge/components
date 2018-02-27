'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThumbImage = exports.LoadingIndicator = exports.HeroImage = exports.Divider = exports.Card = exports.Button = exports.BlissInput = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  background-color: ', ';\n  color: white;\n  padding: 4px 10px;\n  font-size: 14px;\n  border: none;\n  border-radius: 4px;\n'], ['\n  background-color: ', ';\n  color: white;\n  padding: 4px 10px;\n  font-size: 14px;\n  border: none;\n  border-radius: 4px;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _BlissInput = require('./BlissInput');

var _BlissInput2 = _interopRequireDefault(_BlissInput);

var _Card = require('./Card');

var _Card2 = _interopRequireDefault(_Card);

var _Divider = require('./Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _HeroImage = require('./HeroImage');

var _HeroImage2 = _interopRequireDefault(_HeroImage);

var _LoadingIndicator = require('./LoadingIndicator');

var _LoadingIndicator2 = _interopRequireDefault(_LoadingIndicator);

var _ThumbImage = require('./ThumbImage');

var _ThumbImage2 = _interopRequireDefault(_ThumbImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledButton = _styledComponents2.default.button(_templateObject, function (props) {
  return props.urgent ? 'red' : '#007dff';
});

var Button = function Button(_ref) {
  var title = _ref.title,
      onClick = _ref.onClick,
      urgent = _ref.urgent;
  return _react2.default.createElement(
    StyledButton,
    { className: 'Button', onClick: onClick, urgent: urgent },
    title
  );
};

exports.BlissInput = _BlissInput2.default;
exports.Button = Button;
exports.Card = _Card2.default;
exports.Divider = _Divider2.default;
exports.HeroImage = _HeroImage2.default;
exports.LoadingIndicator = _LoadingIndicator2.default;
exports.ThumbImage = _ThumbImage2.default;