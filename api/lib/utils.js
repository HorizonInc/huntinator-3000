import { googleMapsClient } from "../server";
import axios from 'axios';
import fs from 'fs';

function getPlacesList(lat, lng, radius) {
   // This is where you should write the code for your ticket Tanjil
}

function getRandomRiddle() {
    const raw_JSON = fs.readFileSync(__dirname + '/riddles.json');
    const riddles = JSON.parse(raw_JSON).riddles;
    const max = 129;

    let position = Math.round(Math.random() * max);

    return riddles[position];
}

export {
    getRandomRiddle,
    getPlacesList
};