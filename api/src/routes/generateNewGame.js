import express from 'express';
import bodyParser from 'body-parser';

import { genRoute, genGameId } from '../lib/utils.js'; 
import { Hunt } from '../db/models.js';

const jsonParser = bodyParser.json();

const router = express.Router();

router.post('/newGame', jsonParser, (req, res) => {
    if(req.body.number_of_questions === undefined) { 
        res.status(400).json({error_message: "number_of_questions was not specified"}).end() 
    }
    //if(req.body.location === undefined) { res.status(400).json({error_message: "The location for the hunt was not specified"}).end() } Not needed right now as only doing Brighton to start

    const responseObject = {
        route: genRoute(req.body.number_of_questions, {}), // Second @param of the genRoute function is left blank for now as API only works for Brighton and Hove
        huntId: genGameId(),
        teams: [] // Left as a blank array during generation - will be filled dynamically as players join/leave
    }

    const newHunt = new Hunt(responseObject);

    newHunt.save().then((result) => {

        res.status(200).json({
            status: "OK",
            message: "Hunt generated and saved!",
            new_game_object: responseObject
        }).end();

    }).catch(e => {

        console.log("Error saving the generated hunt: ", e);

        res.status(500).json({
            status: "Error",
            error_message: e
        }).end();

    });
});

export default router;