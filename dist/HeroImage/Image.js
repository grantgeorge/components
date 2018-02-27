'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  background-repeat: no-repeat;\n  background-position: center 33%;\n  background-size: cover;\n  position: relative;\n  width: 100%;\n  height: 170px;\n  border: none;\n  background-color: transparent;\n  background-image: url(', ');\n\n  @media (min-width: 768px) {\n    min-height: 400px;\n    height: 400px;\n  }\n'], ['\n  background-repeat: no-repeat;\n  background-position: center 33%;\n  background-size: cover;\n  position: relative;\n  width: 100%;\n  height: 170px;\n  border: none;\n  background-color: transparent;\n  background-image: url(', ');\n\n  @media (min-width: 768px) {\n    min-height: 400px;\n    height: 400px;\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HeroImage = _styledComponents2.default.div(_templateObject, function (props) {
  return props.imageUrl;
});

exports.default = HeroImage;