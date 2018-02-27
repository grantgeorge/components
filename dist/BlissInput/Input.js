'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  padding: 0;\n  background: transparent;\n  border: 0;\n  color: #212529;\n  outline: none;\n  cursor: text;\n  display: block;\n  width: 100%;\n  line-height: 32px;\n  padding-bottom: 3px;\n  transition: opacity 200ms ease-in-out;\n  font-weight: 400;\n\n  &:disabled: {\n    cursor: not-allowed;\n    color: rgba(119, 119, 119, 0.65);\n  }\n\n  ::-webkit-input-placeholder {\n    color: #8898aa;\n  }\n  ::-moz-placeholder {\n    color: #8898aa;\n  }\n  ::-ms-input-placeholder {\n    color: #8898aa;\n  }\n\n  /* IE doesn\'t show placeholders when empty+focused */\n  :-ms-input-placeholder {\n    color: #fff;\n  }\n\n  ::placeholder {\n    color: #8898aa;\n  }\n\n  &.is-empty:not(.is-focused) {\n    opacity: 0;\n  }\n\n  &.is-focused + span span,\n  &:not(.is-empty) + span span {\n    transform: scale(0.68) translateY(-36px);\n    cursor: default;\n  }\n\n  &.is-focused + span span,\n  &:not(.is-empty) + span span {\n    transform: scale(0.68) translateY(-36px);\n    cursor: default;\n  }\n\n  &.is-focused + span {\n    border-bottom-color: #007bff;\n  }\n'], ['\n  padding: 0;\n  background: transparent;\n  border: 0;\n  color: #212529;\n  outline: none;\n  cursor: text;\n  display: block;\n  width: 100%;\n  line-height: 32px;\n  padding-bottom: 3px;\n  transition: opacity 200ms ease-in-out;\n  font-weight: 400;\n\n  &:disabled: {\n    cursor: not-allowed;\n    color: rgba(119, 119, 119, 0.65);\n  }\n\n  ::-webkit-input-placeholder {\n    color: #8898aa;\n  }\n  ::-moz-placeholder {\n    color: #8898aa;\n  }\n  ::-ms-input-placeholder {\n    color: #8898aa;\n  }\n\n  /* IE doesn\'t show placeholders when empty+focused */\n  :-ms-input-placeholder {\n    color: #fff;\n  }\n\n  ::placeholder {\n    color: #8898aa;\n  }\n\n  &.is-empty:not(.is-focused) {\n    opacity: 0;\n  }\n\n  &.is-focused + span span,\n  &:not(.is-empty) + span span {\n    transform: scale(0.68) translateY(-36px);\n    cursor: default;\n  }\n\n  &.is-focused + span span,\n  &:not(.is-empty) + span span {\n    transform: scale(0.68) translateY(-36px);\n    cursor: default;\n  }\n\n  &.is-focused + span {\n    border-bottom-color: #007bff;\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Input = exports.Input = _styledComponents2.default.input(_templateObject);

exports.default = Input;