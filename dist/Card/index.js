'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledCard = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  background: white;\n  box-shadow: 0 7px 14px 0 rgba(49, 49, 93, 0.1),\n    0 3px 6px 0 rgba(0, 0, 0, 0.08);\n  border-radius: 4px;\n  padding: 1.25rem;\n  transition: height 0.3s ease;\n\n  @media (min-width: 576px) {\n    padding: 1.5rem;\n  }\n'], ['\n  background: white;\n  box-shadow: 0 7px 14px 0 rgba(49, 49, 93, 0.1),\n    0 3px 6px 0 rgba(0, 0, 0, 0.08);\n  border-radius: 4px;\n  padding: 1.25rem;\n  transition: height 0.3s ease;\n\n  @media (min-width: 576px) {\n    padding: 1.5rem;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 *
 * Card
 *
 */

var StyledCard = exports.StyledCard = _styledComponents2.default.div(_templateObject);

function Card(_ref) {
  var children = _ref.children,
      className = _ref.className,
      style = _ref.style;

  return _react2.default.createElement(
    StyledCard,
    { className: className, style: style },
    children
  );
}

exports.default = Card;