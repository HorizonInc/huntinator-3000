"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Hunt = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _schemas = require("./schemas.js");

var Hunt = _mongoose["default"].model('Hunt', _schemas.huntSchema, 'Hunt');

exports.Hunt = Hunt;