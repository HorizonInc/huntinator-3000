import express from 'express';
import bodyParser from 'body-parser';
import { Hunt } from '../db/models';

const jsonParser = bodyParser.json();

const router = express.Router();

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
    return new Promise((resolve, reject) => {
        Hunt.findOne({ huntId: gameId }, (err, hunt) => {
            if(err) {
                reject({ error_message: err });
            } else if(hunt) {
                resolve(hunt);
            }
        });
    });
}

router.post('/nextQuestion', jsonParser, async (req, res) => {
    const reqObject = req.body;

    let huntObject = await findGame(reqObject.game_id)
        .then(hunt => hunt)
        .catch(e => {
            res.status(400).json({ error_message: e.error_message }).end();
        });

    let targetTeam = huntObject.teams.find(team => team.teamId === reqObject.team_id);
    let targetTeamIndex = huntObject.teams.findIndex(() => targetTeam);
    
    targetTeam.node_number++;
    huntObject.teams[targetTeamIndex] = targetTeam;

    let currentTeamNodeNumber = targetTeam.node_number;

    let responseObject = {
        question: huntObject.route[currentTeamNodeNumber].puzzle.question,
        answer: huntObject.route[currentTeamNodeNumber].puzzle.answer,
        coordinates: huntObject.route[currentTeamNodeNumber].location
    }

    huntObject.markModified('teams');
    huntObject.save()
        .then(async (result) => {
            console.log("The node_number after save: ", result.teams[targetTeamIndex].node_number);
            res.status(200).json(responseObject).end();
        }).catch(e => {
            console.log(e);
            res.status(500).json({ error_message: e }).end();
        });
    
});

export default router;