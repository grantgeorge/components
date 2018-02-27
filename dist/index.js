'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Button = undefined;

var _templateObject = _taggedTemplateLiteral(['\n\tbackground-color: #007dff;\n\tcolor: white;\n\tpadding: 4px 10px;\n\tfont-size: 14px;\n\tborder: none;\n\tborder-radius: 4px;\n'], ['\n\tbackground-color: #007dff;\n\tcolor: white;\n\tpadding: 4px 10px;\n\tfont-size: 14px;\n\tborder: none;\n\tborder-radius: 4px;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledButton = _styledComponents2.default.button(_templateObject);

var Button = function Button(_ref) {
	var title = _ref.title,
	    onClick = _ref.onClick;
	return _react2.default.createElement(
		StyledButton,
		{ className: 'Button', onClick: onClick },
		title
	);
};

exports.Button = Button;