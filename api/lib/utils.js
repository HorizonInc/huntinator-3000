import { googleMapsClient } from "../server";
import axios from 'axios';
import _ from 'lodash';
import fs from 'fs';

function getPlacesList(lat, lng, radius) {
   // This is where you should write the code for your ticket Tanjil
}

function getRandomRiddle() {
    let raw_JSON = {};

    try {
        raw_JSON = fs.readFileSync(__dirname + '/../assets/riddles.json');
    } catch {
        console.log("The riddles json file could not be read.");
        return null;
    }
    
    const riddles = JSON.parse(raw_JSON).riddles;
    const max = 129;

    let position = Math.floor(Math.random() * max);

    return riddles[position];
}

function getRandomPlace() {
    let raw_places_JSON = {};

    try {
        raw_places_JSON = fs.readFileSync(__dirname + '/../assets/places.json');
    } catch {
        console.log("The Places json file could not be read.");
        return null
    }

    const places_object = JSON.parse(raw_places_JSON);
    const max = 60;

    let position = Math.floor(Math.random() * max);

    return places_object.places[position];
}

function genGameId() {
    let max = 90000;

    return Math.floor(Math.random() * max) + 10000;
}

/*
This is the function that will return the final Route array.

@param number_of_questions, integer
@param location, object, { latitude: float, longitude: float }
*/
function genRoute(number_of_questions, location) {
    let route_array = [];

    for(let i = 0; i < number_of_questions; i++) {
        let point = getRandomPlace();
        let riddle = getRandomRiddle();

        let pointObject = {
            location: {
                lat: point.location.lat,
                lng: point.location.lng
            },
            puzzle: {
                question: riddle[0],
                answer: riddle[1]
            }
        }

        route_array.push(pointObject);
    }

    return route_array;
}

export {
    getRandomRiddle,
    getPlacesList,
    genGameId,
    genRoute
};