'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  position: absolute;\n  color: #fff;\n  font-weight: 800;\n  line-height: inherit;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  text-align: center;\n  font-size: 2.2rem;\n\n  @media (min-width: 768px) {\n    line-height: 1;\n    font-size: 4em;\n    bottom: 15px;\n    left: 25px;\n    width: inherit;\n    text-align: inherit;\n  }\n'], ['\n  position: absolute;\n  color: #fff;\n  font-weight: 800;\n  line-height: inherit;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  text-align: center;\n  font-size: 2.2rem;\n\n  @media (min-width: 768px) {\n    line-height: 1;\n    font-size: 4em;\n    bottom: 15px;\n    left: 25px;\n    width: inherit;\n    text-align: inherit;\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Title = _styledComponents2.default.div(_templateObject);

exports.default = Title;