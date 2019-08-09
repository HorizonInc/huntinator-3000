import express from 'express';
import { Hunt } from '../db/models.js';
import { genTeamId } from '../lib/utils.js';

const router = express.Router();

async function findHunt(hunt_id) {
    return new Promise((resolve, reject) => {
        Hunt.findOne({ huntId: hunt_id }, (err, hunt) => {
            if(err) {
                reject({ error_message: err });
            } else if(hunt) {
                resolve(hunt);
            }
        });
    });
}

router.get('/joinGame', async (req, res) => {
    let game_id = req.query.game_id;

    let hunt_object = await findHunt(game_id).then((hunt) => hunt)
        .catch(e => {
            console.log(e);
            hunt_object = e;
        });


    let newTeam = {
        teamId: genTeamId(),
        node_number: 0,
        position: -1 // -1 means that the game hasn't started yet so no position has been assigned
    }

    hunt_object.teams.push(newTeam);

    hunt_object.save()
        .then(result => {
            res.status(200).json(newTeam).end();
        }).catch(e => {
            console.log("There has been an error: ", e);
        })
});

export default router;