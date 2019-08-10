"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "mongoose", {
  enumerable: true,
  get: function get() {
    return _mongoose["default"];
  }
});

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var db_srv_url = 'mongodb+srv://huntinator_server:' + process.env.SRV_PASS + '@huntinator-crnnx.mongodb.net/test?retryWrites=true&w=majority';

_mongoose["default"].connect(db_srv_url, {
  useNewUrlParser: true
}).then(function () {
  console.log('Connected to the Huntinator Mongodb database');
}, function (err) {
  console.log('There was an error connecting to the Huntinator Mongodb database: ', err);
});