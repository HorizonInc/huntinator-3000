"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.huntSchema = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var huntSchema = new Schema({
  huntId: Number,
  route: Array,
  teams: Array
});
exports.huntSchema = huntSchema;