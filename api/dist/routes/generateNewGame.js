"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _utils = require("../lib/utils.js");

var _models = require("../db/models.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var jsonParser = _bodyParser["default"].json();

var router = _express["default"].Router();

router.post('/newGame', jsonParser, function (req, res) {
  if (req.body.number_of_questions === undefined) {
    res.status(400).json({
      error_message: "number_of_questions was not specified"
    }).end();
  } //if(req.body.location === undefined) { res.status(400).json({error_message: "The location for the hunt was not specified"}).end() } Not needed right now as only doing Brighton to start


  var responseObject = {
    route: (0, _utils.genRoute)(req.body.number_of_questions, {}),
    // Second @param of the genRoute function is left blank for now as API only works for Brighton and Hove
    huntId: (0, _utils.genGameId)(),
    teams: [] // Left as a blank array during generation - will be filled dynamically as players join/leave

  };
  var newHunt = new _models.Hunt(responseObject);
  newHunt.save().then(function (result) {
    res.status(200).json({
      status: "OK",
      message: "Hunt generated and saved!",
      new_game_object: responseObject
    }).end();
  })["catch"](function (e) {
    console.log("Error saving the generated hunt: ", e);
    res.status(500).json({
      status: "Error",
      error_message: e
    }).end();
  });
});
var _default = router;
exports["default"] = _default;