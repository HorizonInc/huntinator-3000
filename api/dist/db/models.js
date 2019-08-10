"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Hunt = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _schemas = require("./schemas.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Hunt = _mongoose["default"].model('Hunt', _schemas.huntSchema, 'Hunt');

exports.Hunt = Hunt;