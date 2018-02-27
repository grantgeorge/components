'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeroImage = exports.Button = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  background-color: ', ';\n  color: white;\n  padding: 4px 10px;\n  font-size: 14px;\n  border: none;\n  border-radius: 4px;\n'], ['\n  background-color: ', ';\n  color: white;\n  padding: 4px 10px;\n  font-size: 14px;\n  border: none;\n  border-radius: 4px;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _HeroImage = require('./HeroImage');

var _HeroImage2 = _interopRequireDefault(_HeroImage);

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

exports.Button = Button;
exports.HeroImage = _HeroImage2.default;