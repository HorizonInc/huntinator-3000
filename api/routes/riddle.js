import fs from 'fs';
import express from 'express';

const router = express.Router();

const raw_JSON = fs.readFileSync(__dirname + '/riddles.json');
const riddles = JSON.parse(raw_JSON).riddles;
const max = 129;

router.get('/randomRiddle', (req, res) => {
    let position = Math.round(Math.random() * max);

    res.status(200).json({
        riddle: riddles[position]
    });
})

export default router;
