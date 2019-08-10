"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.huntSchema = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var Schema = _mongoose["default"].Schema;
var huntSchema = new Schema({
  huntId: Number,
  route: Array,
  teams: Array
});
exports.huntSchema = huntSchema;