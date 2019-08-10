"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRandomRiddle = getRandomRiddle;
exports.getPlacesList = getPlacesList;
exports.genId = genId;
exports.genRoute = genRoute;

var _server = require("../server");

var _axios = _interopRequireDefault(require("axios"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getPlacesList(lat, lng, radius) {// This is where you should write the code for your ticket Tanjil
}

function getRandomRiddle() {
  var raw_JSON = {};

  try {
    raw_JSON = _fs["default"].readFileSync(__dirname + '/../assets/riddles.json');
  } catch (_unused) {
    console.log("The riddles json file could not be read.");
    return null;
  }

  var riddles = JSON.parse(raw_JSON).riddles;
  var max = 129;
  var position = Math.floor(Math.random() * max);
  return riddles[position];
}

function getRandomPlace() {
  var raw_places_JSON = {};

  try {
    raw_places_JSON = _fs["default"].readFileSync(__dirname + '/../assets/places.json');
  } catch (_unused2) {
    console.log("The Places json file could not be read.");
    return null;
  }

  var places_object = JSON.parse(raw_places_JSON);
  var max = 60;
  var position = Math.floor(Math.random() * max);
  return places_object.places[position];
}

function genId(max, addition) {
  return Math.floor(Math.random() * max) + addition;
}
/*
This is the function that will return the final Route array.

@param number_of_questions, integer
@param location, object, { latitude: float, longitude: float }
*/


function genRoute(number_of_questions, location) {
  var route_array = [];

  for (var i = 0; i < number_of_questions; i++) {
    var point = getRandomPlace();
    var riddle = getRandomRiddle();
    var pointObject = {
      location: {
        lat: point.location.lat,
        lng: point.location.lng
      },
      puzzle: {
        question: riddle[0],
        answer: riddle[1]
      }
    };
    route_array.push(pointObject);
  }

  return route_array;
}