"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _express = _interopRequireDefault(require("express"));

var _utils = require("../lib/utils.js");

var router = _express["default"].Router();

router.get('/testGenRoute', function (req, res) {
  console.log("The route array: ", (0, _utils.genRoute)(20, {}));
});
var _default = router;
exports["default"] = _default;