'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  margin: 0 -15px 1rem;\n  box-shadow: 0 3px 6px 1px rgba(0, 0, 0, 0.16),\n    0 3px 6px 1px rgba(0, 0, 0, 0.23);\n\n  @media (min-width: 768px) {\n    margin: 0;\n  }\n'], ['\n  margin: 0 -15px 1rem;\n  box-shadow: 0 3px 6px 1px rgba(0, 0, 0, 0.16),\n    0 3px 6px 1px rgba(0, 0, 0, 0.23);\n\n  @media (min-width: 768px) {\n    margin: 0;\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HeroImageWrapper = _styledComponents2.default.div(_templateObject);

exports.default = HeroImageWrapper;