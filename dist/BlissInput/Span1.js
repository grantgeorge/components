'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Span1 = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  line-height: 32px;\n  color: #8798ab;\n  border-bottom: 1px solid #586a82;\n  transition: border-bottom-color 200ms ease-in-out;\n  cursor: text;\n  pointer-events: none;\n\n  ', '.is-focused {\n    border-bottom-color: red;\n  }\n'], ['\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  line-height: 32px;\n  color: #8798ab;\n  border-bottom: 1px solid #586a82;\n  transition: border-bottom-color 200ms ease-in-out;\n  cursor: text;\n  pointer-events: none;\n\n  ', '.is-focused {\n    border-bottom-color: red;\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// border-bottom-color: #007bff;

var Span1 = exports.Span1 = _styledComponents2.default.span(_templateObject, _Input2.default);

exports.default = Span1;