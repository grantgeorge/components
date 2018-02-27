'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DividerTitle = exports.StyledDivider = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  border-top: 1px solid #d9dadc;\n  display: block;\n  line-height: 1px;\n  margin: 1.5rem 0;\n  position: relative;\n  text-align: center;\n'], ['\n  border-top: 1px solid #d9dadc;\n  display: block;\n  line-height: 1px;\n  margin: 1.5rem 0;\n  position: relative;\n  text-align: center;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  background: #ffffff;\n  font-size: 0.8rem;\n  letter-spacing: 1px;\n  padding: 0 20px;\n  text-transform: uppercase;\n'], ['\n  background: #ffffff;\n  font-size: 0.8rem;\n  letter-spacing: 1px;\n  padding: 0 20px;\n  text-transform: uppercase;\n']);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 *
 * Divider
 *
 */

var StyledDivider = exports.StyledDivider = _styledComponents2.default.div(_templateObject);

var DividerTitle = exports.DividerTitle = _styledComponents2.default.strong(_templateObject2);

var Divider = function Divider(_ref) {
  var children = _ref.children,
      className = _ref.className,
      style = _ref.style;

  return React.createElement(
    StyledDivider,
    { className: className, style: style },
    React.createElement(
      DividerTitle,
      null,
      children
    )
  );
};

exports.default = Divider;