'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  bottom: 0;\n  background-image: linear-gradient(\n    to bottom,\n    rgba(0, 0, 0, 0) 70%,\n    rgba(0, 0, 0, 0.6)\n  );\n'], ['\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  bottom: 0;\n  background-image: linear-gradient(\n    to bottom,\n    rgba(0, 0, 0, 0) 70%,\n    rgba(0, 0, 0, 0.6)\n  );\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BottomOverlay = _styledComponents2.default.div(_templateObject);

exports.default = BottomOverlay;