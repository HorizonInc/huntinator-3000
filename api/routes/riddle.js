import fs from 'fs';
import express from 'express';
import { genRoute } from '../lib/utils.js';

const router = express.Router();

const raw_JSON = fs.readFileSync(__dirname + '/../assets/riddles.json');
const riddles = JSON.parse(raw_JSON).riddles;
const max = 129;

router.get('/randomRiddle', (req, res) => {
    let position = Math.round(Math.random() * max);

    res.status(200).json({
        riddle: riddles[position]
    });
})

router.get('/testGenRoute', (req, res) => {
    console.log("The route array: ", genRoute(20, {}));
})

export default router;
