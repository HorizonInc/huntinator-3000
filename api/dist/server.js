"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "googleMapsClient", {
  enumerable: true,
  get: function get() {
    return _maps["default"];
  }
});

var _express = _interopRequireDefault(require("express"));

var _maps = _interopRequireDefault(require("@google/maps"));

var _db = _interopRequireDefault(require("./db/db.js"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _cors = _interopRequireDefault(require("cors"));

var _riddle = _interopRequireDefault(require("./test-routes/riddle.js"));

var _generateNewGame = _interopRequireDefault(require("./routes/generateNewGame.js"));

var _joinGame = _interopRequireDefault(require("./routes/joinGame.js"));

var _getNextQuestion = _interopRequireDefault(require("./routes/getNextQuestion.js"));

_dotenv["default"].config();

var app = (0, _express["default"])();
app.use(_express["default"]["static"]('../web/build'));
app.use((0, _cors["default"])());

_maps["default"].createClient({
  key: process.env.G_MAPS_API_KEY
});

var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log("Server is listening on port: ".concat(PORT, " (http://localhost:").concat(PORT, "/)"));
});
app.use('/riddle', _riddle["default"]);
app.use(_generateNewGame["default"]);
app.use(_joinGame["default"]);
app.use(_getNextQuestion["default"]);