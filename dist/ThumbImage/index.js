'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  background-color: #ccc;\n  background-image: url(', ');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  width: ', ';\n  height: ', ';\n  border-radius: 4px;\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 2px 3px rgba(0, 0, 0, 0.2);\n\n  min-width: ', ';\n  min-height: ', ';\n'], ['\n  background-color: #ccc;\n  background-image: url(', ');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  width: ', ';\n  height: ', ';\n  border-radius: 4px;\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 2px 3px rgba(0, 0, 0, 0.2);\n\n  min-width: ', ';\n  min-height: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 *
 * ThumbImage
 *
 */

var ThumbImage = _styledComponents2.default.div(_templateObject, function (props) {
  return props.imageUrl;
}, function (props) {
  return props.width ? props.width : '100%';
}, function (props) {
  return props.height ? props.height : '100%';
}, function (props) {
  return props.minWidth ? props.minWidth : 'auto';
}, function (props) {
  return props.minHeight ? props.minHeight : 'auto';
});

var Component = function Component(_ref) {
  var className = _ref.className,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, ['className', 'style']);

  return _react2.default.createElement(ThumbImage, _extends({ className: className, style: style }, props));
};

exports.default = Component;