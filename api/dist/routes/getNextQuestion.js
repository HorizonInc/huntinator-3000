"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _models = require("../db/models");

var jsonParser = _bodyParser["default"].json();

var router = _express["default"].Router();
/* 
Planning to move this to the wiki
/nextQuestion route is called when the user has arrived at the next point and they need to answer a question to get to the next node.

request object: 
{
    game_id, - Used to find the game that the user is playing on
    team_id - Used to iterate the right teams score
}

response object:
{
    question, - The question that the user needs to answer
    answer, - The answer that is required to get the next set of coords
    coordinates: {
        lat, - The next latitude
        lng - The next longitude
    }
}
*/


function findGame(gameId) {
  return new Promise(function (resolve, reject) {
    _models.Hunt.findOne({
      huntId: gameId
    }, function (err, hunt) {
      if (err) {
        reject({
          error_message: err
        });
      } else if (hunt) {
        resolve(hunt);
      }
    });
  });
}

router.post('/nextQuestion', jsonParser,
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(req, res) {
    var reqObject, huntObject, targetTeam, targetTeamIndex, currentTeamNodeNumber, responseObject;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            reqObject = req.body;
            _context2.next = 3;
            return findGame(reqObject.game_id).then(function (hunt) {
              return hunt;
            })["catch"](function (e) {
              res.status(400).json({
                error_message: e.error_message
              }).end();
            });

          case 3:
            huntObject = _context2.sent;
            targetTeam = huntObject.teams.find(function (team) {
              return team.teamId === reqObject.team_id;
            });
            targetTeamIndex = huntObject.teams.findIndex(function () {
              return targetTeam;
            });
            targetTeam.node_number++;
            huntObject.teams[targetTeamIndex] = targetTeam;
            currentTeamNodeNumber = targetTeam.node_number;
            responseObject = {
              question: huntObject.route[currentTeamNodeNumber].puzzle.question,
              answer: huntObject.route[currentTeamNodeNumber].puzzle.answer,
              coordinates: huntObject.route[currentTeamNodeNumber].location
            };
            huntObject.markModified('teams');
            huntObject.save().then(
            /*#__PURE__*/
            function () {
              var _ref2 = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee(result) {
                return _regenerator["default"].wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        res.status(200).json(responseObject).end();

                      case 1:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x3) {
                return _ref2.apply(this, arguments);
              };
            }())["catch"](function (e) {
              console.log(e);
              res.status(500).json({
                error_message: e
              }).end();
            });

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
var _default = router;
exports["default"] = _default;