'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BottomOverlay = require('./BottomOverlay');

var _BottomOverlay2 = _interopRequireDefault(_BottomOverlay);

var _Image = require('./Image');

var _Image2 = _interopRequireDefault(_Image);

var _HeroImageWrapper = require('./HeroImageWrapper');

var _HeroImageWrapper2 = _interopRequireDefault(_HeroImageWrapper);

var _Title = require('./Title');

var _Title2 = _interopRequireDefault(_Title);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeroImage = function HeroImage(_ref) {
  var title = _ref.title,
      imageUrl = _ref.imageUrl;

  return _react2.default.createElement(
    _HeroImageWrapper2.default,
    null,
    _react2.default.createElement(
      _Image2.default,
      { imageUrl: imageUrl },
      _react2.default.createElement(_BottomOverlay2.default, null),
      _react2.default.createElement(
        _Title2.default,
        null,
        title
      )
    )
  );
};

/**
 *
 * HeroImage
 *
 */

exports.default = HeroImage;