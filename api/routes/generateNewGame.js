import express from 'express';
import bodyParser from 'body-parser';

import { genRoute, genGameId } from '../lib/utils.js'; 
import { read } from 'fs';

const jsonParser = bodyParser.json();

const router = express.Router();

router.post('/newGame', jsonParser, (req, res) => {
    if(req.body.number_of_questions === undefined) { res.status(400).json({error_message: "number_of_questions was not specified"}).end() }
    //if(req.body.location === undefined) { res.status(400).json({error_message: "The location for the hunt was not specified"}).end() } Not needed right now as only doing Brighton to start

    const number_of_questions = req.body.number_of_questions;
    const responseObject = {}
    responseObject.route = genRoute(number_of_questions, {});
    responseObject.huntId = genGameId();
    responseObject.teams = [];

    res.status(200).json({
        new_game_object: responseObject
    });
});

export default router;