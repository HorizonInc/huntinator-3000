"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _models = require("../db/models.js");

var _utils = require("../lib/utils.js");

var router = _express["default"].Router();

function findHunt(_x) {
  return _findHunt.apply(this, arguments);
}

function _findHunt() {
  _findHunt = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(hunt_id) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", new Promise(function (resolve, reject) {
              _models.Hunt.findOne({
                huntId: hunt_id
              }, function (err, hunt) {
                if (err) {
                  reject({
                    error_message: err
                  });
                } else if (hunt) {
                  resolve(hunt);
                }
              });
            }));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _findHunt.apply(this, arguments);
}

router.get('/joinGame',
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(req, res) {
    var game_id, hunt_object, newTeam;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            game_id = req.query.game_id;
            _context.next = 3;
            return findHunt(game_id).then(function (hunt) {
              return hunt;
            })["catch"](function (e) {
              console.log(e);
              hunt_object = e;
            });

          case 3:
            hunt_object = _context.sent;
            newTeam = {
              teamId: (0, _utils.genId)(900000, 100000),
              gameId: game_id,
              node_number: 0,
              position: -1 // -1 means that the game hasn't started yet so no position has been assigned

            };
            hunt_object.teams.push(newTeam);
            hunt_object.save().then(function (result) {
              res.status(200).json(newTeam).end();
            })["catch"](function (e) {
              console.log("There has been an error: ", e);
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());
var _default = router;
exports["default"] = _default;